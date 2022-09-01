import styled from 'styled-components'

export const NotFoundBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const NotFoundBgContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
`

export const NotFoundImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`

export const NotFoundPara = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  width: 80%;
  color: #475569;
`
