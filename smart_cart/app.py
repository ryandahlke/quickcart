from flask import Flask
app = Flask(__name__)

@app.route('/', methods = ['GET'])
def index():
    return 'Index Page'

@app.route('/start-cart/', methods = ['POST'])
def projects():
    return 'The Start Cart Page'

@app.route('/add-item/', methods = ['POST'])
def projects():
    return 'The Add Item Page'

@app.route('/delete-item/', methods = ['DELETE'])
def projects():
    return 'The Delete Item Page'

@app.route('/view-cart/', methods = ['GET'])
def projects():
    return 'The View Cart Page'

@app.route('/get-cart/', methods = ['GET'])
def projects():
    return 'The Get Cart Barcode Page'