// import "./App.css";
import NavbarElement from "./components/Navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import ReactNotes from "./notes/react";
import { Container } from "react-bootstrap";
import JavascriptNotes from "./notes/javascript";

function App() {
    return (
        <Router>
            <div className="App">
                <Container fluid>
                    <div className="row">
                        <NavbarElement />
                    </div>
                    <div className="row mt-3">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/react">
                                <ReactNotes />
                            </Route>
                            <Route exact path="/js">
                                <JavascriptNotes />
                            </Route>
                        </Switch>
                    </div>
                </Container>
            </div>
        </Router>
    );
}

export default App;
