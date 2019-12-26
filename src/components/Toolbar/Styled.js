import styled from 'styled-components'
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  box-shadow: 0 2px 7px lightgrey;

  @media (min-width: 768px) {
    padding: 0 25px;
  }
`

export const LinksArea = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  background: white;

  & > a {
    text-decoration: none;
  }
`

export const Logo = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding-left: 1em;
  }
`

export const BtnContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 25px;
  margin-right: 0.5em;
  position: relative;
`

export const BtnMenu = styled.div`
  position: absolute;
  z-index: 10000;
  background: white;
  top: 46px;
  right: -8px;
  padding: 0.5em 1em;
  display: block;
`

export const Bar = styled.div`
  width: 25px;
  height: 2px;
  background-color: ${colors.darkGrey};
  margin: 6px 0;
  transition: 0.4s;
  
  ${props => props.open && props.bar1 && `transform: rotate(-45deg) translate(-7px, 6px);`}
  ${props => props.open && props.bar2 && `opacity: 0;`}
  ${props => props.open && props.bar3 && `transform: rotate(45deg) translate(-5px, -5px);`}
`
