import { useState } from "react"
import './collapse.css';
import arrowup from "../../images/arrowup.png";

function Collapse({ title, content }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="collapse">
            <div className="collapse-title" onClick={handleOpen}>
                <h3>{title}</h3>
                <div className={`arrowup ${open ? "rotate" : ""}`}><img src={arrowup} alt="arrow" /></div>
            </div>
            <div className="hidden">
                {open && <div className="content">{content}</div>}
            </div>
        </div>
    );
};

export default Collapse;