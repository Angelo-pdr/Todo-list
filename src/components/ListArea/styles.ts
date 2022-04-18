import styled from "styled-components";

export const Container = styled.div<{color: string}>`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    color: #262626;
`
export const CheckItems = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 0px;

    input {
        width: 20px;
        height: 20px;
        padding: 0px;
        margin: 0px;
        margin-left: 5px;
    }

    p{
        padding: 0px;
        margin: 0px;
    }
`