import React from 'react'
import './styles.less'

export default class Forms extends React.PureComponent {
  constructor () {
    this.x1 = 33  // class 属性 少
    this.state = {
      age: 25,  
    }
  }
  
  componentDidMount () {
    // this.setState({
    //   age: 26,
    // })
  }

  render() {
    return (
      <div>2222</div>
    )
  }
}


