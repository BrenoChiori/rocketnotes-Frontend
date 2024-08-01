import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 9rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        display: flex;
        align-items: center;
        padding: 0 7.75rem;

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 1.5rem;
        }

        button {
            background: none;
            border: none;
        }

        
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        > header {
            padding: 0 4.75rem;     
        }
    }

`

export const Form = styled.form`
    max-width: 21.25rem;
    margin: 1.87rem auto 0;

    > div:nth-child(4) {
        margin-top: 1.5rem;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -7.75rem auto 2rem;

    width: 11.62rem;
    height: 11.62rem;

    > img {
        width: 11.62rem;
        height: 11.62rem;
        border-radius: 50%;
    }

    > label {
        width: 3rem;
        height: 3rem;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: .43rem;
        right: .43rem;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 1.25rem;
            height: 1.25rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        }
    }

`