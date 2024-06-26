import React from 'react'
import '../Styles/Home.css'

const Home = ( { totalEntries, totalOutflows, total } ) => {
  return (
    <div>
        <h1 className='main-title'>Home</h1>
        <div className='content-infos'>
            <p className='infos-home'><span>Total Entradas:</span> {totalEntries}</p>
            <p className='infos-home'><span>Total Saídas:</span> {totalOutflows}</p>
            <p className='infos-home'><span>Saldo Atual:</span> {total} </p>
        </div>

    </div>
  )
}

export default Home
