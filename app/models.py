from app import db, login_manager
from passlib.context import CryptContext
from flask_login import UserMixin

# CRIPTOGRAFIA DAS SENHAS
cripto = CryptContext(
    schemes=["pbkdf2_sha256"],
    default="pbkdf2_sha256",
    pbkdf2_sha256__default_rounds=50000 )


@login_manager.user_loader

def get_user(CPF):
    db.mycursor.execute("SELECT * FROM Usuarios WHERE CPF = %s", [CPF])
    return db.mycursor.fetchall()


class User(UserMixin):
    def __init__(self, CPF, Nome, Sobrenome, Email, Telefone, Senha):
        self.CPF = CPF
        self.Nome = Nome
        self.Sobrenome = Sobrenome
        self.Email = Email
        self.Telefone = Telefone
        self.Senha = cripto.hash(Senha)

    # Ao logar o usuário, ele procura pelo atributo ID. Foi preciso fazer um override no método da classe UserMixin (responsável pelo login)
    # para definir que o atributo "id" seria o "CPF"
    def get_id(self):
        return (self.CPF)
    
    def is_authenticated(self):
        return self._authenticated
    
    def adicionarBanco(self):
        Values = (self.CPF, self.Nome, self.Sobrenome, self.Email, self.Telefone, self.Senha)
        db.mycursor.execute("INSERT INTO usuarios VALUES (%s, %s, %s, %s, %s, %s, NULL)", Values)
        db.db.commit()
    
    def realizarDoacao(self, Valor, Tipo, Parcelas = 0):
        ValuesPagamentos = (Valor, Tipo, Parcelas)
        db.mycursor.execute("INSERT INTO doacoes (Usuarios_CPF) VALUES (%s)", [self.CPF])
        db.db.commit()
        db.mycursor.execute("INSERT INTO pagamentos (Doacoes_ID, Valor, Tipo, Parcelas) VALUES (LAST_INSERT_ID(), %s, %s, %s)", ValuesPagamentos)
        db.db.commit()
  

    def __buscarSenhaPorEmail(Email):
        db.mycursor.execute("SELECT Senha FROM usuarios WHERE Email = %s", [Email])
        Resultado = db.mycursor.fetchall()
        Senha = [''.join(i) for i in Resultado]
        Senha = ''.join(Senha)
        return Senha

    @staticmethod
    def buscarUsuarioPorEmail(EmailUsuario):
        db.mycursor.execute("SELECT * FROM usuarios WHERE Email = %s", [EmailUsuario])
        return db.mycursor.fetchone()

    @staticmethod
    def buscarUsuarioPorCPF(CPFUsuario):
        db.mycursor.execute("SELECT * FROM usuarios WHERE CPF = %s", [CPFUsuario])
        return db.mycursor.fetchone()


    @staticmethod
    def validarSenha(EmailUsuario, SenhaUsuario):
        SenhadoBanco = User.__buscarSenhaPorEmail(EmailUsuario)
        return cripto.verify(SenhaUsuario, SenhadoBanco)
    @staticmethod
    def verificarEmail (EmailUsuario):
        db.mycursor.execute("SELECT Email FROM usuarios WHERE Email = %s", [EmailUsuario])
        Resultado = db.mycursor.fetchall()
        return True if Resultado else False


class CartaoDeCredito():
    def __init__(self, Numero, CVV, DataVencimento, NomeTitular):
        self.Numero = Numero
        self.CVV = CVV
        self.DataVencimento = DataVencimento
        self.NomeTitular = NomeTitular
    
    # funcao para salvar o cartao no banco de dados (só deve ser chamada se o usuário aceitar a checkbox para salvar os dados)
    def salvarCartao(self):
        Values = (self.Numero, self.CVV, f"{self.DataVencimento}-00", self.NomeTitular)
        db.mycursor.execute("INSERT INTO cartaodecredito VALUES (%s, %s, %s, %s,NULL, NULL)", Values)
        db.db.commit()
    
    # inserindo na tabela relacionamento entre cartao de credito e usuarios
    def adicionarUsuarios_cartaodecredito(self, UsuarioCPF):
        Values = (UsuarioCPF, self.Numero)
        db.mycursor.execute("INSERT INTO usuarios_cartaodecredito VALUES (%s, %s)", Values)
        db.db.commit()