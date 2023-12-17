import React from "react";
import logo from "../assets/kmin-logo.png";
class Footer extends React.Component {
    render() {
        return (
            <>
                <footer class="footer">
                    <img class="footer__logo" src={logo} alt="KMIN logo" />
                </footer>
            </>
        );
    }
}
export default Footer;
