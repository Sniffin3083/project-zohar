import React from 'react';
import DataTable from 'react-data-table-component';

import NavBar from "../NavBar";
import tableData from '../../../data/XC1/ColonySixData/Reconstruction';

const {useEffect} = React;

const columns = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        width: "200px"
    },
    {
        name: "Items Needed",
        selector: row => row.items,
        sortable: true,
        width: "400px",
        wrap: true
    },
    {
        name: "Funds Needed",
        selector: row => row.funds,
        sortable: true,
        width: "100px"
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

export default function XCOneColony6Reconstruction() {
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
                title="Xenoblade Chronicles One Colony 6 Reconstruction"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    )
}