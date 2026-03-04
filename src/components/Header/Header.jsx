import ScoreBoard from '../ScoreBoard/ScoreBoard'
import './Header.css'

export default function Header({score,bestScore}){
    return(
        <div className="header-container">
            <h1 className='header-title'>Welcome to the Memory Game !</h1>
            <ScoreBoard score={score} bestScore={bestScore} ></ScoreBoard>
        </div>
    )
}