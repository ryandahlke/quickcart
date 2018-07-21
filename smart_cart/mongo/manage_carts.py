from pymongo import MongoClient
# this import is required if we want to handle the ObjectId as a string
from bson.objectid import ObjectId


class CartManager(object):

    def __init__(self, **kwargs):
        self.MONGO_HOST = '54.208.118.169'
        self.MONGO_PORT = 2017
        self.cart_id = kwargs.get('cart_id', '')
        self.item = kwargs.get('item', {})

    def open_connection(self):
        return MongoClient(self.MONGO_HOST, self.MONGO_PORT)

    @staticmethod
    def close_connection(client):
        client.close()

    def create_cart(self):
        client = self.open_connection()
        carts = client.smart_cart
        empty_cart = {'items': []}
        new_cart = carts.insert_one(empty_cart)
        cart_object_id = new_cart.inserted_id
        self.close_connection(client)
        return cart_object_id

    def add_item_to_cart(sefl, cart_id):
        return cart_contents

    def remove_item_from_cart(self):
        return cart_contents

    def get_cart(self):
        return cart_id

    def get_cart_contents():
        return cart_contents
