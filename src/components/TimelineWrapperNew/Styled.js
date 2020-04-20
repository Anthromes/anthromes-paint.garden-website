import styled from 'styled-components'
import colors from '../../constants/colors'
export const Wrapper = styled.div`
height: 60px;
position:fixed;
bottom: 65px;
align-items: center;
padding: 0;
width: 100%;
background-color: rgba(255,255,255, 0.8);
justify-content: space-between;
box-shadow: 0 2px 7px lightgrey;
z-index: 222;
@media (min-width: 768px) {
  padding: 0 25px;
}
`

export const Dot = styled.label `
  display:inline-block;
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: ${colors.sliderNotchBlue}
`

export const Bar = styled.div `
  height: 9px;
  background-color: ${colors.sliderBlue};
  border-radius: 10px;
`
