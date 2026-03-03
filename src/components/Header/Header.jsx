import ScoreBoard from '../ScoreBoard/ScoreBoard'
import './Header.css'

export default function Header(){
    return(
        <div className="header-container">
            <h1 className='header-title'>Welcome to the Memory Game !</h1>
            <ScoreBoard score='2' bestScore='3' ></ScoreBoard>
        </div>
    )
}