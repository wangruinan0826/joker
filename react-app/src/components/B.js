import React, { Component } from 'react'

export default class B extends Component {
  render() {
    return (
      <div>
        BBBBBBB
        <button onClick={()=>{
            this.props.history.goBack();
        }}>&lt;返回上一页</button>
      </div>
    )
  }
}
