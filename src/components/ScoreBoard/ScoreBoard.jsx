import './ScoreBoard.css'

export default function ScoreBoard({score,bestScore}){
    return(
        <div className="scoreboard-container">
            <p className='scoreboard-display'>Current Score : {score}</p>
            <p className='scoreboard-display'>Best Score : {bestScore}</p>
        </div>
    )
}