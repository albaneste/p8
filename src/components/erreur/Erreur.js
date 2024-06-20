import { NavLink } from 'react-router-dom'
import '../erreur/erreur.css'

function Erreur() {
  return (
    <div className='erreur'>
        <div className='titre'>404</div>
        <div className='message'>Oups! La page que vous demandez n'existe pas.</div>
        <NavLink to="/">
            <div className='retour'>Retourner sur la page d'accueil</div>
        </NavLink>
    </div>
  );
};

export default Erreur