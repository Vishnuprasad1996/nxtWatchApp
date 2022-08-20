import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginBg,
  LoginContent,
  LogoImg,
  Label,
  InputText,
  ShowPassCont,
  ShowPassCheckbox,
  LabelShowPass,
  LoginButton,
  Form,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
    passWordType: 'password',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickLoginButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg, showSubmitError: true})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    const {passWordType} = this.state
    if (passWordType === 'password') {
      this.setState({passWordType: 'text'})
    } else {
      this.setState({passWordType: 'password'})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const {
            username,
            password,
            errorMsg,
            showSubmitError,
            passWordType,
          } = this.state

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginBg isDarkTheme={isDarkTheme}>
              <LoginContent isDarkTheme={isDarkTheme}>
                <LogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <Form onSubmit={this.onClickLoginButton}>
                  <Label isDarkTheme={isDarkTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <InputText
                    isDarkTheme={isDarkTheme}
                    onChange={this.onChangeUsername}
                    value={username}
                    id="username"
                    placeholder="Username"
                    type="text"
                  />
                  <Label isDarkTheme={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <InputText
                    isDarkTheme={isDarkTheme}
                    onChange={this.onChangePassword}
                    value={password}
                    id="password"
                    placeholder="Password"
                    type={passWordType}
                  />
                  <ShowPassCont>
                    <ShowPassCheckbox
                      onChange={this.onClickShowPassword}
                      id="show_password"
                      type="checkbox"
                    />
                    <LabelShowPass
                      isDarkTheme={isDarkTheme}
                      htmlFor="show_password"
                    >
                      Show Password
                    </LabelShowPass>
                  </ShowPassCont>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </Form>
              </LoginContent>
            </LoginBg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
