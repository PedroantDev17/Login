from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/cadastro", methods=["POST"])
def api_dados():
    info = request.json

    
    print(info)
    

    return "Recebido"
if __name__=="__main__":
    app.run(debug=True)
    
    
