
import Banner from "../components/Banner/Banner";
import Collapse from "../components/collapse/Collapse";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ImageAbout from "../images/Image-source-2.png";
import aboutdata from "../data/about.json";


const About = () => {
    return (
        <div>
            <Header/>
            <main>
                <Banner texte="" image={ImageAbout} />
                <section className="collapse-about">
                    {aboutdata.map(({ id, title, content }) => (
                    <Collapse key={id} title={title} content={content} />
                    ))}
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default About;