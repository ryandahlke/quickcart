from flask import Flask, send_from_directory
from smart_cart.mongo.manage_carts import CartManager
from bson.objectid import ObjectId

app = Flask(__name__)

cm = CartManager()
upc='078742040370'
cart_id='5b53df321266c54abb3508fa'
object_cart_id = ObjectId(cart_id)


@app.route('/', methods=['GET'])
def index():
    return send_from_directory('static/SmartCart/', 'index.html')


@app.route('/start-cart/', methods=['POST'])
def start_cart():
    cm.create_cart()


@app.route('/add-item/', methods=['POST'])
def add_item():
    cm.cart_id = object_cart_id
    return cm.add_item_to_cart(upc)


@app.route('/delete-item/', methods=['DELETE'])
def delete_item():
    cm.cart_id = object_cart_id
    cm.remove_item_from_cart(upc)


@app.route('/view-cart/', methods=['GET'])
def view_cart():
    cm.cart_id = object_cart_id
    return cm.get_cart()


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