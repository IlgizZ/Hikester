import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MainStartPage extends Component {
  render () {
      return (
        <div>
             <Link to='/authentication'>Аутентификация</Link>
             <Link to='/profile'>Профиль</Link>
        </div>
      )
  }
}
export default MainStartPage
