import styled from 'styled-components'
export const Wrapper = styled.div`
height: 60px;
position:fixed;
bottom: 65px;
align-items: center;
padding: 0;
width: 100%;
background-color: rgba(255,255,255, 0.6);
justify-content: space-between;
box-shadow: 0 2px 7px lightgrey;

@media (min-width: 768px) {
  padding: 0 25px;
}
`