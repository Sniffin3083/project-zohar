import React from 'react';
import DataTable from "react-data-table-component";

import XCOneData from "../data/XCOneData"

const {useState} = React;
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
    name: "Time and Location",
    selector: row => row.area,
    sortable: true,
    width: "300px"
  },
  {
    name: "Prerequisites",
    selector: row => row.prerequisites,
    sortable: true,
    width: "400px",
    wrap: true,
  },
  {
    name: "Timed?",
    selector: row => row.timed,
    sortable: true,
    width: "80px"
  },
  {
    name: "Mutually Exclusive?",
    selector: row => row.exclusive,
    sortable: true
  }
];

const conditionalRowStyles = [
  {
    
    when: row => row.toggleSelected,
    style: {
      backgroundColor: "green",
      userSelect: "none"
    }
  }
];

export default function XCOne() {

  const [data, setData] = React.useState(XCOneData);

  const handleRowClicked = row => {
    const updatedData = data.map(item => {
      if (row.id !== item.id) {
        return item;
      }

      if(localStorage.getItem(item.id) === "true") {
        localStorage.removeItem(item.id);
      }
      
      else {
        localStorage.setItem(item.id, true)
      }

      return {
        ...item,
        toggleSelected: !item.toggleSelected
      };
    });

    setData(updatedData);
  };

  return (
    <>
      <DataTable
        title="Xenoblade Chronicles One Side Quests"
        columns={columns}
        data={data}
        defaultSortFieldId="title"
        onRowClicked={handleRowClicked}
        conditionalRowStyles={conditionalRowStyles}
      />
    </>
  );
}