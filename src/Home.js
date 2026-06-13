import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://thanosblog.onrender.com/blogs');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title = "All Blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Anthony Russo')} title = "Anthony Russo's Blogs"/>}
        </div>
    );
}

export default Home;