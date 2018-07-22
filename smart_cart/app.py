import json

from flask import Flask, send_from_directory, Response, request
from smart_cart.mongo.manage_carts import CartManager
from bson.objectid import ObjectId

app = Flask(__name__)


@app.route('/', methods=['GET'])
@app.route('/view-cart', methods=['GET'])
@app.route('/select-cart', methods=['GET'])
def index():
    return send_from_directory('static/SmartCart/', 'index.html')


@app.route('/create-cart/', methods=['POST'])
def start_cart():
    cm = CartManager()
    cart_id = cm.create_cart()
    response = {'cart_id': cart_id}
    response_json = json.dumps(response)
    return Response(response_json, status=201)


@app.route('/item/', methods=['POST'])
def add_item():
    upc = request.json['upc']
    cart_id = request.json['cart_id']
    cm = CartManager(cart_id)
    response = cm.add_item_to_cart(upc)
    response_json = json.dumps(response)
    return Response(response_json, status=201)


@app.route('/del-item/', methods=['DELETE'])
def delete_item():
    upc = request.json['upc']
    cart_id = request.json['cart_id']
    cm = CartManager(cart_id)
    cm.remove_item_from_cart(upc)
    return Response(status=204)


@app.route('/cart/<string:cart_id>')
def view_cart(cart_id):
    object_cart_id = ObjectId(cart_id)
    cm = CartManager(object_cart_id)
    response = cm.get_cart()
    response_json = json.dumps(response)
    return Response(response_json, status=200)


@app.route('/upcs-cart/<string:cart_id>')
def get_cart(cart_id):
    object_cart_id = ObjectId(cart_id)
    cm = CartManager(object_cart_id)
    response = cm.get_cart_upcs()
    response_json = json.dumps(response)
    return Response(response_json, status=200)


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