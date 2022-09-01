import {MdPlaylistAdd} from 'react-icons/md'

import {
  SavedBg,
  SavedContent,
  SavedHeader,
  SavedIconCont,
  HSaved,
  SavedVideosListCont,
  NoSavedBg,
  NoSavedBgImg,
  HNoSavedVideo,
  PNoSavedVideos,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavBr from '../SideNavBr'
import SavedVideoListItem from '../SavedVideoListItem'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideoList} = value

      const renderNoSavedVideosView = () => (
        <SavedContent>
          <NoSavedBg>
            <NoSavedBgImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <HNoSavedVideo isDarkTheme={isDarkTheme}>
              No Saved Videos Found
            </HNoSavedVideo>
            <PNoSavedVideos isDarkTheme={isDarkTheme}>
              Save your videos by clicking a button
            </PNoSavedVideos>
          </NoSavedBg>
        </SavedContent>
      )

      const renderSavedVideosView = () => (
        <SavedContent>
          <SavedHeader isDarkTheme={isDarkTheme}>
            <SavedIconCont isDarkTheme={isDarkTheme}>
              <MdPlaylistAdd
                style={{
                  height: '30px',
                  width: '30px',
                  color: '#ff0000',
                }}
              />
            </SavedIconCont>
            <HSaved isDarkTheme={isDarkTheme}>Saved Videos</HSaved>
          </SavedHeader>
          <SavedVideosListCont>
            {savedVideoList.map(eachList => (
              <SavedVideoListItem
                key={eachList.id}
                savedVideoDetails={eachList}
              />
            ))}
          </SavedVideosListCont>
        </SavedContent>
      )

      return (
        <>
          <Header />
          <SavedBg data-testid="savedVideos" isDarkTheme={isDarkTheme}>
            <SideNavBr />
            {savedVideoList.length === 0
              ? renderNoSavedVideosView()
              : renderSavedVideosView()}
          </SavedBg>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
