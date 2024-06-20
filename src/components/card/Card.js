
import './card.css';

function Card({ title, cover }) {
    return (

        <div className='logement'>
            <h2>{title}</h2>
            <div className='preview'>
                <img src={cover} alt="preview" />
            </div>
        </div>

    )
}

export default Card;