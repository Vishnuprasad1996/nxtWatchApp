import styled from 'styled-components'

export const SavedVideoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`

export const SavedVideoItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    width: 95%;
  }
`

export const SavedVideoImg = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    margin-right: 10px;
  }
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`

export const SavedVideoProfileDetailsCont = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`

export const SavedVideoProfileImg = styled.img`
  height: 40px;
  display: flex;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Title = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 2px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const DetailsCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  width: 100%;
`

export const Name = styled.p`
  display: flex;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const NameDesk = styled.p`
  display: none;
  @media screen and (min-width: 576px) {
    display: flex;
    margin-bottom: 3px;
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  }
`

export const PDetails = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
