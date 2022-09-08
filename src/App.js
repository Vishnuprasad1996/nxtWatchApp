import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRouter from './components/ProtectedRouter'
import ThemeContext from './context/ThemeContext'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideoList: [],
    activeTabId: 'HOME',
    like: false,
    dislike: false,
    isSavedButtonClicked: false,
  }

  onClickThemeButton = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onChangeDislikeButton = () => {
    const {like} = this.state
    this.setState(prevState => ({dislike: !prevState.dislike}))
    if (like === true) {
      this.setState({like: false})
    }
  }

  onChangeLikeButtonTheme = () => {
    const {dislike} = this.state
    this.setState(prevState => ({like: !prevState.like}))
    if (dislike === true) {
      this.setState({dislike: false})
    }
  }

  onChangeSavedButton = () => {
    this.setState(prevState => ({
      isSavedButtonClicked: !prevState.isSavedButtonClicked,
    }))
  }

  onClickSaveButton = VideoList => {
    const {savedVideoList} = this.state

    const videoObject = savedVideoList.find(
      eachList => eachList.id === VideoList.id,
    )

    if (videoObject) {
      const videoUpdatedList = savedVideoList.filter(
        eachItem => eachItem.id !== videoObject.id,
      )
      this.setState({savedVideoList: videoUpdatedList})
    } else {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, VideoList],
      }))
    }
  }

  changeTabId = value => {
    this.setState({activeTabId: value})
  }

  render() {
    const {
      isDarkTheme,
      savedVideoList,
      activeTabId,
      like,
      dislike,
      isSavedButtonClicked,
    } = this.state
    console.log(savedVideoList)

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideoList,
          activeTabId,
          onClickThemeButton: this.onClickThemeButton,
          onClickSaveButton: this.onClickSaveButton,
          changeTabId: this.changeTabId,
          like,
          dislike,
          isSavedButtonClicked,
          onChangeLikeButtonTheme: this.onChangeLikeButtonTheme,
          onChangeDislikeButton: this.onChangeDislikeButton,
          onChangeSavedButton: this.onChangeSavedButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRouter exact path="/" component={Home} />
          <ProtectedRouter exact path="/trending" component={Trending} />
          <ProtectedRouter exact path="/gaming" component={Gaming} />
          <ProtectedRouter path="/videos/:id" component={VideoItemDetails} />
          <ProtectedRouter exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
