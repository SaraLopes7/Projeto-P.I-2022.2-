import './Header.css'

function Header () {
    return (
    <div>
        <nav>
            <h2>Paróquia da Torre</h2>
            <ul>
                <li><a href="/Body#SobreNos">Sobre Nós</a></li>
                <li><a href="/Body#VisiteNos">Visite-Nos</a></li>
                <li><a href="/Body">F.A.Q</a></li>
                <li><a href="/Contribuir">Contribuir</a></li>
                <li><a href="/Login">Olá, Usuário</a></li>
            </ul>
        </nav>
    </div>  
    )
}

export default Header;