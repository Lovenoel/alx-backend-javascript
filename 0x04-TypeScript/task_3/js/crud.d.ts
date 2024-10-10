// Create an ambient declaration file for the `crud.js` module

import { RowID, RowElement } from './interface';

// Declare the functions and their types

declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
