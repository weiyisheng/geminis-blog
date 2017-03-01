
import 'babel-polyfill'
require('../styles/main.less')

import React from 'react'
import ReactDom from 'react-dom'


//containers
import Home from 'Client/js/containers/Home'


ReactDom.render(
  <Home />,
  document.getElementById('root')
)
