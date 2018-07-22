from pymongo import MongoClient
# this import is required if we want to handle the ObjectId as a string
from bson.objectid import ObjectId
from smart_cart.upc_api.semantics_puller import SemanticsPuller


class CartManager(object):

    def __init__(self, **kwargs):
        self.MONGO_HOST = 'smartcart.xyz'
        self.MONGO_PORT = 2017
        self.cart_id_str = kwargs.get('cart_id', None)
        self.cart_id = ObjectId(self.cart_id_str)
        self.upc = kwargs.get('upc', {})

    def open_connection(self):
        return MongoClient(self.MONGO_HOST, self.MONGO_PORT)

    @staticmethod
    def close_connection(client):
        client.close()

    @staticmethod
    def get_carts_collection(client):
        db = client.smart_cart
        return db.carts

    def create_cart(self):
        client = self.open_connection()
        carts = self.get_carts_collection(client)
        empty_cart = {'items': []}
        new_cart = carts.insert_one(empty_cart)
        cart_object_id = new_cart.inserted_id
        self.close_connection(client)
        self.cart_id = cart_object_id
        self.cart_id_str = str(cart_object_id)
        return self.cart_id_str

    def add_item_to_cart(self, upc, quantity=1):
        client = self.open_connection()
        carts = self.get_carts_collection(client)
        this_cart = carts.find_one(self.cart_id)
        is_item_in_cart, item_index = self.is_item_in_cart(upc, this_cart)
        if not is_item_in_cart:
            item = self.get_upc_metadata(upc)
            item['quantity'] = quantity
            this_cart['items'].append(item)
            carts.update_one({'_id': self.cart_id}, {'$set': {'items': this_cart['items']}})
        else:
            this_cart['items'][item_index]['quantity'] = this_cart['items'][item_index]['quantity'] + quantity
            item = this_cart['items'][item_index]
            carts.update_one({'_id': self.cart_id}, {'$set': {'items': this_cart['items']}})
        self.close_connection(client)
        return item

    def remove_item_from_cart(self, upc, quantity=1):
        client = self.open_connection()
        carts = self.get_carts_collection(client)
        this_cart = carts.find_one(self.cart_id)
        is_item_in_cart, item_index = self.is_item_in_cart(upc, this_cart)
        if is_item_in_cart:
            counter = 0
            for item in this_cart['items']:
                if item['upc'] == upc and item['quantity'] == quantity:
                    this_cart['items'].pop(counter)
                elif item['upc'] == upc and item['quantity'] > quantity:
                    item['quantity'] = item['quantity'] - quantity
                counter += 1
            carts.update_one({'_id': self.cart_id}, {'$set': {'items': this_cart['items']}})
            self.close_connection(client)
        else:
            raise Exception('Cannot remove because item is not in your cart')

    def get_cart(self):
        client = self.open_connection()
        carts = self.get_carts_collection(client)
        this_cart = carts.find_one({'_id': self.cart_id})
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

    def get_upc_metadata(self, upc):
        puller = SemanticsPuller()
        metadata = puller.get_product(upc)
        return metadata

    def is_item_in_cart(self, upc, cart):
        counter = 0
        if cart['items']:
            for item in cart['items']:
                if item['upc'] == upc:
                    return True, counter
                counter+=1
        return False, 0

    def get_cart_upcs(self):
        upcs = []
        cart = self.get_cart()
        for item in cart['items']:
            upcs.append(item['upc'])

        return upcs