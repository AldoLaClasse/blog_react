import { useState } from 'react'
import {Link} from 'react-router-dom'

const Add = () => {

    const [title, setTitle] = useState('titre de votre article')
    const [author, setAuthor] = useState('auteur de votre article')
    const [body, setBody] = useState('corps de votre article')
    const [isCreated, setIsCreated] = useState(false)

    const HandleBlogAdding = (e) => {
        e.preventDefault()
        const date = new Date().toISOString().split('T')[0]
        const blog = { title, author, body, date}
        setIsCreated(true)
        fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(blog)
        }
        ).then(() => console.log('article bien ajouté'))

    }

    return (
        <div className="create-blog">
            <form onSubmit={HandleBlogAdding} className="form">
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={ (evt) => setTitle(evt.target.value)}
                    required />
                </div>
                <div className="form-group">
                <label htmlFor="author">Sélectionner un auteur</label>
                    <select 
                    className="form-control"
                    id="author"
                    value={author}
                    onChange={ (evt) => setAuthor(evt.target.value)}
                    required >
                        <option value="Toi">Toi</option>
                        <option value="Moi">Moi</option>
                        <option value="Michel">Michel</option>
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="body">Corps de l'article</label>
                    <textarea 
                    type="text" 
                    className="form-control textarea"
                    id="body"
                    value={body}
                    rows="10"
                    onChange={ (evt) => setBody(evt.target.value)}
                    required></textarea>
                </div>
                <div className="form-group">
                   { !isCreated && <button type="submit" className="btn-create">Créer article</button>}
                   { isCreated && <Link to="/">Aller vers accueil</Link>}
                </div>
            </form>
        </div>

    )
}

export default Add;