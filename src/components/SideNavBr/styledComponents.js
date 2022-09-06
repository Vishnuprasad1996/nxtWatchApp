import styled from 'styled-components'

export const SideNavBarbg = styled.div`
  display: none;
  height: 90vh;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
    align-items: center;
    justify-content: space-between;
  }
`

export const SideBarIconsCont = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-left: 0px;
`

export const SideBarIconCont = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`

export const SidebarButtons = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#231f20')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`

export const ContactUsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 80px;
`

export const PContactUs = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#231f20')};
`

export const FLTIconContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: 35px;
  margin-right: 20px;
`

export const PEnjoy = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#231f20')};
`
