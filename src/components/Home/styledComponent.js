import styled from 'styled-components'

export const HomeBg = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  padding-bottom: 25px;
`

export const HomeContentBg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PremiumBanner = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  @media screen and (min-width: 576px) {
    background-color: none;
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const PreminumBannerContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    width: 95%;
    justify-content: space-between;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
`

export const PreminumBannerLogoImg = styled.img`
  height: 30px;
  align-self: flex-start;
  margin-bottom: 15px;
`

export const PremiumBannerDesc = styled.p`
  color: #181818;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
  width: 200px;
  margin-bottom: 25px;
`

export const GetItNowButton = styled.button`
  background-color: transparent;
  border: #231f20 solid 1px;
  color: #231f20;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  height: 40px;
  align-self: flex-start;
  width: 120px;
  margin-bottom: 15px;
  cursor: pointer;
  outline: none;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  padding: 15px;
  @media screen and (min-width: 576px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const SearchContentCont = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 40px;
  border: solid 0.5px #cccccc;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff ' : '#181818')};
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
`

export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? ' #424242' : '#f4f4f4')};
  height: 100%;
  width: 80px;
  border: none;
  border-left: solid 0.5px #cccccc;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#475569')};
  cursor: pointer;
  outline: none;
`

export const AllApiStatusBg = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`

export const VideoListItemCont = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
  flex-grow: 1;
  overflow-y: auto;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 95%;
  }
`

export const NoProductBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`

export const NoProductImg = styled.img`
  height: 180px;
  margin-bottom: 15px;
`

export const NoProductHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  width: 90%;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#231f20')};
`

export const NoProductDesc = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  width: 90%;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#7e858e')};
`

export const NoProductRetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  align-self: center;
  border: none;
  height: 40px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`
