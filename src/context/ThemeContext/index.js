import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  onClickThemeButton: () => {},
  savedVideoList: [],
  onClickSaveButton: () => {},
})

export default ThemeContext
