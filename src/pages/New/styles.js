import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.56rem auto;
    grid-template-areas:
        "header"
        "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const Form = styled.form`
    max-width: 34.37rem;
    margin: 2.37rem auto;
    
    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 2.25rem;

        button {
            font-size: 1.25rem;
            color:  ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 2rem;
    }

`