import { Container } from "react-bootstrap";

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
                </div>
            </div>
        </Container>
    );
};

export default JavascriptNotes;
