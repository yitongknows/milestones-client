import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BootstrapNotes = () => {
    return (
        <Container fluid>
            <div className="mb-3">
                <ul>
                    <li>
                        <Link to="#where-to-start">Where to Start?</Link>
                    </li>
                    <li>
                        <Link to="#libraries">Useful Libraries in React</Link>
                    </li>
                    <li>
                        <Link to="#folders-files">Main Folders and Files</Link>
                    </li>
                    <li>
                        <Link to="#jsx">JSX</Link>
                    </li>
                    <li>
                        <Link to="#props">Props</Link>
                    </li>
                    <li>
                        <Link>State</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <h2 className="where-to-start">Where to Start?</h2>
                <ul>
                    <li>
                        <a href="https://github.com/facebook/create-react-app">
                            React Github page
                        </a>
                    </li>
                    <li>
                        <a href="https://create-react-app.dev/docs/getting-started">
                            User Guide for React
                        </a>
                    </li>
                    <li>
                        <a href="https://reactjs.org/docs/introducing-jsx.html">
                            Introduction to JSX
                        </a>
                    </li>
                </ul>
                <h2 className="libraries" id="libraries">
                    Useful Libraries in React
                </h2>
                <ul>
                    <li>
                        Fetch data in React -
                        <a href="https://github.com/axios/axios"> Axios</a>
                    </li>
                </ul>
                <h2 className="main-files">Main Folders and Files</h2>
                <ul>
                    <li>
                        node_modules - a folder that contains all installed node
                        packages via npm
                    </li>
                    <li>
                        src - a folder where most of your development goes here
                    </li>
                    <li>
                        package.json - a file that indicates all installed
                        dependencies and node package versions
                    </li>
                </ul>
                <h2 className="jsx">JSX</h2>
                <ul>
                    <li>
                        In React, we compose web pages using a language called
                        JSX, which is a combination of HTML and JavaScript.
                    </li>
                    <li>
                        A JavaScript object can be used with a curly braces{" "}
                        <a href="https://github.com/yitongknows/code-snippets-demo/blob/main/react/jsx-js.md">
                            Example
                        </a>
                    </li>
                </ul>
                <h2 className="props" id="props">
                    Props
                </h2>
                <ul>
                    <li>
                        props is used to pass variables from one component to
                        another component{" "}
                        <a href="https://github.com/yitongknows/code-snippets-demo/blob/main/react/props.md">
                            example
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default BootstrapNotes;
