import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './Navbar';
import tableData from "../../data/XC2/HTHData"

const {useEffect} = React;

const columns = [
    {
        name: "Title",
        selector: row => row.name,
        sortable: true,
        width: "200px"
    },
    {
        name: "Area",
        selector: row => row.area,
        sortable: true,
        width: "200px",
        wrap: true
    },
    {
        name: "Location",
        selector: row => row.location,
        sortable: true,
        width: "200px",
        wrap: true
    },
    {
        name: "Who",
        selector: row => row.who,
        sortable: true,
        width: "200px",
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
        sortable: true,
        width: "300px",
        wrap: true,
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


export default function XCTwoHTH() {
    const [data, setData] = React.useState(tableData);

    useEffect(() => {
        var x = 0;
        for (let i of tableData) {
            if(store.has(tableData[x]["uid"])) {
                tableData[x].toggleSelected = true;
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
                title="Xenoblade Chronicles Two Heart To Hearts"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}