import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BootstrapNotes = () => {
    const codeString = "(num) => num + 1";
    return (
        <Container fluid>
            <div className="mb-3">
                <ul>
                    <li>
                        <a href="#where-to-start">Where to Start?</a>
                    </li>
                    <li>
                        <a href="#libraries">Useful Libraries in React</a>
                    </li>
                    <li>
                        <a href="#folders-files">Main Folders and Files</a>
                    </li>
                    <li>
                        <a href="#jsx">JSX</a>
                    </li>
                    <li>
                        <a href="#props">Props</a>
                    </li>
                    <li>
                        <a href="#hooks">Hooks</a>
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
                <h2 className="hooks" id="hooks">
                    Hooks
                </h2>
                <ul>
                    <li>Interacting with React state with Hooks</li>
                </ul>
                <p>
                    To declare a new variable in the state, we can use the{" "}
                    <code>useState</code> hook. The <code>useState</code> hook
                    return an array. The first element in the return array is
                    the initialized variable; the second element in the return
                    array is a function to update this state variable.{" "}
                    <a href="">example</a>
                </p>
                <ul>
                    <li>
                        An advanced hook is called <code>useReducer</code>,{" "}
                        <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">
                            see details
                        </a>
                        .
                    </li>
                    <li>
                        <a href="https://www.robinwieruch.de/react-usereducer-vs-usestate">
                            useReducer vs useState
                        </a>
                    </li>
                    <li>
                        <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">
                            For more React Hooks
                        </a>
                    </li>
                </ul>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </Container>
    );
};

export default BootstrapNotes;
