import styled from "styled-components";

export const Container = styled.span`
    font-size: .75rem;
    padding: .31rem .87rem;
    border-radius: .31rem;
    margin-right: .37rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`