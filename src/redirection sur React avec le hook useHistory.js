import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('Titre de l\'article');
    const [author, setAuthor] = useState('Auteur');
    const [body, setBody] = useState('Corps du texte');

    const history = useHistory();


    const HandleBlogAdding = (e) => {
        e.preventDefault()
        const date = new Date().toISOString().split('T')
        const blog = { title, author, body, date }
        fetch('http://localhost:8000/blogs',
        {
            method:'POST',
            header: {'Content-Type' : 'application/json'},
            body: JSON.stringify(blog)
        }
        ).then( () => {
            console.log('article ajouté avec succès')
            history.push('/')
        })
    }
