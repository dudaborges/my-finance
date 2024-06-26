import React from 'react'

const ItemList = ({item}) => {
  return (
    <tr key={item.codigo}>
        <td>{item.codigo}</td>
        <td>{item.descricao}</td>
        <td>{item.entrada}</td>
        <td>{item.saida}</td>
        <td>{item.total}</td>
    </tr>
  )
}

export default ItemList
