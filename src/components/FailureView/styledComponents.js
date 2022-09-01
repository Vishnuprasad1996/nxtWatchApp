import styled from 'styled-components'

export const FailureBg = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
`

export const FailureImg = styled.img`
  width: 50%;
`

export const FailureDesc = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  font-size: 16px;
  font-family: 'Roboto';
`

export const FailurePara = styled.p`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  text-align: center;
`

export const TryAgainButton = styled.button`
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
`
