import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import useRecuperation from './useRecuperation'

const BlogDetail = () => {

    const { id } = useParams()
    console.log(id)
    const { data : blog, error } = useRecuperation('http://localhost:8000/blogs' + id)
    console.log('BLOG ' + blog)

    return (
        <div>
            { error && <div style={{'color': 'red'}}>Ne vous inquiétez pas tout est sous contrôle...</div>}
            { blog && (
                <div className="blog">
                    <Link to="/" className="blog-titre">{blog.title}</Link>
                    <small className="blog-publication-date">Publié le : {blog.date}</small>
                    <p className="blog-body">{blog.body}</p>
                    <p className="blog-author">Publié par : {blog.author}</p>
                </div>
            )
            }
        </div>
    )
}

export default BlogDetail;
