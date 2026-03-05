import './InfoPanel.css'

export default function InfoPanel({gameState, score, onRestart}){
    const messages = {
        idle: 'Choose a difficulty to start the game !',
        playing: 'Tap only new Cards to win, good luck !',
        gameover: `Game over ! Score : ${score}`,
        win : `You won ! Score : ${score}`
    }

    return(
        <div className='info-container'>
            <h2 className='info-display'>
                {messages[gameState] ?? 'Error'}
            </h2>
            {(gameState === 'gameover' || gameState ==='win') && (
                <button onClick={onRestart}>Play Again</button>
            )}

        </div>
    )
}