import './CardGrid.css'

export default function CardGrid({cards, gameState, onScoreUpdate,onGameOver, onCardClick}){
    function handleCardClick(){

    }
    if(gameState!=='playing') return null
    
    return (
        <div className="card-grid">
            {cards.map(card=>(
                <Card key={card.id} id={card.id} image={card.image} onCardClick={handleCardClick}></Card>
            ))}
        </div>
    )
    
}