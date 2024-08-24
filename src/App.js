import React from 'react'
import Content from './Content'
import IntroJSX from './IntroJSX'
import Object from './Object'
import ComponentInReact from './ComponentInReact'

const App = () => {
  return (
    <div>
      <h1>React JS Tutorial</h1>
      <Content />      
      <ul>
        <IntroJSX />
        <Object />
        <ComponentInReact />
        
      </ul>

    </div>
  )
}

export default App
