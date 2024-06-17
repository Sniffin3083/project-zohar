import React from 'react';
import DataTable from "react-data-table-component";

import XCOneData from "../data/XCOneData"

const {useState} = React;
const {useEffect} = React;

const columns = [
  {
    name: "Id",
    selector: row => row.id,
    sortable: true
  },
  {
    name: "Title",
    selector: row => row.title,
    sortable: true
  },
  {
    name: "Name",
    selector: row => row.name,
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

      document.cookie = "id=" + data.id + "; toggle=" + data.toggleSelected + "; expires=Tue, 31 Dec 2024 12:00:00 TTC";

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
        title="Data"
        columns={columns}
        data={data}
        defaultSortFieldId="title"
        pagination
        onRowClicked={handleRowClicked}
        conditionalRowStyles={conditionalRowStyles}
      />
    </>
  );
}