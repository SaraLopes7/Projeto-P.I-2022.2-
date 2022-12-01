import Contribuir from '../Contribuir';
import './Cartao.css'

function Cartao () {
    return (
    <div>
        <div>
            <Contribuir/>
        </div>
        <div className='cartao'>
            <h3>Informações do Cartão</h3>
            <form>
                <div class="campos">
                    <label for="">Número do Cartão: </label>
                    <input className='inputCartao1'  type="number" placeholder="XXXX XXXX XXXX XXXX" required></input>
                </div>
                <div class="campos">
                    <label for="">Data de validade: </label>
                    <input className='inputCartao2'  type="text" placeholder="XX/XXXX" required></input>
                </div>
                <div class="campos">
                    <label for="">CVV: </label>
                    <input className='inputCartao3'  type="number" placeholder="XXX" required></input>
                </div>
                <div class="campos">
                    <label for="">Nome no Cartão: </label>
                    <input className='inputCartao4'  type="text" placeholder="Ex: Felipe L Carvalho" required></input>
                </div>
            </form>
            <h3>Endereço de Cobrança</h3>
            <form>
                <div class="campos">
                    <label for="">CEP: </label>
                    <input className='inputEndereco1'  type="text" placeholder="XXXXX-XXX" required></input>
                </div>
                <div class="campos">
                    <label for="">Estado: </label>
                    <input className='inputEndereco2'  type="text" placeholder="ex: Pernambuco" required></input>
                </div>
                <div class="campos">
                    <label for="">Cidade: </label>
                    <input className='inputEndereco3'  type="text" placeholder="ex: Recife" required></input>
                </div>
                <div class="campos">
                    <label for="">Rua/Avenida: </label>
                    <input className='inputEndereco4'  type="text" placeholder="ex: Rua Conde de Iraja" required></input>
                </div>
                <div class="campos">
                    <label for="">Número: </label>
                    <input className='inputEndereco5' type="number" placeholder="XXXX" required></input>
                </div>
                <div class="campos">
                    <label for="">Complemento: </label>
                    <input className='inputEndereco6' type="text" placeholder="ex: Apartamento 201"></input>
                </div>
            </form>
            <button id='botao-doar' type="button">Doar</button>
        </div>
    </div>
    )
}    

export default Cartao;