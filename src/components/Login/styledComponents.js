import styled from 'styled-components'

export const LoginBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f9f9f9')};
`
export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 25px;
  border-radius: 5px;
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0px 4px 16px 0px #bfbfbf'};
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const LogoImg = styled.img`
  align-self: center;
  height: 40px;
  margin-bottom: 50px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const Label = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-bottom: 10px;
`

export const InputText = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 15px;
  color: #475569;
  border: #94a3b8 solid 1px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const ShowPassCont = styled.div`
  display: flex;
  align-items: center;
`

export const ShowPassCheckbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`

export const LabelShowPass = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const LoginButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
  color: #ffffff;
  font-weight: 600;
  background-color: #3b82f6;
  margin-top: 25px;
  font-size: 16px;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 14px;
  font-family: 'Roboto';
`
