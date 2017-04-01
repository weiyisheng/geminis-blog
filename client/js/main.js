
require('../styles/common.less')
require('../styles/main.less')

import React from 'react'
import ReactDom from 'react-dom'

import('Client/js/containers/Home').then(Home => {
  ReactDom.render(
    <Home.default />,
    document.getElementById('root')
  )
})
