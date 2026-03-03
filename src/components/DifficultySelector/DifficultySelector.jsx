import './DifficultySelector.css'

export default function DifficultySelector({gameState,onDifficultyChange}){
    return(
        <div className="difficulty-selector-container">
            {gameState==='idle' && 
                <div className="btn-container">
                    <button className="btn" onClick={()=> onDifficultyChange('easy')}>Easy</button>
                    <button className="btn" onClick={()=> onDifficultyChange('medium')}>Medium</button>
                    <button className="btn" onClick={()=> onDifficultyChange('hard')}>Hard</button>
                </div>
            }
        </div>
    )
}