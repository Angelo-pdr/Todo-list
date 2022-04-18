import * as C from './styles'
import {TypeList} from '../../types/type.list'
type Props = {
    item:TypeList 

}



export const ListArea = ({item}: Props) => {

    const RandomColor = ():string => {
    
        let colors = ['#04D939', '#0FC2C0', '#D92525', '#FF4858', '#FF6B1A']
        const random = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
        return  colors[random(0, colors.length)]  
    }

    return(
        
        <C.Container color={RandomColor}>
            <C.CheckItems>
                <input type="checkbox" />
                <p>{item.name}</p>
            </C.CheckItems>
            
        </C.Container>
    )
}