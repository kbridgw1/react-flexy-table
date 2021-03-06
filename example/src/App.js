import React, { useState } from 'react'

import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'
import './index.css'
import data from './jsonData'
import deleteIcon from './icons/delete-button-svgrepo-com.svg'
import editIcon from './icons/edit-svgrepo-com.svg'
const App = () => {
  const [caseSensivite, setCaseSensivite] = useState(false)
  const [sortable, setSortable] = useState(true)
  const [filterable, setFilterable] = useState(true)
  const additionalCols = [
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            <img
              src={deleteIcon}
              alt='delete'
              width='30'
              height='20'
              onClick={() => alert('this is delete for id ' + data.id)}
            />
            <img
              src={editIcon}
              alt='edit'
              width='30'
              height='20'
              onClick={() => alert('this is edit for id ' + data.id)}
            />
          </div>
        )
      }
    }
  ]
  const columns = [
    {
      header: 'name',
      key: 'user.name'
    },
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            <img
              src={deleteIcon}
              alt='delete'
              width='30'
              height='20'
              onClick={() => alert('this is delete for id ' + data.id)}
            />
            <img
              src={editIcon}
              alt='edit'
              width='30'
              height='20'
              onClick={() => alert('this is edit for id ' + data.id)}
            />
          </div>
        )
      }
    }
  ]
  return (
    <div style={{ margin: '30px' }}>
      <h2 style={{ textAlign: 'center' }}>react-flexy-table</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '30px' }}>
          <label>Handle search case sensivite</label>
          <select
            onChange={(e) => setCaseSensivite(e.target.value === 'true')}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={caseSensivite}
          >
            <option value={false}>Close</option>
            <option value={true}>Open</option>
          </select>
        </div>
        <div style={{ margin: '30px' }}>
          <label>Handle sortable</label>
          <select
            onChange={(e) => setSortable(e.target.value === 'true')}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={sortable}
          >
            <option value={false}>Close</option>
            <option value={true}>Open</option>
          </select>
        </div>
        <div style={{ margin: '30px' }}>
          <label>Handle filterable</label>
          <select
            onChange={(e) => setFilterable(e.target.value === 'true')}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={filterable}
          >
            <option value={false}>Close</option>
            <option value={true}>Open</option>
          </select>
        </div>
      </div>
      <ReactFlexyTable
        data={data}
        sortable={sortable}
        filterable={filterable}
        caseSensitive={caseSensivite}
        additionalCols={additionalCols}
        globalSearch
      />
    </div>
  )
}

export default App
