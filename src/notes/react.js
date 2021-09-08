import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import Index from "../components";
import {
    friends,
    FriendList,
    friendsText,
    FriendListText,
} from "../code-snippets/react-snippets";

const ReactNotes = () => {
    return (
        <Container fluid className="mb-6">
            <div className="mb-3">
                <ul>
                    <Index link="#where-to-start" content="Where to Start?" />
                    <Index
                        link="#libraries"
                        content="Useful Libraries in React"
                    />
                    <Index
                        link="#folders-files"
                        content="Main Folders and Files"
                    />
                    <Index link="#jsx" content="JSX" />
                    <Index link="#props" content="Props" />
                    <Index link="#hooks" content="Hooks" />
                    <Index
                        link="#new-components"
                        content="Create New Components"
                    />
                    <Index
                        link="#callback"
                        content="Use Callback Handlers to Communicate Up"
                    />
                    <Index link="#inline" content="Inline Handler" />
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
                    <Index
                        link="https://reactjs.org/docs/rendering-elements.html"
                        content="How React Render Elements"
                    />
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
                    <li>
                        We use <code>props</code> to pass data information down
                        the component tree. It can't be passed up the component
                        tree; but we can use a <b>callback handler</b> to do so.
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
                    <a href="https://github.com/yitongknows/code-snippets-demo/blob/main/react/hooks.md">
                        example
                    </a>
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
                <h2 className="new-components" id="new-components">
                    Create New Components
                </h2>
                <p>To create a new React component, see example below:</p>
                <p>First, create a list of object for the display data</p>
                <SyntaxHighlighter
                    language="javascript"
                    style={prism}
                    children={friendsText}
                    showLineNumbers="True"
                />
                <p>
                    Then, create a new React component called{" "}
                    <code>FriendList</code>:
                </p>
                <SyntaxHighlighter
                    language="jsx"
                    style={prism}
                    showLineNumbers="True"
                >
                    {FriendListText}
                </SyntaxHighlighter>
                <p>
                    Then, to utilize/instantiate the <code>FriendList</code>{" "}
                    component, simply do:
                </p>
                <SyntaxHighlighter
                    language="jsx"
                    style={prism}
                    showLineNumbers="True"
                >
                    {`import { friends,FriendList } from "../code-snippets/react-snippets";
...
<FriendList friends={friends} />`}
                </SyntaxHighlighter>
                <p>The output will look like this:</p>
                <FriendList friends={friends} />

                <h2 className="callback" id="callback">
                    Use Callback Handlers to Communicate Up
                </h2>
                <p>
                    In section <a href="#props">Props</a>, we disscuss that we
                    can only use props to pass data down the component tree, but
                    cannot pass it upwards. However, we can bypass this
                    limitation by using <b>callback handlers</b>.{" "}
                    <a href="https://github.com/yitongknows/code-snippets-demo/blob/main/react/callback.md">
                        example
                    </a>
                </p>
                <p>
                    For manipulating <b>state</b> and <b>handlers</b> across
                    components,{" "}
                    <a href="https://github.com/yitongknows/code-snippets-demo/blob/main/react/lift-state.md">
                        see here
                    </a>
                </p>
                <h2 className="inline" id="inline">
                    Inline Handler
                </h2>
                <p>
                    One way to achieve <b>inline handler</b> is to use the{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind">
                        bind method.
                    </a>
                    Example:
                    <SyntaxHighlighter
                        language="jsx"
                        style={prism}
                        showLineNumbers="True"
                    >{`const App = () => {
                        const str = "Hello World";
                        const printStr = () => console.log(str);
                        ...
                        return(
                            <List printStr2 = {printStr.bind(str)}/>
                        );
                    }`}</SyntaxHighlighter>
                </p>
            </div>
        </Container>
    );
};

export default ReactNotes;
