from flask import Flask, render_template
app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('static/SmartCart/index.html')


@app.route('/start-cart/', methods=['POST'])
def start_cart():
    return 'The Start Cart Page'


@app.route('/add-item/', methods=['POST'])
def add_item():
    return 'The Add Item Page'


@app.route('/delete-item/', methods=['DELETE'])
def delete_item():
    return 'The Delete Item Page'


@app.route('/view-cart/', methods=['GET'])
def view_cart():
    return 'The View Cart Page'


@app.route('/get-cart/', methods=['GET'])
def get_cart():
    return 'The Get Cart Barcode Page'