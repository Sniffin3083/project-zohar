import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './Navbar';
import XCTwoStoryQuestsData from "../../data/XC2/StoryQuestsData"

const {useEffect} = React;

const columns = [
    {
        name: "Quest Name",
        selector: row => row.name,
        sortable: true,
        width: "200px"
    },
    {
        name: "Giver",
        selector: row => row.giver,
        sortable: true,
        width: "100px"
    },
    {
        name: "Area",
        selector: row => row.area,
        sortable: true,
        width: "300px",
        wrap: true
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
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

var store = JSON.parse(localStorage.getItem("XCTwo-CompletionList"));

if (store === null) {
    store = new Set();
} else {
    store = new Set(store);
}

function saveStore() {
    localStorage.setItem("XCTwo-CompletionList", JSON.stringify([...store]));
}


export default function XCTwoStoryQuests() {
    const [data, setData] = React.useState(XCTwoStoryQuestsData);

    useEffect(() => {
        var x = 0;
        for (let i of XCTwoStoryQuestsData) {
            if(store.has(XCTwoStoryQuestsData[x]["uid"])) {
                XCTwoStoryQuestsData[x].toggleSelected = true;
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
                title="Xenoblade Chronicles Two Story Quests"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}