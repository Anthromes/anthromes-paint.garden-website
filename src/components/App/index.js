import React, { Fragment, createRef } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Constants from '../../constants'
import api from '../../utils/api'
import { calcInitialScroll, calcScrollToSection } from '../../utils/dbHelper'
import { MainArea } from '../Common/Styled'
import Toolbar from '../Toolbar'
import Canvas from '../Canvas'
import About from '../About'
import Sidebar from '../Sidebar'
import OnboardingOne from '../Onboarding/onboarding1'
import OnboardingTwo from '../Onboarding/onboarding2'
import OnboardingThree from '../Onboarding/onboarding3'
import OnboardingFour from '../Onboarding/onboarding4'
import OnboardingFive from '../Onboarding/onboarding5'
import Overlay from '../Onboarding/overlay'
const { API_URL } = Constants

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      db: {},
      showAbout: false,
      selectedSection: {},
      activePin: null,
      activeImageIndexes: {},
      showOnboarding: false,
      showOnboardingTwo: false,
      showOnboardingThree: false,
      showOnboardingFour: false,
      showOnboardingFive: false,
      loaded: false,
    }
    this.areaRef = createRef()
  }

  componentDidMount() {
    api.get(API_URL).then(resp => {
      this.setState({ db: resp.data })
      this.setState({ selectedSection: resp.data.sections[0] })
      this.setState({ loaded: true }, () => {
        if (this.areaRef.current)
          this.areaRef.current.scroll(calcInitialScroll(resp.data))
      })
    })
  }

  onSelectSection = (selectedSection, isScrollTo, zoom) => {
    if (!selectedSection) return this.setState({ selectedSection: {} })
    const { activeImageIndexes } = this.state
    // check for not set up index
    const activeImageIndex =
    activeImageIndexes[selectedSection.id] === undefined
    ? selectedSection.imageIds.length - 1
    : activeImageIndexes[selectedSection.id]
    this.setState({
      selectedSection,
      activeImageIndexes: { ...activeImageIndexes, [selectedSection.id]: activeImageIndex },
    })
    if (isScrollTo && this.areaRef.current) {
      this.areaRef.current.scroll(calcScrollToSection(selectedSection, zoom))
    }
  }

  onChangeActiveImageIndex = ev => {
    const { selectedSection, activeImageIndexes } = this.state
    this.setState({
      activeImageIndexes: { ...activeImageIndexes, [selectedSection.id]: +ev.target.value },
    })
  }

  render() {
    const {
      db,
      activeImageIndexes,
      showOnboarding,
      showOnboardingTwo,
      showOnboardingThree,
      showOnboardingFour,
      showOnboardingFive,
      showAbout,
      selectedSection,
      activePin,
    } = this.state

    const width = document.documentElement.clientWidth

    return (
      <>
        {this.state.loaded && (
          <Fragment>
            {showOnboardingFive && (
              <OnboardingFive
                onClose={() => this.setState({ showOnboardingFive: false })}
                onNext={() => this.setState({ showOnboardingTwo: true })}
              ></OnboardingFive>
            )}
            {showOnboardingTwo && (
              <OnboardingTwo
                onClose={() => this.setState({ showOnboardingTwo: false })}
                onNext={() => this.setState({ showOnboardingThree: true })}
              />
            )}
            {showOnboardingThree && width > 740 ? (
              <>
                <OnboardingThree
                  onClose={() => this.setState({ showOnboardingThree: false })}
                  onNext={() => this.setState({ showOnboardingFour: true })}
                />
                <Sidebar
                  pin={{
                    imgUrl: 'https://anth-api.herokuapp.com/uploads/1564312593584.jpg',
                    headline: 'Reef',
                    medium: 'Sardinia',
                    description: 'Spring 2017',
                  }}
                  imgSrc={'https://anth-api.herokuapp.com/uploads/1564312593584.jpg'}
                  zIndex={'99999'}
                />
              </>
            ) : showOnboardingThree ? (
              <OnboardingThree
                onClose={() => this.setState({ showOnboardingThree: false })}
                onNext={() => this.setState({ showOnboardingFour: true })}
              />
            ) : null}
            {showOnboardingFour && (
              <OnboardingFour
                onClose={() => this.setState({ showOnboardingFour: false })}
                onNext={() => this.setState({ showOnboardingFive: true })}
              />
            )}
            {/* {showOnboardingFive && (
              <OnboardingFive
                onClose={() => this.setState({ showOnboardingFive: false })}
                onNext={() => this.setState({ showOnboardingFive: false })}
              />
            )} */}
            {showOnboarding || showOnboardingThree || showOnboardingFive || showOnboardingTwo ? (
              <Overlay />
            ) : showOnboardingFour ? (
              <Overlay bottom />
            ) : null}
            <Toolbar
              activeSection={selectedSection}
              activeImageIndex={activeImageIndexes[selectedSection.id]}
              onShowOnboarding={() => this.setState({ showOnboardingFive: true })}
              onShowAbout={() => this.setState({ showAbout: true })}
              onChangeTimeline={this.onChangeActiveImageIndex}
              showOnboardingTwo={this.state.showOnboardingTwo}
            />
            <MainArea ref={this.areaRef}>
              <Canvas
                db={db}
                onSectionSelect={this.onSelectSection}
                selectedSectionId={selectedSection.id}
                activeImageIndexes={activeImageIndexes}
                onPinSelect={activePin => this.setState({ activePin })}
                showOnboardingFive={this.state.showOnboardingFive}
                showOnboardingTwo={this.state.showOnboardingTwo}
                activeSection={selectedSection}
                activeImageIndex={activeImageIndexes[selectedSection.id]}
                onChangeTimeline={this.onChangeActiveImageIndex}
              />
              {showAbout && <About onClose={() => this.setState({ showAbout: false })} />}

              {activePin && <Sidebar pin={activePin} onClose={() => this.setState({ activePin: null })} />}
            </MainArea>
          </Fragment>
        )}
      </>
    )
  }
}

export default App
