import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Avengers: Endgame', body: 'The final battle of the Infinity Saga.', author: 'Anthony Russo', id: 1 },
        { title: 'Avengers: Infinity War', body: 'The ultimate threat to the universe.', author: 'Anthony Russo', id: 2 },
        { title: 'Avengers: Age of Ultron', body: 'A new threat emerges from the past.', author: 'Joss Whedon', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>

            ))}
        </div>
    );
}
 
export default Home;