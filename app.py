from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy 
from config import email, email_senha, url_postegresql

app = Flask(__name__)
app.secret_key = 'portfolioana'

mail_settings = {
  'MAIL_SERVER': 'smtp.gmail.com',
  'MAIL_PORT': '465',
  'MAIL_USE_TLS': False,
  'MAIL_USE_SSL': True,
  'MAIL_USERNAME': email,
  'MAIL_PASSWORD': email_senha
}

app.config.update(mail_settings)
mail = Mail(app)

app.config['SQLALCHEMY_DATABASE_URI'] = url_postegresql
db = SQLAlchemy(app)

class Contato:
  def __init__(self, nome, email, mensagem):
    self.nome = nome 
    self.email = email
    self.mensagem = mensagem

class Projeto(db.Model):
  id = db.Column(db.Integer, primary_key = True, autoincrement = True)
  nome = db.Column(db.String(150), nullable = False)
  imagem = db.Column(db.String(500), nullable = False)
  descricao = db.Column(db.String(500), nullable = False)
  link = db.Column(db.String(300), nullable = False)

  def __init__(self, nome, imagem, descricao, link):
    self.nome = nome
    self.imagem = imagem
    self.descricao = descricao
    self.link = link

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/adm')
def adm():
  projetos = Projeto.query.all()
  return render_template('adm.html', projetos=projetos)

@app.route('/new', methods = ['GET', 'POST'])
def new():
  if request.method == 'POST' :
    projeto = Projeto(
      request.form['nome'],
      request.form['imagem'],
      request.form['descricao'],
      request.form['link']
    )

    db.session.add(projeto)
    db.session.commit()
    flash('confia, com fé, dá bom!')
    return redirect('/adm')

@app.route('/send', methods = ['GET', 'POST'])
def send():
  if request.method == 'POST' :
    formContato = Contato(
      request.form['nome'],
      request.form['email'],
      request.form['mensagem']
    )

    msg = Message(
      subject= 'Contato do seu potfólio',
      sender= app.config.get('MAIL_USERNAME'),
      recipients= [app.config.get('MAIL_USERNAME')],

      body= f'''{formContato.nome} com o email {formContato.email}, te mandou a seguinte mensagem:
            
                {formContato.mensagem}'''
      )
      
    mail.send(msg)
  
  return render_template ('send.html', formContato = formContato)


if __name__ == '__main__' :
  db.create_all()
  app.run(debug=True)
