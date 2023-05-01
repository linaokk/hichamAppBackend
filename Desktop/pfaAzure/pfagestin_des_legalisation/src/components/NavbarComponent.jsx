import React, {Component} from 'react';
import "../styles/navbar.css"
class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="menu">
                        <li className="logo"><a href="#">Wraqi.com</a></li>
                        <li className="item"><a href="#">accueil</a></li>
                        <li className="item"><a href="#">comment ca marche ?</a></li>
                        <li className="item"><a href="#">Services</a></li>

                    <li className="item button"><a href="#">Log In</a></li>
                    <li className="item button secondary"><a href="#">Sign Up</a></li>
                    <li className="toggle"><span className="bars"></span></li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default NavbarComponent;