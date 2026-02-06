import React from 'react'
import Landing from './assets/components/LandingPage/Landing'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1632820941346-64e2e57c5cec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Satisfied",
      color:"blue"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Undeserved",
      color:"lightseagreen"
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmd8ZW58MHwxfDB8fHww",
      intro: "",
      tag: "Fresher",
      color:"orange"
    },

    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmd8ZW58MHwxfDB8fHww",
      intro: "",
      tag: "Intern",
      color:"hotpink"
    },


  ]
  return (
    <div>
      <Landing users={users} />
    </div>
  )
}

export default App