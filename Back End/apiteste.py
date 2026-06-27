from flask import Flask, request
from flask_cors import CORS
import sqlite3
banco = sqlite3.connect("info.db", check_same_thread=False)
cursor = banco.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS dados_login
               (id INTEGER PRIMARY KEY AUTOINCREMENT,
               nome varchar(100),
               email TEXT,
               senha TEXT)""")
banco.commit()

app = Flask(__name__)
CORS(app)
@app.route("/cadastro", methods=["POST"])
def api_dados():
    print("recebi uma requisição!")
    info = request.get_json()
    print(info)
    nome_user = info.get("name")
    email_user = info.get("email")
    senha_user = info.get("senha")

    cursor.execute("INSERT INTO dados_login (nome, email, senha) VALUES (?, ?, ?)", (nome_user, email_user, senha_user))
    banco.commit()


    return {"ok": True}
if __name__=="__main__":
    app.run(debug=True, host='0.0.0.0', port=5000, use_reloader=False) 