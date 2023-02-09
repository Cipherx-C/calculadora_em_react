import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #617668;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-family: Arial, sans-serif;
`

export const Content = styled.div`
    background-color: #00FF00;
    width: 300px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #00000073;
    font-family: Arial, sans-serif;
    `

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

