import React from 'react'

export default class ItemBox extends React.Component {

  render() {
    const { maxNumberOfCols, index, layout } = this.props
    const style = layout ? {visibility: "visible", position: "absolute", top: layout.top, left: layout.left}
      : maxNumberOfCols> -1 && index < maxNumberOfCols ? {visibility: "visible", float: "left", position: "relative"}
      : {}

    return (
      <div
        ref={e => this.itemBox = e}
        className="waterfall-item-box"
        style={style}>
        {this.props.children}
      </div>
    )
  }
}
