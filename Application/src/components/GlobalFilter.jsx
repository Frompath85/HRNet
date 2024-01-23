/**
 * filtrer les employées selon le champ de recherche saisie 
 * @param {string} filter
 * @param {function} setFilter
 */
import React from 'react'

export default function GlobalFilter ({filter, setFilter}){
  return (
    <div>
        <label htmlFor="search"> Search : {' '}</label>
        <input className='border-2 border-emerald-600 rounded' id="search" type="text" value={filter ||''}
         onChange={e => setFilter(e.target.value)}/>
    </div>
  )
}
