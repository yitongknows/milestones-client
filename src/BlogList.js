const BlogList = (props) => {
    const { blogs, Title, handleDelete } = props;

    return (
        <div className="blog-list">
            <h2>{Title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>
                        delete blog
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
