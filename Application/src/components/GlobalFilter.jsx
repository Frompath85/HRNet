import React from 'react'

export default function GlobalFilter  ({filter, setFilter}){
  return (
    <div>
        <label htmlFor="search"> Search : {' '}</label>
        <input className='border' id="search" type="text" value={filter ||''}
         onChange={e => setFilter(e.target.value)}/>
    </div>
  )
}
