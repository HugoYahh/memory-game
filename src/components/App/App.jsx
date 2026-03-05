
import CardGrid from '../CardGrid/CardGrid'
import DifficultySelector from '../DifficultySelector/DifficultySelector'
import Header from '../Header/Header'
import InfoPanel from '../InfoPanel/InfoPanel'
import { useState } from 'react'
import './App.css'

function App() {
  const [score,setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const [gameState, setGameState] = useState('idle')
  const [difficulty,setDifficulty] = useState('medium')
  const [clickedCards, setClickedCards] = useState([])
  const [cards, setCards] = useState([])

  function handleRestart(){
    setGameState('idle')
  }

  function handleGameOver(){
    if (score > bestScore) setBestScore(score)
    setGameState('gameover')
  }

  function handleScoreUpdate(id){
    const newScore = score + 1
    setScore(newScore)
    setClickedCards([...clickedCards, id])
    setCards(shuffle(cards))
    if(newScore >= cards.length){
        setGameState('win')
    }
}

  const shuffle = (array) => {
    const arr = [...array] 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

  const fetchCards = async(count) =>{
    const ids = []
    while(ids.length < count){
      const rand = Math.floor(Math.random()*151) + 1
      if(!ids.includes(rand)) ids.push(rand)
    }

    const promises = ids.map(id=>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
    )

    const results = await Promise.all(promises)

    return results.map(pokemon =>({
      id:pokemon.id,
      name:pokemon.name,
      image:pokemon.sprites.front_default
    }))
  }



  const handleDifficultyChange= async(newDifficulty)=>{
    const count = { easy: 7, medium: 12, hard: 18 }
    const cards = await fetchCards(count[newDifficulty]) 
    setCards(cards)
    setDifficulty(newDifficulty)
    setScore(0)
    setClickedCards([])
    setGameState('playing')
  }

  

  return (
    
      <div className="app">
        <Header score={score} bestScore={bestScore}></Header>
        <InfoPanel score={score} gameState={gameState} onRestart={handleRestart}></InfoPanel>
        <DifficultySelector gameState={gameState} onDifficultyChange={handleDifficultyChange}></DifficultySelector>
        <CardGrid cards={cards} gameState={gameState} onScoreUpdate={handleScoreUpdate} onGameOver={handleGameOver} clickedCards={clickedCards}></CardGrid>
      </div>
  )
}

export default App
