import {Link} from 'react-router-dom'

const BlogList = ({ blogs, title }) => {

    return (
        <div className="bloglist">
            <h2 className="">{title}</h2>
            {
                blogs.map((blog) => {
                    return (
                        <div className="blog" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title}</Link>
                            <small className="blog-publication-date">Publié le : {blog.date}</small>
                            <p className="blog-author">Publié par : {blog.author}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default BlogList;