import './Login.css'

function Login () {
    return (
    <div>
        <div id="login-usuario">
        <img className='logo-login' src='https://www.altoastral.com.br/media/uploads/legacy/2016/07/AAT001-P001-89335-1-m-Divulgacao_1.jpg' alt='Logo da Paróquia'></img>
            <form>
                <div className="campos">
                    <label for="">Email: </label>
                    <input id='email' type="email" placeholder="ex: meunome@email.com"></input>
                </div>
                <div className="campos">
                    <label for="">Senha: </label>
                    <input type="password" placeholder="Minímo: 8 caracteres"></input>
                </div>
                <button id='botao-login' type="submit">Login</button>
                <button id='botao-cadastro' type="submit"><a href="/Cadastro">Não possuo cadastro</a></button>
            </form>
        </div>
    </div>  
    )
}

export default Login;