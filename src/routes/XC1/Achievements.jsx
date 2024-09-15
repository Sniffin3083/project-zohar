import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './NavBar';
import XCOneAData from "../../data/XC1/AData"

const {useState} = React;
const {useEffect} = React;

const columns = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        wdith: "200px"
    },
    {
        name: "Objective",
        selector: row => row.objective,
        sortable: true,
        width: "300px",
        wrap: true
    },
    {
       name: "Trial",
       selector: row => row.trial,
       width: "80px" 
    },
    {
        name: "Record",
        selector: row => row.record,
        width: "90px"
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

export default function XCOneAchievements() {
    const [data, setData] = React.useState(XCOneAData);

    useEffect(() => {
        var x = 0;
        for (let i of XCOneAData) {
            if(store.has(XCOneAData[x]["uid"])) {
                XCOneAData[x].toggleSelected = true;
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
                title="Xenoblade Chronicles One Quests"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    )
}