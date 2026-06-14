import './App.css'
import Flashcard, { numCards } from './Components/Flashcard';

export default function App() {

  return (

    <div className="App">
      <h2 className='header'>International Flags Quiz</h2>
      <p className='description'>In honor of the World Cup, how well do you know your international flags?</p>
      <p style={{fontSize: 18, marginTop: 20}}>Number of Cards: {numCards}</p>

    <Flashcard />
      </div>
  )
}