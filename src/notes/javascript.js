import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import Index from "../components";
import {
    bobInfo,
    amyInfo,
    friendInfo,
    restDemo,
    restDemoOut,
    friendInfoOut,
} from "../code-snippets/js-snippets";
const JavascriptNotes = () => {
    return (
        <Container fluid>
            <div className="index">
                <ul>
                    <li>
                        <a href="#destructuring">Destructuring Assignment</a>
                    </li>
                </ul>
            </div>
            <div className="content">
                <h2 className="where-to-start">Where to Start?</h2>
                <ul>
                    <Index
                        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
                        content="Spread Syntax (...)"
                    />
                    <Index
                        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"
                        content="Rest Syntax (...Arg)"
                    />
                </ul>
                <div className="destructuring" id="destructuring">
                    <h2>Destructuring Assignment</h2>
                    <p>
                        We use curly braces to destructure objects, and square
                        brackets to destructure arrays. For more detailed
                        explaination,{" "}
                        <a href="https://zellwk.com/blog/es6/#destructuring">
                            see here.
                        </a>
                    </p>
                    <p>
                        Use the <code>Spread Operator</code> to destructure
                        objects:
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={prism}
                        showLineNumbers="True"
                    >
                        {`${bobInfo}\n\n${amyInfo}\n\n${friendInfo}`}
                    </SyntaxHighlighter>
                    <p>Result:</p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={prism}
                        showLineNumbers="True"
                        children={friendInfoOut}
                    />
                    <p>
                        Use the <code>Rest Operator</code> to desstructure
                        object:
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={prism}
                        showLineNumbers="True"
                    >
                        {restDemo}
                    </SyntaxHighlighter>
                    <p>
                        Result for <code>restInfo</code>:
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={prism}
                        showLineNumbers="True"
                        children={restDemoOut}
                    />
                </div>
            </div>
        </Container>
    );
};

export default JavascriptNotes;
