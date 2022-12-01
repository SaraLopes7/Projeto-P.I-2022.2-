import Contribuir from '../Contribuir';
import './Boleto.css'

function Boleto () {
    return (
    <div id='boleto'>
        <div>
            <Contribuir/>
        </div>
        <p>Você pode baixar seu boleto: </p>
        <div>
            <img className='pdf' src='https://cdn-icons-png.flaticon.com/512/54/54702.png' alt='PDF'></img>
            <div  id='boletopdf'>
                <p>SeuBoleto.pdf</p>
            </div>
            <button id='baixar' type="button">Baixar</button>
            <p>Ou ler o código de barras: </p>
            <img className='barras' src='https://cdn.discordapp.com/attachments/954018018751553630/1047708104516718732/image.png' alt='Código de Barras'></img>
        </div>
    </div>
    )
}    

export default Boleto;