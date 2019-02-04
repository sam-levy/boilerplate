import React, { Component } from 'react'
import HelloWorld from '../../components/HelloWorld';

export default class PagesHome extends Component {
  render() {
    return <HelloWorld name={this.props.name} />
  }
}
