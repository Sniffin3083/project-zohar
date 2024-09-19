import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './NavBar';
import XCOneTMRestrictedData from "../../data/XC1/TMRestrictedData"

const {useEffect} = React;

const columns = [
    {
        name: "Challenge Name",
        selector: row => row.name,
        sortable: true,
        width: "200px"
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
        sortable: true,
        width: "300px",
        wrap: true
    },
    {
        name: "Waves",
        selector: row => row.waves,
        sortable: true,
        width: "90px"
    },
    {
        name: "Difficulty",
        selector: row => row.difficulty,
        sortable: true,
        width: "110px"
    },
    {
        name: "Formation",
        selector: row => row.formation,
        sortable: true,
        width: "200px"
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


export default function XCOneTimeAttackRestricted() {
    const [data, setData] = React.useState(XCOneTMRestrictedData);

    useEffect(() => {
        var x = 0;
        for (let i of XCOneTMRestrictedData) {
            if(store.has(XCOneTMRestrictedData[x]["uid"])) {
                XCOneTMRestrictedData[x].toggleSelected = true;
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
                title="Xenoblade Chronicles One Time Attack Restricted"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}