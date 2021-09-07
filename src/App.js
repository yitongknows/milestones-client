// import "./App.css";
import NavbarElement from "./Navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";

function App() {
    return (
        <Router>
            <div className="App">
                <NavbarElement />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
