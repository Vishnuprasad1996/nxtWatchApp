import styled from 'styled-components'

export const SavedBg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const SavedHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  align-self: flex-start;
`

export const SavedIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f1f5f9')};
  height: 50px;
  width: 50px;
  border-radius: 40px;
  margin-left: 20px;
`

export const HSaved = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 20px;
`

export const SavedVideosListCont = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const NoSavedBg = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin-top: 30px;
  padding-top: 20px;
`

export const NoSavedBgImg = styled.img`
  height: 250px;
  margin-bottom: 30px;
`
export const HNoSavedVideo = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #000000')};
`

export const PNoSavedVideos = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#231f20')};
`
