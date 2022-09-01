import {formatDistanceToNow} from 'date-fns'
import {BsCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideoItem,
  SavedVideoItemContent,
  SavedVideoImg,
  SavedVideoProfileDetailsCont,
  SavedVideoProfileImg,
  TitleContainer,
  Title,
  DetailsCont,
  PDetails,
  NameDesk,
  Name,
  Container,
} from './styledComponents'

const SavedVideoListItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {savedVideoDetails} = props
      const {
        id,
        title,
        name,
        thumbnailUrl,
        profileImageUrl,
        publishedAt,
        viewCount,
      } = savedVideoDetails

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
          <SavedVideoItem>
            <SavedVideoItemContent>
              <SavedVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <SavedVideoProfileDetailsCont>
                <SavedVideoProfileImg src={profileImageUrl} alt={name} />
                <TitleContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <NameDesk isDarkTheme={isDarkTheme}>{name}</NameDesk>
                  <DetailsCont>
                    <Container>
                      <Name isDarkTheme={isDarkTheme}>{name}</Name>
                      <BsCircleFill style={colorIcon} />
                    </Container>
                    <PDetails isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </PDetails>
                    <BsCircleFill style={colorIcon} />
                    <PDetails isDarkTheme={isDarkTheme}>
                      {formattedDate}
                    </PDetails>
                  </DetailsCont>
                </TitleContainer>
              </SavedVideoProfileDetailsCont>
            </SavedVideoItemContent>
          </SavedVideoItem>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideoListItem
