from app import app
import json
from app.models import User, CartaoDeCredito
from flask_login import login_user, logout_user, current_user
from flask import render_template, request, redirect, url_for, flash

@app.route("/index", methods=["GET"])
@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/cadastro", methods=["GET", "POST"])
def cadastro():
    if request.method == "POST":
        CPF = request.form['CPF']
        Nome = request.form['Nome'].upper()
        Sobrenome = request.form['Sobrenome'].upper()
        Email = request.form['Email'].upper()
        Telefone = request.form['Telefone']
        Senha = request.form['Senha']
        ConfirmacaoSenha = request.form['ConfirmacaoSenha']

        if Senha == ConfirmacaoSenha:
            Usuario = User(CPF, Nome, Sobrenome, Email, Telefone, Senha)
            Usuario.adicionarBanco()
            #retorna para a rota de login (página de login)
            return redirect(url_for('login'))
        else:
            return "As senhas não se coincidem (tratar no frontend)"

    return render_template("Principal/cadastro.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        Email = request.form['EmailLogin'].upper()
        Senha = request.form['SenhaLogin']

        if not User.verificarEmail(Email) or not User.validarSenha(Email, Senha):
            return redirect(url_for('login'))
        else:
            DadosUsuario = User.buscarUsuarioPorEmail(Email)
            Usuario = User(DadosUsuario[0], DadosUsuario[1], DadosUsuario[2], DadosUsuario[3], DadosUsuario[4], DadosUsuario[5])
            login_user(Usuario)
            #return render_template('teste.html')
            return redirect(url_for('index'))

    return render_template("Principal/login.html")


@app.route("/contribuir")
def contribuir():
    if request.method == "POST":
        if current_user[0]:
            Usuario = User(current_user[0][0], current_user[0][1], current_user[0][2], current_user[0][3], current_user[0][4], current_user[0][5])
        else:
            CPF = request.form['CPF']
            Nome = request.form['Nome'].upper()
            Sobrenome = request.form['Sobrenome'].upper()
            Email = request.form['Email'].upper()
            Telefone = request.form['Telefone']
        
    return render_template("Principal/contribuir.html")

@app.route("/cartao", methods=["GET", "POST"])
def cartao():
    #if current_user[0]:
    #    Usuario = User(current_user[0][0], current_user[0][1], current_user[0][2], current_user[0][3], current_user[0][4], current_user[0][5])
    try:
        if current_user[0]:
            Usuario = User(current_user[0][0], current_user[0][1], current_user[0][2], current_user[0][3], current_user[0][4], current_user[0][5])
            if request.method == "POST":
                Numero = request.form["NumeroCartao"]
                DataVencimento = request.form["DataValidade"]
                CVV = request.form["CVV"]
                NomeTitular = request.form["TitularCartao"]
                ValorContribuicao = request.form["ValorContribuicao"]
                SalvarCartao = request.form.get("SalvarCartao")
                Cartao = CartaoDeCredito(Numero, CVV, DataVencimento, NomeTitular)

                Usuario.realizarDoacao(ValorContribuicao, "Cartao")

                if SalvarCartao:
                    Cartao.salvarCartao()
                    Cartao.adicionarUsuarios_cartaodecredito(Usuario.CPF)
                return f"Doação no valor de R${ValorContribuicao} feita!!"
    except:
        print("")
        #return redirect(url_for('contribuir'))
    return render_template("Pagamentos/cartao.html")

@app.route("/pix")
def pix():
    return render_template("Pagamentos/pix.html")

@app.route("/boleto")
def boleto():
    return render_template("Pagamentos/boleto.html")

# endpoint para deslogar o usuário (ao acessar ele é deslogado (logout_user()) e redirecionado para a rota de login)
@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('login'))

app.run(debug=True)