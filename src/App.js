import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'
import ConfigurationContext from './context/ConfigurationContext'

class App extends Component {
  state = {showLeftNavbar: true, showRightNavbar: true, showContent: true}

  onToggleShowContent = data => {
    this.setState({showContent: !data})
  }

  onToggleShowLeftNavbar = data1 => {
    this.setState({showLeftNavbar: !data1})
  }

  onToggleShowRightNavbar = data2 => {
    this.setState({showRightNavbar: !data2})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
