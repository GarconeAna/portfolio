from flask import Flask, render_template, redirect, request
from flask_mail import Mail, Message

app = Flask(__name__)

mail_settings = {
  'MAIL_SERVER': 'smtp.gmail.com',
  'MAIL_PORT': '465',
  'MAIL_USE_TLS': False,
  'MAIL_USE_SSL': True,
  'MAIL_USERNAME': 'gcarol.portfolio@gmail.com',
  'MAIL_PASSWORD': 'g.anacarolina@portfolio'
}

app.config.update(mail_settings)
mail = Mail(app)

class Contato:
  def __init__(self, nome, email, mensagem):
    self.nome = nome 
    self.email = email
    self.mensagem = mensagem

@app.route('/send', methods = ['GET', 'POST'])
def send():
    formContato = Contato(
      request.form['nome'],
      request.form['email'],
      request.form['mensagem']
    )