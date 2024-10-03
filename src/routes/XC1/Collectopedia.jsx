import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './NavBar';
import tableData from "../../data/XC1/CollData"

const {useEffect} = React;

const columns = [
    {
        name: "Type",
        selector: row => row.type,
        sortable: true,
        width: "80px"
    },
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        width: "300px"
    },
    {
        name: "Area",
        selector: row => row.area,
        sortable: true,
        width: "150px"
    },
    {
        name: "Location",
        selector: row => row.location,
        sortable: true,
        width: "300px"
    },
    {
        name: "Trade",
        selector: row => row.trade,
        sortable: true,
        width: "400px",
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

var store = JSON.parse(localStorage.getItem("XCOne-CompletionList"));

if (store === null) {
    store = new Set();
} else {
    store = new Set(store);
}

function saveStore() {
    localStorage.setItem("XCOne-CompletionList", JSON.stringify([...store]));
}


export default function XCOneCollectopedia() {
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
                title="Xenoblade Chronicles One Collectopedia"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}