import styled from 'styled-components'

export const TrendingVideoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    width: 95%;
  }
`
export const TrendingVideoImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    margin-right: 10px;
  }
`

export const Title = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const ImgDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`

export const ProfileImg = styled.img`
  height: 35px;
  display: flex;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const ViewTimeCont = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  justify-content: flex-start;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const Name = styled.p`
  font-size: 10px;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
`
export const View = styled.p`
  font-size: 10px;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
`

export const DateFrom = styled.p`
  font-size: 10px;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
`

export const ViewTimeContDesk = styled.div`
  display: none;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    justify-content: flex-start;
  }
`

export const TitleDesk = styled.p`
  font-size: 10px;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`

export const ViewAndTimeCont = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const ViewDesk = styled.p`
  font-size: 10px;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`
