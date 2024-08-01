import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
    grid-area: header;
    height: 6.56rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 2rem;
    }
`

export const Menu = styled.button`
    display: flex;
    background: none;
    border: none;
    display: none;

    > svg {
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: flex;
            align-self: center;
            position: absolute;
            left: 1.5rem;
    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        line-height: 1.5rem;

        span {
            font-size: .87rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 1.12rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-left: 3.5rem;
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.25rem;
    }
`