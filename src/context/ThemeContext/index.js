import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  onClickThemeButton: () => {},
  savedVideoList: [],
  onClickSaveButton: () => {},
  changeTabId: () => {},
  activeTabId: 'HOME',
  like: false,
  dislike: false,
  isSavedButtonClicked: false,
  onChangeLikeButtonTheme: () => {},
  onChangeDislikeButton: () => {},
  onChangeSavedButton: () => {},
})

export default ThemeContext
