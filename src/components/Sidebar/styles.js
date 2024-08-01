import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.aside`
    width: 100%;
    height: 100vh;
    grid-area: sidebar;
    display: grid;
    
    grid-template-rows: 6.56rem auto 4rem;
    grid-template-areas:
        "brand"
        "menu"
        "newnote"
    ;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-area: none;
        position: absolute;
        z-index: 1;

        transform: translateX(-100%);
        transition: transform 0.4s ease-in-out;

        &[data-menu-is-open="true"] {
            transform: translateX(0);
        }
    }
`

export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px ;
    border-bottom-style: solid ;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 1.5rem;
        color: ${({ theme}) => theme.COLORS.ORANGE};
    }

    > button {
        display: none;
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        > button {
            display: flex;
            justify-content: center;
            position: absolute;
            right: 1.5rem;
            background: none;
            border: none;
            font-size: 2.5rem;
            color: ${({ theme}) => theme.COLORS.ORANGE};
        }
    }  
`

export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding-top: 4rem;
    text-align: center;
    overflow-y: scroll;
    
    
    > li {
        margin-bottom: 1.5rem;
    }
`

export const NewNote = styled(Link)`
    grid-area: newnote;
    background-color: ${({ theme}) => theme.COLORS.ORANGE};
    color: ${({ theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;
    
    > svg {
        margin-right: .5rem;
    }
`