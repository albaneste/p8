import Carrousel from "../components/carrousel/Carrousel";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useParams } from 'react-router-dom';
import data from "../data/index.json";
import './logements.css';
import Tags from "../components/Tags/Tags";
import Rating from "../components/rating/Rating";
import Host from "../components/host/Host";
import Collapse from "../components/collapse/Collapse";





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
                <div className="logements-infos">
                    <div className="titre-lieu-tags">
                        <div className="description">{logementActif.title}</div>
                        <div className="lieu">{logementActif.location}</div>
                        <Tags        
                            tags={logementActif.tags} 
                            id={logementActif.id} />  
                    </div>
                    <div className="host-rating">
                        <Host host={logementActif.host} />
                        <Rating rating={logementActif.rating} />
                    </div>
                </div>
                <div className="logement-collapse">
                    <div className="collapse-description">
                        <Collapse
                            title="Description"
                            content={logementActif.description}
                        />
                    </div>
                    <div className="collapse-equipements">
                        <Collapse
                            title="Équipements"
                            content={logementActif.equipments.map((item, index) => {
                                return <div key={(item, index)}>{item}</div>
                            })}
                        />
                    </div> 
                </div>
            </main>  
            <Footer/>
        </div>
        
    );
};

export default Logements;



