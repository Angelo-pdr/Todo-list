import * as C from './styles'
import {KeyboardEvent, useState} from 'react'


export const InputText = () => {

    const [inputText, setInputText] = useState('')

    const handleKeyUp = (event: KeyboardEvent) => {
        console.log(event)
    }

    return(
        <C.Container>
            <div className='image'>+</div>
            
            <input 
                type="text"
                placeholder='Adicione uma Tarefa'
                value={inputText}
                onChange={event => setInputText(event.target.value)}
                onKeyUp={handleKeyUp}  
            />
        </C.Container>
    )
}