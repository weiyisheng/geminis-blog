import React from 'react'


//components
import Waterfall from 'react-waterfall-w'
import WaterfallItem from 'Client/js/components/WaterfallItem'

const MockData = ["http://new-img2.ol-img.com/985x695/117/362/li2sIrLbBDCQM.jpg",
  "http://pic1.win4000.com/wallpaper/c/53b102c707232.jpg",
  "http://img001.21cnimg.com/photos/album/20140217/m320/DCEA3446660B2EC418ECA4E1A459933F.jpeg",
  "http://pic22.8bo.com:8201/npicture/2014/217/9L9NCRTM4TM10005.jpg",
  "http://pic22.8bo.com:8201/npicture/2014/217/9L9GOJG14TM10005.jpg",
  "http://pic22.8bo.com:8201/npicture/2014/217/9L9L56SM4TM10005.jpg",
  "http://new-img2.ol-img.com/985x695/117/362/li2sIrLbBDCQM.jpg",
  "http://pic1.win4000.com/wallpaper/c/53b102c707232.jpg",
  "http://img001.21cnimg.com/photos/album/20140217/m320/DCEA3446660B2EC418ECA4E1A459933F.jpeg",
  "http://pic22.8bo.com:8201/npicture/2014/217/9L9NCRTM4TM10005.jpg",
  "http://pic22.8bo.com:8201/npicture/2014/217/9L9GOJG14TM10005.jpg",
  "http://pic22.8bo.com:8201/npicture/2014/217/9L9L56SM4TM10005.jpg",
  "http://new-img2.ol-img.com/985x695/117/362/li2sIrLbBDCQM.jpg",
    "http://pic1.win4000.com/wallpaper/c/53b102c707232.jpg",
    "http://img001.21cnimg.com/photos/album/20140217/m320/DCEA3446660B2EC418ECA4E1A459933F.jpeg",
    "http://pic22.8bo.com:8201/npicture/2014/217/9L9NCRTM4TM10005.jpg",
    "http://pic22.8bo.com:8201/npicture/2014/217/9L9GOJG14TM10005.jpg",
    "http://pic22.8bo.com:8201/npicture/2014/217/9L9L56SM4TM10005.jpg",
    "http://new-img2.ol-img.com/985x695/117/362/li2sIrLbBDCQM.jpg",
    "http://pic1.win4000.com/wallpaper/c/53b102c707232.jpg",
    "http://img001.21cnimg.com/photos/album/20140217/m320/DCEA3446660B2EC418ECA4E1A459933F.jpeg",
    "http://pic22.8bo.com:8201/npicture/2014/217/9L9NCRTM4TM10005.jpg",
    "http://pic22.8bo.com:8201/npicture/2014/217/9L9GOJG14TM10005.jpg",
    "http://pic22.8bo.com:8201/npicture/2014/217/9L9L56SM4TM10005.jpg"]

function MockDataHuge(data) {
  let result = []
  for (let i = 0; i < 2; i++) {
    result = result.concat(data)
  }
  return result
}


export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: MockData
    }
  }

  render() {
    return (
      <div>
        <div style={{margin: "50px 70px"}}>
          {
            <Waterfall
              items={this.state.data}
              renderItem={(item, onMeasured) => <WaterfallItem data={item} onMeasured={onMeasured}/>}/>
          }
        </div>
        <div onClick={() => {this.setState({data: MockDataHuge(this.state.data)})}}>点击增加d更多</div>
      </div>
    )
  }
}
