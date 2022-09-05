import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome, AiFillFire} from 'react-icons/ai'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

import {
  SideNavBarbg,
  SideBarIconsCont,
  SideBarIconCont,
  SidebarButtons,
  ContactUsCont,
  PContactUs,
  FLTIconContainer,
  Logo,
  PEnjoy,
} from './styledComponents'

const SideNavBr = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTabId, changeTabId} = value

      const onClickHomeButton = () => {
        changeTabId('HOME')
      }

      const onClickGamingButton = () => {
        changeTabId('GAME')
      }

      const onClickSavedButton = () => {
        changeTabId('SAVED')
      }

      const onClickTrendingButton = () => {
        changeTabId('TRENDING')
      }

      console.log(activeTabId)

      const homeActiveIconColor = activeTabId === 'HOME' ? 'active-red' : ''
      const trendingActiveIconColor =
        activeTabId === 'TRENDING' ? 'active-red' : ''
      const savedActiveIconColor = activeTabId === 'SAVED' ? 'active-red' : ''
      const gameActiveIconColor = activeTabId === 'GAME' ? 'active-red' : ''

      return (
        <SideNavBarbg isDarkTheme={isDarkTheme}>
          <SideBarIconsCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/">
                <AiFillHome
                  className={`side-nav-icons ${homeActiveIconColor}`}
                />
                <SidebarButtons
                  onClick={onClickHomeButton}
                  type="button"
                  isDarkTheme={isDarkTheme}
                >
                  Home
                </SidebarButtons>
              </Link>
            </SideBarIconCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/trending">
                <AiFillFire
                  className={`side-nav-icons ${trendingActiveIconColor}`}
                />
                <SidebarButtons
                  onClick={onClickTrendingButton}
                  type="button"
                  isDarkTheme={isDarkTheme}
                >
                  Trending
                </SidebarButtons>
              </Link>
            </SideBarIconCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/gaming">
                <SiYoutubegaming
                  className={`side-nav-icons ${gameActiveIconColor}`}
                />
                <SidebarButtons
                  onClick={onClickGamingButton}
                  type="button"
                  isDarkTheme={isDarkTheme}
                >
                  Gaming
                </SidebarButtons>
              </Link>
            </SideBarIconCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/saved-videos">
                <MdPlaylistAdd
                  className={`side-nav-icons ${savedActiveIconColor}`}
                />
                <SidebarButtons
                  onClick={onClickSavedButton}
                  type="button"
                  isDarkTheme={isDarkTheme}
                >
                  Saved videos
                </SidebarButtons>
              </Link>
            </SideBarIconCont>
          </SideBarIconsCont>
          <ContactUsCont>
            <PContactUs isDarkTheme={isDarkTheme}>CONTACT US</PContactUs>
            <FLTIconContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FLTIconContainer>
            <PEnjoy isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </PEnjoy>
          </ContactUsCont>
        </SideNavBarbg>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideNavBr
