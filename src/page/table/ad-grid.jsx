import { useState, useRef, useEffect, useMemo, useCallback } from "react";

import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import request from "../../api/request";
import { table_data_01 } from "../table.data";

export default function AdGridTable() {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "Index" },
    { field: "2022-09-30" },
    { field: "2022-12-31" },
    { field: "2023-03-31" },
    { field: "2023-06-30" },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  // Example load data from server
  //   useEffect(() => {
  //     fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //       .then((result) => result.json())
  //       .then((rowData) => setRowData(rowData));

  //     request.get

  //   }, []);

  return (
    <div className="ag-theme-alpine" style={{ width: "100%", height: 600 }}>
      <AgGridReact
        ref={gridRef} // Ref for accessing Grid's API
        rowData={table_data_01} // Row Data for Rows
        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection="multiple" // Options - allows click selection of rows
        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
      />
    </div>
  );
}