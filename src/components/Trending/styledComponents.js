import styled from 'styled-components'

export const TrendingBg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  height: 100vh;
`

export const TrendingHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  justify-content: flex-start;
  width: 100%;
  align-self: flex-start;
`

export const TrendingIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f1f5f9')};
  height: 50px;
  width: 50px;
  border-radius: 40px;
  margin-left: 20px;
`

export const HTrending = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 20px;
`

export const TrendingVideosListCont = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`
