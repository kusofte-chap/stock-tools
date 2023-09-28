import { useRef, useMemo, useCallback } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { table_data_01 } from "../table.data";

export default function AdGridTable() {
  const gridRef = useRef();

  const columnDefs = [
    { field: "Index" },
    { field: "2022-09-30" },
    { field: "2022-12-31" },
    { field: "2023-03-31" },
    { field: "2023-06-30" },
  ];

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

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
