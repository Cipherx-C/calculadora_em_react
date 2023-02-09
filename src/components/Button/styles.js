import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 30px;
    border: 1px solid #00FF00;
    background-color: #141414;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    @media (min-width: 480px) {
        width: calc(100% / 4);
        height: calc(100% / 4);
    }
    
    &:hover {
        opacity: 0.6;
    }
`