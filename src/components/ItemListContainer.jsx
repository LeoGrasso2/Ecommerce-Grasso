import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className="item-list">
      <div className="item">{props.greeting}</div>
    </div>
  )
}

export default ItemListContainer