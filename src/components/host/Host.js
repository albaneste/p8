import './host.css'

function Host({ host }) {
    return (
      <div className="host-container">
        <div className="host-name">{host.name}</div>
        <img className="host-picture" src={host.picture} alt={host.name} />
      </div>
    )
  }
  
  export default Host