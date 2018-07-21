from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return send_from_directory('static/SmartCart/', 'index.html')


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


@app.route('/main.js', methods=['GET'])
def main_js():
    return send_from_directory('static/SmartCart/', 'main.js')


@app.route('/polyfills.js', methods=['GET'])
def polyfills_js():
    return send_from_directory('static/SmartCart/', 'polyfills.js')


@app.route('/runtime.js', methods=['GET'])
def runtime_js():
    return send_from_directory('static/SmartCart/', 'runtime.js')


@app.route('/scripts.js', methods=['GET'])
def scripts_js():
    return send_from_directory('static/SmartCart/', 'scripts.js')


@app.route('/styles.js', methods=['GET'])
def styles_js():
    return send_from_directory('static/SmartCart/', 'styles.js')


@app.route('/vendor.js', methods=['GET'])
def vendor_js():
    return send_from_directory('static/SmartCart/', 'vendor.js')