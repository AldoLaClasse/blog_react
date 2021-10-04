import { useHistory, useParams } from "react-router-dom";
import UseRecuperation from "./UseRecuperation";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isLoading, error} = UseFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory();

    const HandleDelete = () => {
        fetch('http://localhost:8000/blogs/'+id, {
            method :'DELETE'
        }).then( () => {
            history.push('/')
            console.log('Article supprimé avec succès')
        })
    }

    return <div className="blog">
        {error && <div>{error}</div>}
        { blog && (
            <div className="blog">
                <h2 className="blog-title">{blog.title}</h2>
                <small className="blog-publication-date">{`Publié le : ${blog.date}`}</small>
                <p className="blog-body">{blog.body}</p>
                <p className="blog-author">{`Publié par : ${blog.author}`}</p>
                <button onClick= { HandleDelete }>Supprimer</button>
            </div>
        )}
    </div>
}

export default BlogDetails;
