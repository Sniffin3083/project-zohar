import React from 'react';
import DataTable from 'react-data-table-component';

import NavBar from "./NavBar";
import tableData from '../../data/XC1/UMonsterData';

const {useEffect} = React;

const columns = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        width: "200px"
    },
    {
        name: "Level",
        selector: row => row.level,
        sortable: true,
        width: "100px"
    },
    {
        name: "Time and Location",
        selector: row => row.area,
        sortable: true,
        width: "300px",
        wrap: true
    },
    {
        name: "Mechon?",
        selector: row => row.mechon,
        sortable: true,
        width: "95px"
    },
    {
        name: "Quest Monster?",
        selector: row => row.quest,
        sortable: true,
        width: "130px"
    },
    {
        name: "Quest Name",
        selector: row => row.questName,
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

export default function XCOneUMonster() {
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
                title="Xenoblade Chronicles One Unique Monsters"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    )
}