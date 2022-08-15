
import React, {useMemo} from 'react'
// import { AgGridReact } from '@ag-grid-community/react';
import { AgGridReact } from 'ag-grid-react';
import clsx from 'clsx';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const Table = ({
  animateRows = true,
  columnDefs,
  context,
  domLayout = 'normal',
  getRowClass,
  getRowId,
  headerHeight = 32,
  loadingOverlayComponent,
  onCellClicked,
  handleGridReady,
  handleGridSizeChanged,
  onRowClicked,
  onRowDragEnd,
  onRowDragEnter,
  onRowGroupOpened,
  onRowSelected,
  onSelectionChanged,
  onSortChange,
  quickFilterText,
  rowBuffer,
  rowClass,
  rowClassRules,
  data,
  columnRenderers,
  rowDragEntireRow,
  rowDragManaged,
  rowHeight = 32,
  rowModelType,
  rowSelection,
  columnDefaults = {},
}) => {
  console.log({columnDefs, data, columnRenderers})
  const gridStyle = useMemo(() => (
    {
      height: "450px",
      width: "95vw",
      display: 'flex',
      'flex-direction': 'column',
    }
  ), []);

  return (
    <div
      className='ag-theme-alpine'
      style={gridStyle}

    >
      <AgGridReact
        animateRows={animateRows}
        columnDefs={columnDefs}
        components={columnRenderers}
        context={context}
        defaultColDef={columnDefaults}
        onGridReady={(params) => {
          console.log('gridReady', params)
        }}
        // domLayout={domLayout}s
        // getRowClass={getRowClass}
        // getRowId={getRowId}
        // groupDisplayType={'custom'}
        // headerHeight={headerHeight}
        // loadingOverlayComponent={loadingOverlayComponent}
        // onCellClicked={onCellClicked}
        // onGridReady={handleGridReady}
        // onGridSizeChanged={handleGridSizeChanged}
        // onRowClicked={onRowClicked}
        // onRowDragEnd={onRowDragEnd}
        // onRowDragEnter={onRowDragEnter}
        // onRowGroupOpened={onRowGroupOpened}
        // onRowSelected={onRowSelected}
        // onSelectionChanged={onSelectionChanged}
        // onSortChanged={onSortChange}
        // quickFilterText={quickFilterText}
        // rowBuffer={rowBuffer}
        // rowClass={clsx(rowClass, onRowClicked && 'cursor-pointer').split(' ')}
        // rowClassRules={rowClassRules}
        rowData={data}
        // rowDragEntireRow={rowDragEntireRow}
        // rowDragManaged={rowDragManaged}
        // rowHeight={rowHeight}
        // rowModelType={'clientSide'}
        // rowSelection={rowSelection}
        // suppressCellFocus
        // suppressRowClickSelection
        // unSortIcon
      />
    </div>
  )
}

