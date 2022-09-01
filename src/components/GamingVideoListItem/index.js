import {Link} from 'react-router-dom'

import {
  GamingListItem,
  GamingItemImg,
  GamingTitle,
  GamingViewCont,
  GamingViewCount,
  WorldWide,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

const GamingVideoListItem = props => {
  const {gamingVideoListDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingVideoListDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingListItem>
            <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
              <GamingItemImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingTitle isDarkTheme={isDarkTheme}>{title}</GamingTitle>
              <GamingViewCont>
                <GamingViewCount isDarkTheme={isDarkTheme}>
                  {viewCount} Watching
                </GamingViewCount>
                <WorldWide isDarkTheme={isDarkTheme}>Worldwide</WorldWide>
              </GamingViewCont>
            </Link>
          </GamingListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoListItem
