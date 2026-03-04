import './Card.css'

export default function Card({id,image,onCardClick,name}){
    return(
        <div key={id} onClick={()=>onCardClick(id)} className="card-container">
            <img className='pokemon-img' src={image} alt="pokemon image" />
            <p className='pokemon-name'>{name}</p>
        </div>
    )
}