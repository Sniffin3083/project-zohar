import React from 'react';
import DataTable from "react-data-table-component";

import NavBar from './Navbar';
import tableData from "../../data/XC2/DeedsData"

const {useEffect} = React;

const columns = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        width: "150px",
        wrap: true
    },
    {
        name: "City",
        selector: row => row.city,
        sortable: true,
        width: "150px",
        wrap: true
    },
    {
        name: "Shop",
        selector: row => row.shop,
        sortable: false,
        width: "150px",
        wrap: true
    },
    {
        name: "Benefit",
        selector: row => row.benefit,
        sortable: false,
        width: "150px",
        wrap: true
    },
    {
        name: "# of Items Sold",
        selector: row => row.sold,
        sortable: true,
        width: "150px",
        wrap: true
    },
    {
        name: "Item(s)",
        selector: row => row.items,
        sortable: false,
        width: "150px",
        wrap: true
    },
    {
        name: "Prerequisites",
        selector: row => row.prerequisites,
        sortable: false,
        width: "150px",
        wrap: true
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


export default function XCTwoDeeds() {
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
                title="Xenoblade Chronicles Two Shop Deeds"
                columns={columns}
                data={data}
                defaultSortFieldId="title"
                onRowClicked={handleRowClicked}
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    );
}