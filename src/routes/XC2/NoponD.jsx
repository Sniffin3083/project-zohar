import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './Navbar';
import XCTwoNoponDData from "../../data/XC2/NoponDData"

const {useEffect} = React;

const columns = [
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


export default function XCTwoNoponDoubloons() {
    const [data, setData] = React.useState(XCTwoNoponDData);

    useEffect(() => {
        var x = 0;
        for (let i of XCTwoNoponDData) {
            if(store.has(XCTwoNoponDData[x]["uid"])) {
                XCTwoNoponDData[x].toggleSelected = true;
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
                title="Xenoblade Chronicles Two Nopon Doubloons"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}