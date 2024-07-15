import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'




function MyApp(){
  return (
    <h1>My Name is Shekhar</h1>
  )
}


// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Visit me Google'
// }

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)


const anotherUser = 'Chai aur Shekhar'
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(

  reactElement

)
