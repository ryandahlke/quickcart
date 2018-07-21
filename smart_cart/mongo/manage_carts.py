from pymongo import MongoClient
# this import is required if we want to handle the ObjectId as a string
from bson.objectid import ObjectId


class CartManager(object):

    def __init__(self, **kwargs):
        self.MONGO_HOST = 'smartcart.xyz'
        self.MONGO_PORT = 2017
        self.cart_id = kwargs.get('cart_id', None)
        self.item = kwargs.get('item', {})

    def open_connection(self):
        return MongoClient(self.MONGO_HOST, self.MONGO_PORT)

    @staticmethod
    def close_connection(client):
        client.close()

    def get_carts_collection(self, client):
        db = client.smart_cart
        return db.carts

    def create_cart(self):
        client = self.open_connection()
        carts = self.get_carts_collection(client)
        empty_cart = {'items': []}
        new_cart = carts.insert_one(empty_cart)
        cart_object_id = new_cart.inserted_id
        self.close_connection(client)
        return cart_object_id

    def add_item_to_cart(self):
        client = self.open_connection()
        carts = self.get_carts_collection(client)
        this_cart = carts.find_one(self.cart_id)
        this_cart['items'].append(self.item)
        carts.update_one({'_id': self.cart_id}, {'$set': {'items': this_cart['items']}})
        return this_cart

    def remove_item_from_cart(self):
        return cart_contents

    def get_cart(self, cart_id, client=None):
        if not client:
            client = self.open_connection()
        carts = self.get_carts_collection(client)
        this_cart = carts.find_one({'_id': cart_id})
        self.close_connection(client)
        return this_cart

    def get_cart_ids(self):
        client = self.open_connection()
        carts = self.get_carts_collection(client)
        cursor = carts.find({})
        cart_ids = []
        for item in cursor:
            cart_ids.append(ObjectId(item['_id']))

        return cart_ids
