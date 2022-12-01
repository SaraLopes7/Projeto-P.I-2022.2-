import './Contribuir.css'

function Contribuir () {
    return (
    <div>
        <div id="cadastro-usuario">
        <img className='logo-login' src='https://cdn-icons-png.flaticon.com/512/1692/1692181.png' alt='Icon de doação'></img>
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
                <label for="">Valor da Contribuição: </label>
                <input className='inputs5' type="number" placeholder="Insira o Valor" required></input>
            </div>
            <h3 id='escolha'>Escolha a Forma de Pagamento: </h3>
            <button id='botao-cartao' type="button"><a href="/Cartao">Cartão de Crédito</a></button>
            <button id='botao-pix' type="button"><a href="/Pix">Pix</a></button>
            <button id='botao-boleto' type="button"><a href="/Boleto">Boleto</a></button>
        </form>
        </div>
    </div>
    )
}


export default Contribuir;