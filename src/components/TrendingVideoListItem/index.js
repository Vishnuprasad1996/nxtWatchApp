import {formatDistanceToNow} from 'date-fns'
import {BsCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingVideoItem,
  TrendingVideoImg,
  Title,
  ImgDetailsContainer,
  ProfileImg,
  VideoDetailsCont,
  ViewTimeCont,
  Name,
  DateFrom,
  View,
  ViewTimeContDesk,
  TitleDesk,
  ViewDesk,
  ViewAndTimeCont,
} from './styledComponent'

const TrendingVideoListItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {trendingVideoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        name,
        profileImageUrl,
        viewCount,
        publishedAt,
      } = trendingVideoDetails

      const date = new Date(publishedAt)
      const formattedDate = formatDistanceToNow(date)

      const colorIcon = {
        color: isDarkTheme ? '#475569' : '#231f20',
        height: '5px',
        width: '5px',
        marginRight: '10px',
        marginLeft: '10px',
      }

      return (
        <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
          <TrendingVideoItem>
            <TrendingVideoImg src={thumbnailUrl} alt="video thumbnail" />
            <ImgDetailsContainer>
              <ProfileImg src={profileImageUrl} alt={name} />
              <VideoDetailsCont>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <ViewTimeCont>
                  <Name isDarkTheme={isDarkTheme}>{name}</Name>
                  <BsCircleFill style={colorIcon} />
                  <View isDarkTheme={isDarkTheme}>{viewCount}</View>
                  <BsCircleFill style={colorIcon} />
                  <DateFrom isDarkTheme={isDarkTheme}>{formattedDate}</DateFrom>
                </ViewTimeCont>
                <ViewTimeContDesk>
                  <TitleDesk isDarkTheme={isDarkTheme}>{name}</TitleDesk>
                  <ViewAndTimeCont>
                    <ViewDesk isDarkTheme={isDarkTheme}>{viewCount}</ViewDesk>
                    <BsCircleFill style={colorIcon} />
                    <ViewDesk isDarkTheme={isDarkTheme}>
                      {formattedDate}
                    </ViewDesk>
                  </ViewAndTimeCont>
                </ViewTimeContDesk>
              </VideoDetailsCont>
            </ImgDetailsContainer>
          </TrendingVideoItem>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)
export default TrendingVideoListItem
