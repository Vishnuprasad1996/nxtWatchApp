import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'

import {
  TrendingBg,
  TrendingContent,
  TrendingHeader,
  HTrending,
  TrendingIconCont,
  TrendingVideosListCont,
} from './styledComponents'

import Header from '../Header'
import SideNavBr from '../SideNavBr'
import ThemeContext from '../../context/ThemeContext'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import TrendingVideoListItem from '../TrendingVideoListItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideoList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideoList()
  }

  getTrendingVideoList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        name: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
      }))
      this.setState({
        trendingVideoList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = isDarkTheme => {
    const {trendingVideoList} = this.state

    return (
      <TrendingContent>
        <TrendingHeader isDarkTheme={isDarkTheme}>
          <TrendingIconCont isDarkTheme={isDarkTheme}>
            <AiFillFire
              style={{
                height: '30px',
                width: '30px',
                color: '#ff0000',
              }}
            />
          </TrendingIconCont>
          <HTrending isDarkTheme={isDarkTheme}>Trending</HTrending>
        </TrendingHeader>
        <TrendingVideosListCont>
          {trendingVideoList.map(eachData => (
            <TrendingVideoListItem
              isDarkTheme={isDarkTheme}
              key={eachData.id}
              trendingVideoDetails={eachData}
            />
          ))}
        </TrendingVideosListCont>
      </TrendingContent>
    )
  }

  renderLoadingView = () => <LoadingView />

  onClickTryAgain = () => {
    this.getTrendingVideoList()
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
              <TrendingBg data-testid="trending" isDarkTheme={isDarkTheme}>
                <SideNavBr />
                {this.renderAllApiStatus(isDarkTheme)}
              </TrendingBg>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
