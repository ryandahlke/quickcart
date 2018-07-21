from semantics3 import Products


class SemanticsPuller(object):

    def __init__(self):
        self.api_key = 'SEM30A3983D93A26181838BA0FA228979B01'
        self.api_secret = 'OWFiNmE3YTU2NDljNDliNDU4ZDczZTk1ZmU3MTgzMDE'
        self.wrapper = Products(api_key=self.api_key, api_secret=self.api_secret)

    def get_product(self, upc):
        self.wrapper.products_field("upc", upc)
        resp = self.wrapper.get_products()
        if resp['results']:
            results = resp['results'][0]
            filtered_results = {k: v for k, v in results.items() if k in ['name', 'upc', 'images']}
            filtered_results['images'] = filtered_results['images'][0]

            return filtered_results
        else:
            raise Exception('Could not find the product')