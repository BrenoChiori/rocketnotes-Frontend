import styled from 'styled-components'
import backgroundImg from '../../assets/Image_Login.png'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 1.5rem;
    margin: 3rem 0;
  }

  > p {
    font-size: .87rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 7.75rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MG}) {
    flex: 1;
    padding: 0 12.8rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex: 1;
    padding: 0 8.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex: 1;
    padding: 0 1.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    flex: 1;

    > a {
    margin-top: 2.75rem;
  }
  }
  
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: ${DEVICE_BREAKPOINTS.MG}) {
    flex: 0;
  }
`