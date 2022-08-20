import styled from 'styled-components'

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 15px;
  margin-bottom: 25px;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`

export const GamingItemImg = styled.img`
  height: 200px;
  @media screen and (min-width: 576px) {
    height: 250px;
  }

  @media screen and (min-width: 768px) {
    height: 300px;
  }
`

export const GamingTitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  margin-top: 8px;
  margin-bottom: 2px;
`

export const GamingViewCont = styled.div`
  display: flex;
  flex-direction: column;
`

export const GamingViewCount = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  margin-top: 2px;
  margin-bottom: 2px;
`

export const WorldWide = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#475569' : '#231f20')};
  margin-top: 2px;
  margin-bottom: 2px;
`
