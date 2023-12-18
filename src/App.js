import Heading from "./components/Heading.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
    render() {
        return (
            <>
                <Heading />
                <Main />
                <Footer />
            </>
        );
    }
}

export default App;
