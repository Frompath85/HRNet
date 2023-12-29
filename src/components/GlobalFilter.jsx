import React from 'react'

export default function GlobalFilter  ({filter, setFilter}){
  return (
    <span>
        Search : {' '}
        <input className='border' type="text" value={filter ||''}
         onChange={e => setFilter(e.target.value)}/>
    </span>
  )
}
