import logo from './logo.svg'
import './App.css'
import itemList from './itemList'
import List from './list.js'
import { useState } from 'react'

let isToggle = false
function App() {
  const [list, setList] = useState(itemList)

  const remove = (index) => {
    let newList = [...list]
    newList.splice(index, 1)
    console.log(newList)
    setList(newList)
  }

  const isPurahsed = (index) => {
    let newList = [...list]
    const item = newList[index]
    item.isPurchased = !item.isPurchased
    setList(newList)
  }

  const sortName = () => {
    isToggle = !isToggle

    let newList = [...list]
    if (isToggle) {
      newList.sort(function (a, b) {
        if (a.item < b.item) {
          return -1
        }
        if (a.item > b.item) {
          return 1
        }
        return 0
      })
    } else {
      newList.sort(function (a, b) {
        if (a.item > b.item) {
          return -1
        }
        if (a.item < b.item) {
          return 1
        }
        return 0
      })
    }

    // console.log(list)
    setList(newList)
  }

  const sortQuantity = () => {
    isToggle = !isToggle

    let newList = [...list]
    if (isToggle) {
      newList.sort(function (a, b) {
        if (a.quantity < b.quantity) {
          return -1
        }
        if (a.quantity > b.quantity) {
          return 1
        }
        return 0
      })
    } else {
      newList.sort(function (a, b) {
        if (a.quantity > b.quantity) {
          return -1
        }
        if (a.quantity < b.quantity) {
          return 1
        }
        return 0
      })
    }

    // console.log(list)
    setList(newList)
  }

  return (
    <div className="App">
      <List
        itemlist={list}
        remove={remove}
        isPurahsed={isPurahsed}
        sortName={sortName}
        sortQuantity={sortQuantity}
      />
    </div>
  )
}

export default App
