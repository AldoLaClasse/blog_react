import useRecuperation from './useRecuperation'
import BlogList from './BlogList'

const Home = () => {
const {data : blogs, error} = useRecuperation('http://localhost:8000/blog')

    return (
        <div className="home">
            {error && <div style={{'color': 'red'}}>{error}</div>}
            {blogs && <BlogList blogs={blogs} title={'Liste de nos articles'} />}
        </div>
    )
}

export default Home;