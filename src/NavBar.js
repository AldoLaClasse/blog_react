import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="navbar">
            <div>
                <Link className="logo" to="/">Mon super blog</Link>
            </div>
            <ul className="liens">
                <li>
                    <Link className="lien" to="/">Accueil</Link>
                </li>
                <li>
                    <Link className="lien buttonArticle" to="/add"> Créer un article</Link>
                </li>               
            </ul>
        </nav>

    )
}

export default NavBar;