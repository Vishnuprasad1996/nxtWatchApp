import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import {
  HomeBg,
  HomeContentBg,
  PremiumBanner,
  PreminumBannerContent,
  CloseButton,
  PreminumBannerLogoImg,
  PremiumBannerDesc,
  GetItNowButton,
  SearchContainer,
  SearchContentCont,
  SearchBar,
  SearchButton,
  AllApiStatusBg,
  VideoListItemCont,
  NoProductBg,
  NoProductImg,
  NoProductHeading,
  NoProductDesc,
  NoProductRetryButton,
} from './styledComponent'

import Header from '../Header'
import LoadingView from '../LoadingView'
import ThemeContext from '../../context/ThemeContext'
import FailureView from '../FailureView'
import VideosListItem from '../VideosListItem'
import SideNavBr from '../SideNavBr'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videoList: [],
    searchText: '',
    apiStatus: apiStatusConstants.initial,
    isPremiumBanner: true,
  }

  componentDidMount() {
    this.getAllVideoList()
  }

  getAllVideoList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`
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
        channel: {
          name: eachData.channel.name,
          profileImageUrl: eachData.channel.profile_image_url,
        },
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
      }))
      this.setState({
        videoList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCloseButton = () => {
    this.setState({isPremiumBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  renderSuccessVideosView = () => {
    const {videoList} = this.state
    return (
      <VideoListItemCont>
        {videoList.map(eachData => (
          <VideosListItem key={eachData.id} videoListDetails={eachData} />
        ))}
      </VideoListItemCont>
    )
  }

  onClickNoProdRetryButton = () => {
    this.setState({searchText: ''}, this.getAllVideoList)
  }

  renderNoVideosView = isDarkTheme => (
    <NoProductBg>
      <NoProductImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoProductHeading isDarkTheme={isDarkTheme}>
        No Search results found
      </NoProductHeading>
      <NoProductDesc isDarkTheme={isDarkTheme}>
        Try different key words or remove search filter
      </NoProductDesc>
      <NoProductRetryButton onClick={this.onClickNoProdRetryButton}>
        Retry
      </NoProductRetryButton>
    </NoProductBg>
  )

  renderSuccessView = isDarkTheme => {
    const {videoList} = this.state

    if (videoList.length === 0) {
      return this.renderNoVideosView(isDarkTheme)
    }
    return this.renderSuccessVideosView()
  }

  renderLoadingView = () => <LoadingView />

  onClickTryAgain = () => {
    this.getAllVideoList()
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

  onClickSearchButton = () => {
    this.getAllVideoList()
  }

  render() {
    const {searchText, isPremiumBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeBg isDarkTheme={isDarkTheme} data-testid="home">
                <SideNavBr />
                <HomeContentBg>
                  {isPremiumBanner && (
                    <PremiumBanner data-testid="banner">
                      <PreminumBannerContent>
                        <CloseButton
                          onClick={this.onClickCloseButton}
                          type="button"
                          data-testid="close"
                        >
                          <AiOutlineClose className="close-icon" />
                        </CloseButton>
                        <PreminumBannerLogoImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <PremiumBannerDesc>
                          Buy Nxt Watch Premium prepaid plans with UPI.
                        </PremiumBannerDesc>
                        <GetItNowButton type="button">
                          GET IT NOW
                        </GetItNowButton>
                      </PreminumBannerContent>
                    </PremiumBanner>
                  )}
                  <SearchContainer isDarkTheme={isDarkTheme}>
                    <SearchContentCont>
                      <SearchBar
                        onChange={this.onChangeSearchInput}
                        value={searchText}
                        placeholder="Search"
                        isDarkTheme={isDarkTheme}
                        type="search"
                      />
                      <SearchButton
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                        type="button"
                        isDarkTheme={isDarkTheme}
                      >
                        <AiOutlineSearch className="search-icon" />
                      </SearchButton>
                    </SearchContentCont>
                  </SearchContainer>
                  <AllApiStatusBg>
                    {this.renderAllApiStatus(isDarkTheme)}
                  </AllApiStatusBg>
                </HomeContentBg>
              </HomeBg>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
