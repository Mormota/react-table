import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table'

const table = [
  {column_id: 1, rows: 
    [
      {type: 'header', content: 'Column Header 1'},
      {type: 'field', content: 'Column 1 - Row 1'},
      {type: 'field', content: 'Column 1 - Row 2'},
      {type: 'field', content: 'Column 1 - Row 3'},
      {type: 'field', content: 'Column 1 - Row 4'},
      {type: 'field', content: 'Column 1 - Row 5'}
    ]},
  {column_id: 2, rows:
    [
      {type: 'header', content: 'Column Header 2'},
      {type: 'field', content: 'Column 2 - Row 1'},
      {type: 'field', content: 'Column 2 - Row 2'},
      {type: 'field', content: 'Column 2 - Row 3'},
      {type: 'field', content: 'Column 2 - Row 4'},
      {type: 'field', content: 'Column 2 - Row 5'}
    ]},
  {column_id: 3, rows:
    [
      {type: 'header', content: 'Column Header 3'},
      {type: 'field', content: 'Column 3 - Row 1'},
      {type: 'field', content: 'Column 3 - Row 2'},
      {type: 'field', content: 'Column 3 - Row 3'},
      {type: 'field', content: 'Column 3 - Row 4'},
      {type: 'field', content: 'Column 3 - Row 5'}
    ]},
  {column_id: 4, rows:
    [
      {type: 'header', content: 'Column Header 4'},
      {type: 'field', content: 'Column 4 - Row 1'},
      {type: 'field', content: 'Column 4 - Row 2'},
      {type: 'field', content: 'Column 4 - Row 3'},
      {type: 'field', content: 'Column 4 - Row 4'},
      {type: 'field', content: 'Column 4 - Row 5'}
    ]}
]

const table_2 = [
  {type: 'header', cells: [
    'Header-1',
    'header-2',
    'Header-3'
  ]},
  {type: 'cell', cells: [
    'cell-3',
    'cell-2',
    'cell-1'
  ]},
  {type: 'cell', cells: [
    'cell-1',
    'cell-2',
    'cell-3'
  ]}
]

export default ReactDOM.render(<Table table={table_2}/>, document.getElementById('root'));
