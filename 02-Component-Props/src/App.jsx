import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    <div className="main">
      <Card place="Santorini Villa" rating={4.5} stay="3 Night Stay" imageurl="https://images.unsplash.com/photo-1768813387233-9fd72fb11407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" />
      <Card place="Azamgarh" rating={2.9} stay="12 Night Stay" imageurl="https://images.unsplash.com/photo-1769399287827-4b7d79d99e0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
      <Card place="Varanasi" rating={3.5} stay="8 Night Stay" imageurl="https://plus.unsplash.com/premium_photo-1769103061760-fb15c3ce9bc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" />
      <Card place="Delhi" rating={3.5} stay="9 Night Stay" imageurl="https://images.unsplash.com/photo-1533907650686-70576141c030?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfDB8MHx8fDA%3D" />
    </div>
  )
}

export default App