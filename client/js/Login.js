require('../styles/common.less')
require('../styles/login.less')

import React from 'react'
import ReactDom from 'react-dom'
import FlatButton from 'material-ui/FlatButton'
import Card from 'material-ui/Card'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Login extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="full-width full-height layout layout-align-center-center login-cot">
          <Card className="layout layout-align-center-center login-box">
            <FlatButton
              label={"登录"}
              onClick={() => {
                window.location.href = "/"
              }}/>
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDom.render(
  <Login />,
  document.getElementById('root')
)
