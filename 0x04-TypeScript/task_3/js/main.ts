// Import required types and module
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object with the type RowElement
const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

// Insert row and store the ID in newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Update the row using the row ID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the row ID
CRUD.deleteRow(newRowID);
