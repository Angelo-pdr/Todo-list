import * as C from './styles'
import {KeyboardEvent, useState} from 'react'

type Props = {
    onEnter: (taskName: string) => void
}

export const InputText = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('')

    const handleKeyUp = (event: KeyboardEvent) => {
        if(event.code === 'Enter' && inputText !== ''){ 
            onEnter(inputText)
            setInputText('')
        }
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