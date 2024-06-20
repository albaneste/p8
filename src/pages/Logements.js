import Carrousel from "../components/carrousel/Carrousel";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useParams } from 'react-router-dom';
import data from "../data/index.json";
import './logements.css';
import Tags from "../components/Tags/Tags";





const Logements = () => {

    const { id } = useParams()
    const logementActif = data.find(
      (data) => data.id === id
    )

    return (
        
        <div>

            <Header/>
            <Carrousel
                images={logementActif.pictures}
                alt={logementActif.title} />
            <main className="details">
                <div className="description">{logementActif.title}</div>
                <div className="lieu">{logementActif.location}</div>
            <Tags        
                tags={logementActif.tags} 
                id={logementActif.id} />
            

            

            </main>  
            
            <Footer/>
        </div>
    );
};

export default Logements;



