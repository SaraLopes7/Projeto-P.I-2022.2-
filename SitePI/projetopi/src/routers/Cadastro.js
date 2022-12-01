import './Cadastro.css'

function Cadastro () {
    return (
    <div>
        <div id="cadastro-usuario">
        <img className='logo-login' src='https://www.altoastral.com.br/media/uploads/legacy/2016/07/AAT001-P001-89335-1-m-Divulgacao_1.jpg' alt='Logo da Paróquia'></img>
            <form>
                <div class="campos">
                    <label for="">Nome Completo: </label>
                    <input className='input1'  type="text" placeholder="Nome Completo" required></input>
                </div>
                <div class="campos">
                    <label for="">Email: </label>
                    <input className='input2'  type="email" placeholder="ex: meunome@email.com" autocomplete="email" required></input>
                </div>
                <div class="campos">
                    <label for="">CPF: </label>
                    <input className='input3'  type="number" placeholder="XXX.XXX.XXX–XX" required></input>
                </div>
                <div class="campos">
                    <label for="">Telefone: </label>
                    <input className='input4'  type="number" placeholder="(XX) XXXXX-XXXX"></input>
                </div>
                <div class="campos">
                    <label for="">Senha: </label>
                    <input className='input5' type="password" placeholder="Minímo: 8 caracteres" required></input>
                </div>
                <div class="campos">
                    <label for="">Confirmar Senha: </label>
                    <input type="password" placeholder="Minímo: 8 caracteres" required></input>
                </div>
                <button id='botao-cadastrar' type="button">Cadastrar</button>
                <button id='botao-login' type="button"><a href="/Login">Já possuo cadastro</a></button>
            </form>
        </div>
    </div>  
    )
}

export default Cadastro;