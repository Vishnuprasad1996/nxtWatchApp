import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 280px;
    margin-bottom: 30px;
    height: 250px;
    align-items: space-between;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const ThumbnailUrl = styled.img`
  width: 100%;
`

export const ProfileContentCont = styled.div`
  display: flex;
  width: 95%;
  justify-content: center;
  align-items: flex-start;
`

export const ProfileImageUrl = styled.img`
  height: 40px;
  margin-top: 15px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const Title = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin-bottom: 1px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const ViewCountCont = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  margin-top: 1px;
  @media screen and (min-width: 576px) {
    width: 95%;
  }
`

export const Name = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  font-weight: 400;
`

export const Views = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  font-weight: 400;
`

export const Time = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  font-weight: 400;
`
