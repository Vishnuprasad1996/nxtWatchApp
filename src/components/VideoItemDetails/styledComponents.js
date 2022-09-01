import styled from 'styled-components'

export const VideoItemDetailsBg = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding-bottom: 25px;
`

export const VideoitemDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const VideoItemDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const VideoItemTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ViewAndTimeCont = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  margin-right: 10px;
`

export const Years = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
`

export const LikeDislikeSaveCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const ButtonsCont = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
`

export const Like = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin: 5px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`

export const Dislike = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin: 5px;
  color: ${props => (props.dislike ? '#2563eb' : '#64748b')};
`

export const Save = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin: 5px;
  color: ${props => (props.isSavedButtonClicked ? '#2563eb' : '#64748b')};
`

export const ProfileCont = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ProfileImg = styled.img`
  height: 50px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

export const NameSubCont = styled.div`
  display: flex;
  flex-direction: column;
`

export const Sub = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin-bottom: 5px;
  margin-top: 5px;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
`

export const Name = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin-bottom: 5px;
  margin-top: 5px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const Desc = styled.p`
  display: flex;
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const DescDesk = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
    font-family: 'Roboto';
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  }
`

export const ReactPlayerCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: ${props =>
    props.isDarkTheme ? 'solid 1px #475569' : 'solid 1px #231f20 '};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
`
