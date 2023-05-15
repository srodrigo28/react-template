import styled from "styled-components";

export const Container = styled.div`
    background-color: darkviolet;
    transition: 2s;

    height: 5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: #fff;
`;

export const Nav = styled.div`
    display: flex;
    gap: 30px;

    :visited{ color: #fff; }

    :hover{
        background-color: violet;
        padding: 0px 10px;
        border-radius: 10px;
    }
    
`;