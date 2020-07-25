import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, ContentWrapper, CloseItem, LinkTest, BoldText } from './Styled'
import Close from '../../assets/close.svg'

const About = ({ onClose }) => (
  <Wrapper>
    <ContentWrapper>
      <b style={{color: '#545459', fontSize: "1.2em"}}>About.</b>
      <p style={{ marginTop: '1em', color: '#969696' }}>
        Hello, there.<br /><br />
        Paint.garden is a tool for publishing each stage in the life of an artwork. It tracks the process for you – which you can share or examine yourself –
          and it lets you annotate drafts and the moments of inspiration that feed your ideas. <br /><br />
        There are three levels on Paint.garden: your <BoldText>canvas</BoldText>, your <BoldText>areas</BoldText>, and <BoldText>annotations</BoldText>.<br /><br />
        Use the slider to move through the layers of an area and the art and materials you’ve stored there.<br /><br />
        Annotations are the remarks and details you add to the layers of your areas. They can be placed anywhere on your canvas.<br /><br />
        You can create multiple projects using paint.garden, each is a unique, malleable place to experiment and combine your work with technology, – kind of like an online workshop for creative guilds. To take part or to help our research and build say
        <a style = {{textDecoration: 'none'}} href = "mailto:paint.garden0@gmail.com"><LinkTest> get in touch here</LinkTest></a>.
      </p>
      <CloseItem onClick={onClose}>
        <img src={Close} alt="Close" />
      </CloseItem>
    </ContentWrapper>
  </Wrapper>
)

About.propTypes = {
  onClose: PropTypes.func,
}

export default About
