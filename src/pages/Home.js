
import './home.css';
import Banner from "../components/Banner/Banner";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Image from "../images/Image-source-1.png";
import data from "../data/index.json";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={Image} />
                <section>
                    <div className="cards">
                        {data.map(({ id, title, cover }, index) => (
                            <NavLink key={index} to={`/logement/${id}`}>
                                <Card title={title} cover={cover} />
                            </NavLink>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;