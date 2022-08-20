import {
  NotFoundBg,
  NotFoundBgContent,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavBr from '../SideNavBr'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundBg isDarkTheme={isDarkTheme}>
            <SideNavBr />
            <NotFoundBgContent>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara isDarkTheme={isDarkTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundBgContent>
          </NotFoundBg>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
