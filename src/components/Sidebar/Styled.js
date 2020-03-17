import styled, { keyframes } from 'styled-components'
import colors from '../../constants/colors'

const move = keyframes`
  from {
    right: -400px;
  }

  to {
    right: 0;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 100;
  height: 100%;
  background: white;
  animation: ${move} 0.5s ease-in;

  @media (min-width: 768px) {
    width: 325px;
  }
`

export const Image = styled.img`
  max-width: 100%;
`

export const NoImage = styled.div`
  height: 80px;
  background: lightgray;
  text-align: center;
  padding-top: 30px;
  font-style: italic;
  box-sizing: border-box;
  font-size: 14px;
`

export const Heading = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5em;
  color: ${colors.grey};
`

export const Medium = styled.div`
  font-size: 14px;
  line-height: 1.5em;
  color: ${colors.subGrey};
`

export const Text = styled.div`
  font-size: 12px;
  line-height: 1.5em;
  padding-right: 1.5em;
  color: ${colors.darkGrey};
`

export const TextZone = styled.div`
  padding: 30px 35px;
  position: relative;
`

export const CloseZone = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
`

export const CartZone = styled.a.attrs({
  target: '_blank',
})`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  text-decoration: none;
`

export const TopZone = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
