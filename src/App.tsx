import { useState, useEffect } from 'react'
import * as C from './App.styles'
import {List} from './List'
import {ListArea} from './components/ListArea'
import {InputText} from './components/inputText'
import {TypeList} from './types/type.list'

const App = () => {
  const [list, setList] = useState (List)

  useEffect(() => {
      setList(List)
  },[List])

  const removeItem = (itemNumber: TypeList ) => {
      let newList = [...list]

      const index = newList.indexOf(itemNumber) 
      if(index> -1){
        newList.splice(index, 1)
      }

      setList(newList)
  }

  return(

    <C.Container>
      <C.Area>
        <C.HeaderText>Lista de Tarefas</C.HeaderText>

        <InputText />

        {list.map((item) => (
          <ListArea onRemove={removeItem} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  )

}

export default App
