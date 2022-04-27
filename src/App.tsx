import { useState, useEffect } from 'react'
import * as C from './App.styles'
import {ListArea} from './components/ListArea'
import {InputText} from './components/inputText'
import {TypeList} from './types/type.list'

const App = () => {

  const [list, setList] = useState<any[]> (JSON.parse(localStorage.getItem('list') || '[]'))

  useEffect(()=> {
    SaveLocalStorage()
  },[list])

  const removeItem = (newItem: TypeList ) => {
    let newList = [...list]
    const index = newList.indexOf(newItem) 
    if(index > -1){
      newList.splice(index, 1)
    } 
    setList(newList)
    SaveLocalStorage()
  }

  const OnNewItem = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
    SaveLocalStorage()
  }

  const HandleTaskChange = (id:number, done:boolean) => {
      const newList = [...list]
      for(let index in newList){
          if(newList[index].id === id) {
             newList[index].done = done
          }
      }
      setList(newList)
  }

  const SaveLocalStorage = () => {
    localStorage.setItem('list', JSON.stringify(list))
  }

  return(
    <C.Container>
      <C.Area>
        <C.HeaderText>Lista de Tarefas</C.HeaderText>

        <InputText onEnter={OnNewItem} />

        {list.map((item, index) => (
          <ListArea key={index} onRemove={removeItem} item={item} onChange={HandleTaskChange}/>
        ))}
      </C.Area>
    </C.Container>
  )
  
}

export default App 
