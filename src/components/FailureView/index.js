import ThemeContext from '../../context/ThemeContext'

import {
  FailureBg,
  FailureImg,
  FailureDesc,
  FailurePara,
  TryAgainButton,
} from './styledComponents'

const FailureView = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {onClickTryAgain} = props

      const onClickRetryButton = () => {
        onClickTryAgain()
      }
      const failureImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      return (
        <FailureBg>
          <FailureImg src={failureImg} alt="failure view" />
          <FailureDesc isDarkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailureDesc>
          <FailurePara>
            We are having some trouble to complete your request. Please try
            again.
          </FailurePara>
          <TryAgainButton type="button" onClick={onClickRetryButton}>
            Retry
          </TryAgainButton>
        </FailureBg>
      )
    }}
  </ThemeContext.Consumer>
)

export default FailureView
