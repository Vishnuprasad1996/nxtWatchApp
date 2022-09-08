import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import {BsCircleFill} from 'react-icons/bs'

import {
  VideoItemDetailsBg,
  VideoitemDetailsContent,
  VideoItemDetailsCont,
  VideoItemTitle,
  ViewAndTimeCont,
  Views,
  Years,
  LikeDislikeSaveCont,
  ButtonsCont,
  ProfileCont,
  ProfileImg,
  NameSubCont,
  Sub,
  Name,
  Desc,
  ReactPlayerCont,
  Like,
  Dislike,
  Save,
  Container,
  DescDesk,
  ContentCont,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavBr from '../SideNavBr'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetailList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoItemDetailList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          onClickSaveButton,
          like,
          dislike,
          isSavedButtonClicked,
          onChangeDislikeButton,
          onChangeLikeButtonTheme,
          onChangeSavedButton,
        } = value
        const {videoItemDetailList} = this.state

        const date = new Date(videoItemDetailList.publishedAt)
        const formattedDate = formatDistanceToNow(date)

        const onClickLikeButton = () => {
          onChangeLikeButtonTheme()
        }

        const onClickDislikeButton = () => {
          onChangeDislikeButton()
        }

        const onChangeToSavetoSaved = () => {
          onChangeSavedButton()
        }

        const colorIcon = {
          color: isDarkTheme ? '#475569' : '#231f20',
          height: '5px',
          width: '5px',
          marginRight: '10px',
          marginLeft: '10px',
        }

        const onAddToSaved = () => {
          onClickSaveButton({
            ...videoItemDetailList,
            like,
            dislike,
            isSavedButtonClicked,
          })
          onChangeToSavetoSaved()
        }

        const likeButtonColor = {
          color: videoItemDetailList.like ? '#2563eb' : '#64748b',
          height: '25px',
          width: '25px',
        }

        const dislikeButtonColor = {
          color: videoItemDetailList.dislike ? '#2563eb' : '#64748b',
          height: '25px',
          width: '25px',
        }

        const saveButtonColor = {
          color: isSavedButtonClicked ? '#2563eb' : '#64748b',
          height: '25px',
          width: '25px',
        }

        const savedButtonText = isSavedButtonClicked ? 'Saved' : 'Save'

        return (
          <VideoitemDetailsContent>
            <ReactPlayerCont>
              <ReactPlayer
                width="100%"
                url={videoItemDetailList.videoUrl}
                controls
              />
            </ReactPlayerCont>
            <VideoItemDetailsCont>
              <VideoItemTitle isDarkTheme={isDarkTheme}>
                {videoItemDetailList.title}
              </VideoItemTitle>
              <Container isDarkTheme={isDarkTheme}>
                <ViewAndTimeCont>
                  <Views isDarkTheme={isDarkTheme}>
                    {videoItemDetailList.viewCount} views
                  </Views>
                  <BsCircleFill style={colorIcon} />
                  <Years isDarkTheme={isDarkTheme}>{formattedDate}</Years>
                </ViewAndTimeCont>
                <LikeDislikeSaveCont>
                  <ButtonsCont onClick={onClickLikeButton} type="button">
                    <AiOutlineLike style={likeButtonColor} />
                    <Like like={like}>Like</Like>
                  </ButtonsCont>
                  <ButtonsCont onClick={onClickDislikeButton} type="button">
                    <AiOutlineDislike style={dislikeButtonColor} />
                    <Dislike dislike={dislike}>Dislike</Dislike>
                  </ButtonsCont>
                  <ButtonsCont type="button" onClick={onAddToSaved}>
                    <MdPlaylistAdd style={saveButtonColor} />
                    <Save isSavedButtonClicked={isSavedButtonClicked}>
                      {savedButtonText}
                    </Save>
                  </ButtonsCont>
                </LikeDislikeSaveCont>
              </Container>
              <ProfileCont>
                <ProfileImg
                  src={videoItemDetailList.profileImageUrl}
                  alt="channel logo"
                />
                <ContentCont>
                  <NameSubCont>
                    <Name isDarkTheme={isDarkTheme}>
                      {videoItemDetailList.name}
                    </Name>
                    <Sub isDarkTheme={isDarkTheme}>
                      {videoItemDetailList.subscriberCount} subscribers
                    </Sub>
                  </NameSubCont>
                  <DescDesk isDarkTheme={isDarkTheme}>
                    {videoItemDetailList.description}
                  </DescDesk>
                </ContentCont>
              </ProfileCont>
              <Desc isDarkTheme={isDarkTheme}>
                {videoItemDetailList.description}
              </Desc>
            </VideoItemDetailsCont>
          </VideoitemDetailsContent>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => <LoadingView />

  onClickTryAgain = () => {
    this.getVideoItemDetails()
  }

  renderFailureView = () => (
    <FailureView onClickTryAgain={this.onClickTryAgain} />
  )

  renderAllApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
              <VideoItemDetailsBg
                isDarkTheme={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <SideNavBr />
                {this.renderAllApiStatus()}
              </VideoItemDetailsBg>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
