import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './Navbar';
import XCTwoFooraraData from "../../data/XC2/FooraraData"

const {useEffect} = React;

const columns = [
    {
        name: "#",
        selector: row => row.number,
        sortable: false,
        width: "50px"
    },
    {
        name: "Region",
        selector: row => row.region,
        sortable: true,
        width: "200px",
        wrap: true
    },
    {
        name: "Location",
        selector: row => row.location,
        sortable: false,
        width: "500px",
        wrap: true
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

var store = JSON.parse(localStorage.getItem("XCTwo-CompletionList"));

if (store === null) {
    store = new Set();
} else {
    store = new Set(store);
}

function saveStore() {
    localStorage.setItem("XCTwo-CompletionList", JSON.stringify([...store]));
}


export default function XCTwoFoorara() {
    const [data, setData] = React.useState(XCTwoFooraraData);

    useEffect(() => {
        var x = 0;
        for (let i of XCTwoFooraraData) {
            if(store.has(XCTwoFooraraData[x]["uid"])) {
                XCTwoFooraraData[x].toggleSelected = true;
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
                title="Xenoblade Chronicles Two Foorara Locations"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}