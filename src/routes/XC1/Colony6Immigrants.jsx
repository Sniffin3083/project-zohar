import React from 'react';
import DataTable from 'react-data-table-component';

import NavBar from "./NavBar";
import XCOneCSixIData from '../../data/XC1/CSixIData';

const {useStata} = React;
const {useEffect} = React;

const columns = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        width: "200px"
    },
    {
        name: "Location and Time",
        selector: row => row.area,
        sortable: true,
        width: "300px"
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
        sortable: true,
        width: "400px",
        wrap: true
    },
    {
        name: "Mutually Exclusive?",
        selector: row => row.exclusive,
        sortable: true,
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

export default function XCOneColony6Immigrants() {
    const [data, setData] = React.useState(XCOneCSixIData);

    useEffect(() => {
        var x = 0;
        for (let i of XCOneCSixIData) {
            if(store.has(XCOneCSixIData[x]["uid"])) {
                XCOneCSixIData[x].toggleSelected = true;
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
                title="Xenoblade Chronicles One Colony 6 Immigrants"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    )
}