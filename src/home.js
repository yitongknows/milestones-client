import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            body: "lorem ipsum...",
            author: "mario",
            id: 1,
        },
        {
            title: "Welcome party!",
            body: "lorem ipsum...",
            author: "yoshi",
            id: 2,
        },
        {
            title: "My new website",
            body: "lorem ipsum...",
            author: "mario",
            id: 3,
        },
    ]);

    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    // an empty dependency array only runs the effect once
    // run useEffect only when name is changed, stil runs it when initialized
    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} Title="Blogs" handleDelete={handleDelete} />
            <BlogList
                blogs={blogs.filter((blog) => blog.author === "mario")}
                Title="Mario's blogs"
            />
            <button onClick={() => setName("Luigi")}>change name</button>
            <p>{name}</p>
        </div>
    );
};

export default Home;
