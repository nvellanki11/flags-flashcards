import './App.css';
import Flashcard, { numCards } from './Components/Flashcard';
import {useState} from "react"

export default function App() {
  const [streak, setStreak] = useState(0)

  return (

    <div className="App">
      <h2 className='header'>International Flags Quiz</h2>
      <p className='description'>In honor of the World Cup, how well do you know your international flags?</p>
      <p style={{fontSize: 20, marginTop: 20}}>Number of Cards: {numCards}</p>
      <p style={{fontSize: 16, marginTop: 20}}>Current Longest Streak: {streak}</p>

    <Flashcard streak={streak} setStreak={setStreak} />
      </div>
  )
}