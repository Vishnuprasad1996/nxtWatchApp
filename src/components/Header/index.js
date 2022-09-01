import {Component} from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {HiMoon} from 'react-icons/hi'
import {BiSun} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import 'reactjs-popup/dist/index.css'

import {
  Navbar,
  NavbarContent,
  NxtLogo,
  NavIconsCont,
  PopupContainer,
  CustomButton,
  LogoutConfirmButton,
  CancelPopup,
  PopupContentContainer,
  CancelLogoutButtonCont,
  PopupContentText,
  NavItem,
  NavItemsContDesk,
  NavProfilePic,
  LogoutButton,
  MobileSideNavCont,
  MobileSideNavContent,
  MobileSideNavItem,
  MobileSidebarButtons,
} from './styledComponent'

import './index.css'

class Header extends Component {
  state = {isHamMenuClicked: false}

  onClickHamMenu = () => {
    this.setState(prevState => ({
      isHamMenuClicked: !prevState.isHamMenuClicked,
    }))
  }

  render() {
    const {history} = this.props

    const onClickPopupConfirmButton = () => {
      Cookies.remove('jwt_token')
      history.replace('/login')
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, onClickThemeButton} = value

          const {isHamMenuClicked} = this.state

          const renderMobileSideNavbarPart = () => (
            <MobileSideNavCont>
              <MobileSideNavContent>
                <Link className="nav-link" to="/">
                  <MobileSideNavItem>
                    <AiFillHome className="side-nav-icons" />
                    <MobileSidebarButtons isDarkTheme={isDarkTheme}>
                      Home
                    </MobileSidebarButtons>
                  </MobileSideNavItem>
                </Link>
                <Link className="nav-link" to="/trending">
                  <MobileSideNavItem>
                    <AiFillFire className="side-nav-icons" />
                    <MobileSidebarButtons isDarkTheme={isDarkTheme}>
                      Trending
                    </MobileSidebarButtons>
                  </MobileSideNavItem>
                </Link>
                <Link className="nav-link" to="/gaming">
                  <MobileSideNavItem>
                    <SiYoutubegaming className="side-nav-icons" />
                    <MobileSidebarButtons isDarkTheme={isDarkTheme}>
                      Gaming
                    </MobileSidebarButtons>
                  </MobileSideNavItem>
                </Link>
                <Link className="nav-link" to="/saved-videos">
                  <MobileSideNavItem>
                    <MdPlaylistAdd className="side-nav-icons" />
                    <MobileSidebarButtons isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </MobileSidebarButtons>
                  </MobileSideNavItem>
                </Link>
              </MobileSideNavContent>
            </MobileSideNavCont>
          )

          const onChangeBrowserTheme = () => {
            onClickThemeButton()
          }

          const renderThemeBasedIcons = () => {
            if (isDarkTheme === true) {
              return <BiSun className="icons" />
            }
            return <HiMoon className="icons" />
          }

          const nxtLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <Navbar data-testid="banner" isDarkTheme={isDarkTheme}>
              <NavbarContent>
                <Link to="/">
                  <NxtLogo src={nxtLogo} alt="website logo" />
                </Link>
                <NavIconsCont>
                  <NavItem>
                    <CustomButton
                      isDarkTheme={isDarkTheme}
                      data-testid="theme"
                      onClick={onChangeBrowserTheme}
                      type="button"
                    >
                      {renderThemeBasedIcons()}
                    </CustomButton>
                  </NavItem>
                  <NavItem>
                    <CustomButton
                      onClick={this.onClickHamMenu}
                      isDarkTheme={isDarkTheme}
                      type="button"
                    >
                      <GiHamburgerMenu className="icons" />
                    </CustomButton>
                  </NavItem>
                  <PopupContainer isDarkTheme={isDarkTheme}>
                    <Popup
                      modal
                      trigger={
                        <NavItem>
                          {' '}
                          <CustomButton isDarkTheme={isDarkTheme} type="button">
                            <FiLogOut className="icons" />
                          </CustomButton>
                        </NavItem>
                      }
                    >
                      {close => (
                        <PopupContentContainer>
                          <PopupContentText>
                            Are you sure, you want to logout
                          </PopupContentText>
                          <CancelLogoutButtonCont>
                            <CancelPopup type="button" onClick={() => close()}>
                              Cancel
                            </CancelPopup>
                            <LogoutConfirmButton
                              onClick={onClickPopupConfirmButton}
                              type="button"
                            >
                              Confirm
                            </LogoutConfirmButton>
                          </CancelLogoutButtonCont>
                        </PopupContentContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                </NavIconsCont>
                <NavItemsContDesk>
                  <NavItem>
                    <CustomButton
                      isDarkTheme={isDarkTheme}
                      data-testid="theme"
                      onClick={onChangeBrowserTheme}
                      type="button"
                    >
                      {renderThemeBasedIcons()}
                    </CustomButton>{' '}
                  </NavItem>
                  <NavItem>
                    <CustomButton type="button">
                      <NavProfilePic
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </CustomButton>
                  </NavItem>
                  <NavItem>
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <Popup
                        modal
                        trigger={
                          <LogoutButton
                            type="button"
                            onClick={onClickPopupConfirmButton}
                            isDarkTheme={isDarkTheme}
                          >
                            Logout
                          </LogoutButton>
                        }
                      >
                        {close => (
                          <PopupContentContainer>
                            <PopupContentText>
                              Are you sure, you want to logout
                            </PopupContentText>
                            <CancelLogoutButtonCont>
                              <CancelPopup
                                type="button"
                                onClick={() => close()}
                              >
                                Cancel
                              </CancelPopup>
                              <LogoutConfirmButton
                                onClick={onClickPopupConfirmButton}
                                type="button"
                              >
                                Confirm
                              </LogoutConfirmButton>
                            </CancelLogoutButtonCont>
                          </PopupContentContainer>
                        )}
                      </Popup>
                    </PopupContainer>
                  </NavItem>
                </NavItemsContDesk>
              </NavbarContent>
              {isHamMenuClicked && renderMobileSideNavbarPart()}
            </Navbar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
