import "../../assets/css/nopage.css";
import {NavLink} from "react-router-dom";
const NoPage = () => {
    return (
        <div className="stars">
            <div className="central-body">
                <img className="image-404" src="https://media0.giphy.com/media/hS42TuYYnANLFR9IRQ/giphy.gif" width="200px" />
                <NavLink className="animated-button" to="/">
                    Home
                </NavLink>
            </div>
        </div>
    );
};

export default NoPage;
