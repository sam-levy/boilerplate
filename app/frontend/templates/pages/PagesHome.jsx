import React, { Component } from 'react'
import HelloWorld from '../../components/HelloWorld';
import AppProvider, { AppContext } from '../../contexts/AppContext'

import { Button } from 'semantic-ui-react'

export default class PagesHome extends Component {
  render() {
    return (
      <AppProvider>
        <HelloWorld name={this.props.name} />
        <Number/>
        <IncrementNumber/>
      </AppProvider>
    )
  }
}

const Number = () => (
  <AppContext.Consumer>
    {context => <p>{context.number}</p>}
  </AppContext.Consumer>
)

const IncrementNumber = () => (
  <AppContext.Consumer>
    {context => <Button content='Increase!' onClick={context.incrementNumber} />}
  </AppContext.Consumer>
)