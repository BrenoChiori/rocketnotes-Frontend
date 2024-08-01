import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 6.56rem 8rem auto 4rem;
    grid-template-areas: 
        "sidebar header"
        "sidebar search"
        "sidebar content"
        "sidebar content"
    ;

    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_800};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex: 1;
        grid-template-columns: auto;
        grid-template-rows: 6.56rem 8rem auto;

        grid-template-areas: 
            "header"
            "search"
            "content"
        ;
    }

`

export const Search = styled.div`
    grid-area: search;
    padding: 4rem 4rem 0;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 3rem 1rem 0;
    }
`
export const Content = styled.div`
    grid-area: content;
    padding: 0 4rem;
    overflow-y: auto;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 1rem;
    }
`