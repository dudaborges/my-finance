import React from 'react'
import '../Styles/Transactions.css'
import ItemList from '../Components/ItemList'

const Transactions = ({ list }) => {
  return (
    <div className='transaction-section'>
      <h1 className='main-title'>Transações</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Entrada</th>
            <th>Saída</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <ItemList item={item} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
