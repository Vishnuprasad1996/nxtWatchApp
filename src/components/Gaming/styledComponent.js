import styled from 'styled-components'

export const GamingBg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9 ')};
`

export const GamingContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
`
export const GamingHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  align-self: center;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f1f5f9')};
  height: 50px;
  width: 50px;
  border-radius: 40px;
  margin-left: 20px;
`

export const HGaming = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 20px;
`

export const GamingVideoListCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
`
