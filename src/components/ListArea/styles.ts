import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div<{color: string}>`

    display: flex;
    align-items: center;
    background-color: ${props => props.color ?? 'blue'};
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    color: #0D0D0D;

    div{
        cursor: pointer;
        width: 20px;
    }

`

export const CheckItems = styled.div(({done}: ContainerProps) =>(   
    `
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 0px;
    flex: 1;

    input {
        width: 20px;
        height: 20px;
        padding: 0px;
        margin: 0px;
        margin-left: 5px;
        cursor: pointer;
    }

    p{
        padding: 0px;
        margin: 0px;
        margin-left: 5px;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }

    `
))