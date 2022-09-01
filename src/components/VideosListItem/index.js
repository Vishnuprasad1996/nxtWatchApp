import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItem,
  ThumbnailUrl,
  ProfileContentCont,
  ProfileImageUrl,
  ContentContainer,
  Title,
  ViewCountCont,
  Name,
  Views,
  Time,
} from './styledComponents'

import './index.css'

const VideosListItem = props => {
  const {videoListDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoListDetails

  const date = new Date(publishedAt)
  const formattedDate = formatDistanceToNow(date)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link className="nav-links" to={`/videos/${id}`}>
            <VideoItem>
              <ThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
              <ProfileContentCont>
                <ProfileImageUrl
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <ContentContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ViewCountCont>
                    <Name isDarkTheme={isDarkTheme}>{channel.name} </Name>
                    <Views isDarkTheme={isDarkTheme}>{viewCount} views</Views>
                    <Time isDarkTheme={isDarkTheme}>{formattedDate}</Time>
                  </ViewCountCont>
                </ContentContainer>
              </ProfileContentCont>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideosListItem
