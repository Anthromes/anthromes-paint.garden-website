import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ContentWrapper = styled.div`
  max-width: 100%;
  background: white;
  box-shadow: 2px 3px 22px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  padding: 1.7rem;
  position: relative;
  margin: 2em;

  @media (min-width: 960px) {
    max-width: 600px;
  }
`

export const CloseItem = styled.div`
  position: absolute;
  right: 1.7rem;
  top: 1.7rem;
  cursor: pointer;
`

export const LinkTest = styled.span `
  color: #01abdd;
  text-decoration: none;
`

export const BoldText = styled.span `
  color: #000;
  font-weight:500;
`
