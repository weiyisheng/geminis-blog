import React from 'react'

export default class WaterfallItem extends React.Component {

  onImageLoaded() {
    const { onMeasured } = this.props
    onMeasured(this.box.offsetWidth, this.box.offsetHeight)
  }

  render() {
    const { data, onMeasured } = this.props

    return (
      <div ref={e => this.box = e} className="item-box">
        <img src={data}
          className="item-cover"
          onLoad={() => this.onImageLoaded()}
          onError={() => {console.log(" ----- ");}}/>
        <div className="info-box">
          <p className="url">
            {data}
          </p>
          <p>
            some<br />
            other<br />
            stuff<br />
            .....<br />
          </p>
        </div>
      </div>
    )
  }
}
