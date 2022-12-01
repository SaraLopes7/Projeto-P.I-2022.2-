import Iframe from 'react-iframe'
import './Body.css'

function Body () {
    return (
    <div>
        <body className='tudo'>
            <div id='SobreNos'>
                <div className="linhas">
                    <div id="linha1">
                        <img src="http://s2.glbimg.com/cyOl9X2mwN-RJ7Rmn-Kkbe7RyNk=/1200x630/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/65/40/2094065" alt="" id="imagem1"></img>
                        <div id="texto1">
                            <h2>Quem Somos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                    </div>
                    <h3>Nossos Projetos</h3>
                    <div id="linha2">
                        <div id="texto2">
                            <h2>Distribuição de Pães e Sopas</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                        <div id="texto3">
                            <h2>Doação de Roupas</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                        <div id="texto4">
                            <h2>Distribuição de Alguma Outra Coisa</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                    </div>
                    <h3>Sobre Nós</h3>
                    <div id="linha3">
                        <img src="http://s2.glbimg.com/cyOl9X2mwN-RJ7Rmn-Kkbe7RyNk=/1200x630/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/65/40/2094065" alt="" id="imagem2"></img>
                        <div id="texto5">
                            <h2>Quem Somos:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                    </div>
                    <div id="linha4">
                        <div id="texto6">
                            <h2>Quem Somos:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                        <img src="http://s2.glbimg.com/cyOl9X2mwN-RJ7Rmn-Kkbe7RyNk=/1200x630/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/65/40/2094065" alt="" id="imagem3"></img>
                    </div>
                    <div id="linha5">
                        <div id="texto7">
                            <h2>Quem Somos:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                        <img src="http://s2.glbimg.com/cyOl9X2mwN-RJ7Rmn-Kkbe7RyNk=/1200x630/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/65/40/2094065" alt="" id="imagem4"></img>
                        <div id="texto8">
                            <h2>Quem Somos:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus aspernatur nostrum veritatis fugit autem laborum quasi consectetur blanditiis? Corporis id dolore quibusdam debitis similique velit eligendi aperiam natus repellat.</p>
                        </div>
                    </div>
                    <h3>Onde Nos Encontrar: </h3>
                </div>
            </div>
            <div id='VisiteNos'>
                <div id="linha6">
                    <div id="texto9">
                        <p>Venha nos fazer uma visita. A Paróquia da Torre está localizada na Rua Conde de Irajá, S/n - Torre, Recife - PE</p>
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.120183559029!2d-34.88603623702375!3d-8.089224493556621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f38b3717117%3A0x4371e4b40bf66016!2sPar%C3%B3quia%20Nossa%20Senhora%20do%20Ros%C3%A1rio%20(Igreja%20Do%20Pina)!5e0!3m2!1spt-BR!2sbr!4v1669635168696!5m2!1spt-BR!2sbr"
                            width="600" height="450" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </Iframe>
                    </div>
                </div>
            </div>
        </body>
    </div>  
    )
}

export default Body;