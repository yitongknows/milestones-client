// import "./App.css";
import Navbar from "./Navbar";
import Home from "./home";

function App() {
    const title = "This home page currently has nothing in it";
    const likes = 50;

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
