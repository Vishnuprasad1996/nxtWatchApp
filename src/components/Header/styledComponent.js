import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
`

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    width: 95%;
  }
`

export const NxtLogo = styled.img`
  height: 25px;
  cursor: pointer;
  outline: none;
`

export const NavIconsCont = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
  width: 120px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  list-style-type: none;
`

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  width: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  cursor: pointer;
  outline: none;
`

export const PopupContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const CancelLogoutButtonCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin: 20px;
`

export const LogoutConfirmButton = styled.button`
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 10px;
  width: 80px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
`

export const CancelPopup = styled.button`
  border: #616e7c solid 1px;
  border-radius: 5px;
  color: #cbd5e1;
  background-color: transparent;
  padding: 10px;
  width: 80px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  outline: none;
`

export const PopupContentText = styled.p`
  color: #4f46e5;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
`

export const NavItemsContDesk = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0px;
    width: 250px;
  }
`

export const NavProfilePic = styled.img`
  height: 30px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: ${props =>
    props.isDarkTheme ? 'solid 1px #ebebeb' : ' solid 1px #3b82f6'};
  padding: 10px;
  width: 100px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#3b82f6')};
  cursor: pointer;
  outline: none;
`
