import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './NavBar';
import XCOneQData from "../../data/XC1/QData"

const {useState} = React;
const {useEffect} = React;

const columns = [
    {
        name: "Quest Name",
        selector: row => row.name,
        sortable: true,
        width: "200px"
    },
    {
        name: "Giver",
        selector: row => row.giver,
        sortable: true,
        width: "100px"
    },
    {
        name: "Time and Location",
        selector: row => row.area,
        sortable: true,
        width: "300px",
        wrap: true
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
        sortable: true,
        width: "400px",
        wrap: true,
    },
    {
        name: "Timed?",
        selector: row => row.timed,
        sortable: true,
        width: "80px"
    },
    {
        name: "Mutually Exclusive?",
        selector: row => row.exclusive,
        sortable: true
    }
];

const conditionalRowStyles = [
    {
        when: row => row.toggleSelected,
        style: {
            backgroundColor: "green",
            userSelect: "none"
        },
    }
];

var store = JSON.parse(localStorage.getItem("XCOne-CompletionList"));

if (store === null) {
    store = new Set();
} else {
    store = new Set(store);
}

function saveStore() {
    localStorage.setItem("XCOne-CompletionList", JSON.stringify([...store]));
}


export default function XCOneSideQuests() {
    const [data, setData] = React.useState(XCOneQData);

    useEffect(() => {
        var x = 0;
        for (let i of XCOneQData) {
            if(store.has(XCOneQData[x]["uid"])) {
                XCOneQData[x].toggleSelected = true;
            }
            x++;
        }
    }, [])

    const handleRowClicked = row => {
        const updatedData = data.map(item => {
            if (row.uid !== item.uid) {
                return item;
            }

            if(store.has(item.uid)) {
                store.delete(item.uid);
            } else {
                store.add(item.uid);
            }

            saveStore();

            return {
                ...item,
                toggleSelected: !item.toggleSelected
            };
        });

        setData(updatedData);
  };

    return (
        <>
            <NavBar />
            <DataTable
                title="Xenoblade Chronicles One Side Quests"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}