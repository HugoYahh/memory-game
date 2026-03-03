
import CardGrid from '../CardGrid/CardGrid'
import DifficultySelector from '../DifficultySelector/DifficultySelector'
import Header from '../Header/Header'
import InfoPanel from '../InfoPanel/InfoPanel'
import { useState } from 'react'
import './App.css'

function App() {
  const [score,setScore] = useState(0)
  const [bestSCore,setBestScore] = useState(0)
  const [gameState, setGameState] = useState('idle')
  const [difficulty,setDifficulty] = useState('medium')
  const [clickedCards, setClickedCards] = useState([])
  const [cards, setCards] = useState([])



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
    <>
      <Header></Header>
      <InfoPanel score={score} gameState={gameState}></InfoPanel>
      <DifficultySelector gameState={gameState} onDifficultyChange={handleDifficultyChange}></DifficultySelector>
      <CardGrid></CardGrid>
    </>
  )
}

export default App
