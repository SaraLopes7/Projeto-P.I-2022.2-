from app import app
from app.models import User
from flask import render_template, request


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("teste.html")

@app.route("/", methods=["POST"])
def cadastro():
    CPF = request.form['CPF']
    Nome = request.form['Nome']
    Sobrenome = request.form['Sobrenome']
    Email = request.form['Email']
    Telefone = request.form['Telefone']
    Senha = request.form['Senha']
    Usuario = User(CPF, Nome, Sobrenome, Email, Telefone, Senha)
    Usuario.adicionarBanco()
    
    return "CADASTRADO!!!"

app.run(debug=True)