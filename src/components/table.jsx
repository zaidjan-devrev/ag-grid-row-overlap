
import React from 'react'
// import { AgGridReact } from '@ag-grid-community/react';
import { AgGridReact } from 'ag-grid-react';
import clsx from 'clsx';

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
  rowDragEntireRow,
  rowDragManaged,
  rowHeight = 32,
  rowModelType,
  rowSelection,
  columnDefaults = {},
}) => {
  console.log({columnDefs, data})
  return (
    <AgGridReact
      animateRows={animateRows}
      columnDefs={columnDefs}
      // components={columnRenderers}
      context={context}
      // defaultColDef={columnDefaults}
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
      treeData
    />
  )
}

