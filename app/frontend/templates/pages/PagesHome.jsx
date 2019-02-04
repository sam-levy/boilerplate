import React, { Component } from 'react'
import HelloWorld from '../../components/HelloWorld';
import AppProvider, { AppContext } from '../../components/AppContext'

import { Button } from 'semantic-ui-react'

export default class PagesHome extends Component {
  render() {
    return (
      <AppProvider>
        <HelloWorld name={this.props.name} />
        <Number/>
        <Increase/>
      </AppProvider>
    )
  }
}

const Number = () => (
  <AppContext.Consumer>
    {context => <p>{context.number}</p>}
  </AppContext.Consumer>
)

const Increase = () => (
  <AppContext.Consumer>
    {context => <Button content='Increase!' onClick={context.increaseNumber} />}
  </AppContext.Consumer>
)