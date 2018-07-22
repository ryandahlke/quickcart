import barcode


def create_barcode(url_to_cart_upcs, cart_id):
    code39 = barcode.get_barcode_class('code128')
    url_barcode = code39(url_to_cart_upcs)
    path = 'smart_cart/barcode_images/{}'.format(cart_id)
    url_barcode.save(path)
