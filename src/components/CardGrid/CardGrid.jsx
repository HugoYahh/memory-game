import './CardGrid.css'
import Card from '../Card/Card'

export default function CardGrid({cards, gameState, onScoreUpdate,onGameOver,clickedCards}){
    function handleCardClick(id){
        if(clickedCards.includes(id)){
            onGameOver()
        } else{
            onScoreUpdate(id)
        }
    }
    if(gameState!=='playing') return null
    
    return (
        <div className="card-grid">
            {cards.map(card=>(
                <Card name={card.name} key={card.id} id={card.id} image={card.image} onCardClick={handleCardClick}></Card>
            ))}
        </div>
    )
    
}