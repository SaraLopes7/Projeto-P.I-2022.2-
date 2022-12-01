import Contribuir from '../Contribuir';
import './Pix.css'

function Pix () {
    return (
    <div>
        <div className='pix' >
            <Contribuir/>
            <div>
                <img className='logo-pix' src='https://logopng.com.br/logos/pix-106.svg' alt='Logo do Pix'></img>
            </div>
            <div>
                <img className='qr-code' src='https://media.discordapp.net/attachments/954018018751553630/1047688104120680468/image.png' alt='QR Code do pix'></img>
            </div>
            <h3 className='pague'>PAGUE COM O PIX</h3>
            <ul className='pague-pix'>
                <li>Abra o aplicativo do seu banco</li>
                <li>Escolha Pagar com QR Code</li>
                <li>Aponte a câmera para o código</li>
                <li>Caso não consiga, selecione pagar CNPJ e copie a chave abaixo: </li>
            </ul>
            <p id='chave'>CHAVE DE CNPJ</p>
            <div className='chave-pix'>
                <p id='numero-chave'>48.336.431/0001-50</p>
            </div>
        </div>
    </div>
    )
}    

export default Pix;