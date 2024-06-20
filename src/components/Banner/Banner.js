import '../Banner/banner.css'


function Banner({ texte, image }) {
    return (
        <div className='banner-all'>
            <div className='banner'>
                <img src={image} alt='bannière paysage' className='image' />
                <h1>{texte}</h1>
            </div>
        </div>
    )
}

export default Banner