import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome, AiFillFire} from 'react-icons/ai'

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
      const {isDarkTheme} = value

      return (
        <SideNavBarbg isDarkTheme={isDarkTheme}>
          <SideBarIconsCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/">
                <AiFillHome className="side-nav-icons" />
                <SidebarButtons type="button" isDarkTheme={isDarkTheme}>
                  Home
                </SidebarButtons>
              </Link>
            </SideBarIconCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/trending">
                <AiFillFire className="side-nav-icons" />
                <SidebarButtons type="button" isDarkTheme={isDarkTheme}>
                  Trending
                </SidebarButtons>
              </Link>
            </SideBarIconCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/gaming">
                <SiYoutubegaming className="side-nav-icons" />
                <SidebarButtons type="button" isDarkTheme={isDarkTheme}>
                  Gaming
                </SidebarButtons>
              </Link>
            </SideBarIconCont>
            <SideBarIconCont>
              <Link className="nav-link" to="/saved-videos">
                <MdPlaylistAdd className="side-nav-icons" />
                <SidebarButtons type="button" isDarkTheme={isDarkTheme}>
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
