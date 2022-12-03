from app import app
from app.models import User
from flask import render_template, request


@app.route("/", methods=["GET"])
def home():
    return "home"

@app.route("/cadastro", methods=["GET", "POST"])
def cadastro():
    if request.method == "POST":
        CPF = request.form['CPF']
        Nome = request.form['Nome']
        Sobrenome = request.form['Sobrenome']
        Email = request.form['Email']
        Telefone = request.form['Telefone']
        Senha = request.form['Senha']
        Usuario = User(CPF, Nome, Sobrenome, Email, Telefone, Senha)
        Usuario.adicionarBanco()
        return "CADASTRADO!!!"
        
    return render_template("teste.html")

app.run(debug=True)