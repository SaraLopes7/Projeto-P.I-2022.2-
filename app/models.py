from app import db
from passlib.context import CryptContext

# CRIPTOGRAFIA DAS SENHAS
cripto = CryptContext(
    schemes=["pbkdf2_sha256"],
    default="pbkdf2_sha256",
    pbkdf2_sha256__default_rounds=50000 )

class User():
    def __init__(self, CPF, Nome, Sobrenome, Email, Telefone, Senha):
        self.CPF = CPF
        self.Nome = Nome
        self.Sobrenome = Sobrenome
        self.Email = Email
        self.Telefone = Telefone
        self.Senha = cripto.hash(Senha)

    def validarSenha(self, SenhaUsuario):
        return cripto.verify(SenhaUsuario, self.Senha)