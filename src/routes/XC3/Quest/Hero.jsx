import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from '../NavBar.jsx';
import tableData from "../../../data/XC3/QuestData/Hero"

const {useEffect} = React;

const columns = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        width: "300px"
    },
    {
        name: "Giver",
        selector: row => row.giver,
        sortable: false,
        width: "150px"
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
        sortable: false,
        width: "300px",
        wrap: true
    },
    {
        name: "Req. Chapter",
        selector: row => row.chapter,
        sortable: true,
        width: "300px"
    },
    {
        name: "Region",
        selector: row => row.region,
        sortable: true,
        width: "150px"
    },
    {
        name: "Location",
        selector: row => row.location,
        sortable: false,
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

var store = JSON.parse(localStorage.getItem("XCThree-CompletionList"));

if (store === null) {
    store = new Set();
} else {
    store = new Set(store);
}

function saveStore() {
    localStorage.setItem("XCThree-CompletionList", JSON.stringify([...store]));
}


export default function XCThreeQuestHero() {
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
                title="Xenoblade Chronicles Three Hero Quests"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}