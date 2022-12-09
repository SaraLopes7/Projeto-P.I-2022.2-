from app import app
import json
from app.models import User, CartaoDeCredito
from flask_login import login_user, logout_user, current_user
from flask import render_template, request, redirect, url_for, flash


@app.route("/", methods=["GET"])
def home():
    return render_template("testeHome.html")

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

    return render_template("teste.html")

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
            return redirect(url_for('home'))

    return render_template("testeLogin.html")


@app.route("/doarCartao", methods=["GET", "POST"])
def doacao():
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
            return "CARTAO SALVO"

    return render_template("doacaoCARTAO.html")

# endpoint para deslogar o usuário (ao acessar ele é deslogado (logout_user()) e redirecionado para a rota de login)
@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('login'))

app.run(debug=True)