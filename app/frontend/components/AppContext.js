import React, { Component } from 'react'

export const AppContext = React.createContext()

export default class AppProvider extends Component {

  state = {
    number: 1,
    increaseNumber: () => this.setState({number: this.state.number += 1})
  }

  render() {
    return(
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}