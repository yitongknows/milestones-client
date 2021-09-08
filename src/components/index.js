const Index = (props) => {
    const { link, content } = props;
    return (
        <li>
            <a href={link}>{content}</a>
        </li>
    );
};

export default Index;
