import { useState, useEffect } from 'react'
import * as C from './App.styles'
import {List} from './List'
import {ListArea} from './components/ListArea'

const App = () => {

  const [list, setList] = useState (List)

  return(

    <C.Container>
      <C.Area>
        <C.HeaderText>Lista de Tarefas</C.HeaderText>

        {/* Area de inseração */}

        {list.map((item, key) => (
          <ListArea item={item}/>
        ))}
      </C.Area>
    </C.Container>
  )

}

export default App
