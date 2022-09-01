import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import {
  GamingBg,
  GamingContent,
  GamingHeader,
  GamingIconCont,
  HGaming,
  GamingVideoListCont,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavBr from '../SideNavBr'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import GamingVideoListItem from '../GamingVideoListItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideoList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideoList()
  }

  getGamingVideoList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        viewCount: eachData.view_count,
      }))
      this.setState({
        gamingVideoList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = isDarkTheme => {
    const {gamingVideoList} = this.state

    return (
      <GamingContent>
        <GamingHeader isDarkTheme={isDarkTheme}>
          <GamingIconCont isDarkTheme={isDarkTheme}>
            <SiYoutubegaming
              style={{
                height: '30px',
                width: '30px',
                color: '#ff0000',
              }}
            />
          </GamingIconCont>
          <HGaming isDarkTheme={isDarkTheme}>Gaming</HGaming>
        </GamingHeader>
        <GamingVideoListCont>
          {gamingVideoList.map(eachData => (
            <GamingVideoListItem
              key={eachData.id}
              gamingVideoListDetails={eachData}
            />
          ))}
        </GamingVideoListCont>
      </GamingContent>
    )
  }

  renderLoadingView = () => <LoadingView />

  onClickTryAgain = () => {
    this.getGamingVideoList()
  }

  renderFailureView = () => (
    <FailureView onClickTryAgain={this.onClickTryAgain} />
  )

  renderAllApiStatus = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <GamingBg data-testid="gaming" isDarkTheme={isDarkTheme}>
                <SideNavBr />
                {this.renderAllApiStatus(isDarkTheme)}
              </GamingBg>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
