import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './Navbar';
import tableData from "../../data/XC2/ChallengeData"

const {useEffect} = React;

const columns = [
    {
        name: "Challenge Name",
        selector: row => row.name,
        sortable: true,
        width: "300px"
    },
    {
        name: "Difficulty",
        selector: row => row.difficulty,
        sortable: true,
        width: "150px"
    },
    {
        name: "Time Limit",
        selector: row => row.time,
        sortable: true,
        width: "100px"
    },
    {
        name: "Waves",
        selector: row => row.waves,
        sortable: true,
        width: "100px"
    },
    {
        name: "Max Level",
        selector: row => row.level,
        sortable: true,
        width: "100px"
    },
    {
        name: "Blade Powers",
        selector: row => row.blade,
        sortable: true,
        width: "100px"
    },
    {
        name: "Driver Restrictions",
        selector: row => row.driver,
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

var store = JSON.parse(localStorage.getItem("XCTwo-CompletionList"));

if (store === null) {
    store = new Set();
} else {
    store = new Set(store);
}

function saveStore() {
    localStorage.setItem("XCTwo-CompletionList", JSON.stringify([...store]));
}


export default function XCTwoEasyChallenge() {
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
                title="Xenoblade Chronicles Two Challenge Mode On Easy"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}