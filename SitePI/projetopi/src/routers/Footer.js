import './Footer.css'

function Footer () {
    return (
      <div className='footer'>
        <img className='logo' src='https://www.altoastral.com.br/media/uploads/legacy/2016/07/AAT001-P001-89335-1-m-Divulgacao_1.jpg' alt='Logo da Paróquia'></img>
        <p className='contato'>CONTATO</p>
        <ul className='icones'>
          <li><a href=' '><img className='' src='https://cdn-icons-png.flaticon.com/512/2175/2175193.png' alt=''></img></a></li>
          <li><a href='https://www.instagram.com/paroquiadatorre/'><img className='' src='https://cdn-icons-png.flaticon.com/512/3670/3670274.png' alt=''></img></a></li>
          <li><a href=' '><img className='' src='https://cdn-icons-png.flaticon.com/512/733/733641.png' alt=''></img></a></li>
          <li><a href=' '><img className='' src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png' alt=''></img></a></li>
        </ul>
        <p className='endereco'>Rua Conde de Irajá, S/n, Torre, Recife - PE</p>
        <ul className='outros'>
          <li>FAC</li>
          <li>Termos e Condições</li>
          <li>Políticas de Privacidade</li>
        </ul>
      </div>  
    )
}

export default Footer;