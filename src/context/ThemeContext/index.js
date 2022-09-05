import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  onClickThemeButton: () => {},
  savedVideoList: [],
  onClickSaveButton: () => {},
  changeTabId: () => {},
  activeTabId: 'HOME',
})

export default ThemeContext
