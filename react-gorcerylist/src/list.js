const List = (props) => {
  //   const { itemList } = props
  let numsOfitem = 1

  return (
    <div id="main">
      <h1>My Shopping List</h1>
      <div id="btn-Box">
        <button id="btn" onClick={props.sortName}>
          Item
        </button>
        <button id="btn">Brand</button>
        <button id="btn">Units</button>
        <button id="btn" onClick={props.sortQuantity}>
          Quantity
        </button>
        <button id="btn">Completed</button>
      </div>

      {props.itemlist.map((item, index) => (
        <ul key={index}>
          {' '}
          {numsOfitem++}.<li>{item.item}</li>
          <li>{item.brand}</li>
          <li>{item.units}</li>
          <li>{item.quantity} ea</li>
          <li onClick={() => props.isPurahsed(index)}>
            {item.isPurchased ? 'Yes' : 'No'}
          </li>
          <button id="remove" onClick={() => props.remove(index)}>
            Remove
          </button>
        </ul>
      ))}
    </div>
  )
}
export default List
