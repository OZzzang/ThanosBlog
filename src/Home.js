import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const [name, setName] = useState('Anthony Russo');

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
            });
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title = "All Blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Anthony Russo')} title = "Anthony Russo's Blogs"/>}
            <button onClick={() => setName('Joss Whedon')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;