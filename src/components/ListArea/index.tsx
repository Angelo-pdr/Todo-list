import * as C from './styles'
import {TypeList} from '../../types/type.list'
type Props = {
    item:TypeList 
    color: () => void
}



export const ListArea = ({item, color} : Props) => {

    const RandomColor = () => {
    
        let colors = ['#04D939', '#0FC2C0', '#D92525', '#FF4858', '#FF6B1A']

         
    }

    return(
        <C.Container color={ListArea}>
            <C.CheckItems>
                <input type="checkbox" />
                <p>{item.name}</p>
            </C.CheckItems>
            
        </C.Container>
    )
}