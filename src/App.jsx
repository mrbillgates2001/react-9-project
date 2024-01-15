import React from 'react'
import Header from './components/header/Header';
import "./styles/main.scss"
import Main from './components/main/Main';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
    </React.Fragment>
  )
}

export default App