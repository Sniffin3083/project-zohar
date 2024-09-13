import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './NavBar';
import XCOneHTHData from "../../data/XC1/XCOneHTHData"

const {useState} = React;
const {useEffect} = React;

const columns = [
    {
        name: "Title",
        selector: row => row.title,
        sortable: true,
        width: "150px"
    },
    {
        name: "Location",
        selector: row => row.area,
        sortable: true,
        width: "300px",
        wrap: true
    },
    {
        name: "Characters",
        selector: row => row.characters,
        sortable: true,
        width: "120px"
    },
    {
        name: "Affinity",
        selector: row => row.affinity,
        sortable: true,
        width: "120px"
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
        sortable: true,
        width: "300px"
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

export default function XCOneHeart() {
    const [data, setData] = React.useState(XCOneHTHData);

    useEffect(() => {
        var x = 0;
        for (let i of XCOneHTHData) {
            if(store.has(XCOneHTHData[x]["uid"])) {
                XCOneHTHData[x].toggleSelected = true;
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

    return(
        <>
            <NavBar />
            <DataTable
                title="Xenoblade Chronicles One Heart to Hearts"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </> 
    )
}