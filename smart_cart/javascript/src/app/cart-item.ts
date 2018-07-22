export class CartItem {
  upc: string;
  imageUrl: string;
  description: string;

  // constructor(upc: string){this.upc = upc;}

  constructor( upc: string, imageUrl: string='', description: string=''){
    this.upc = upc;
    this.imageUrl = imageUrl;
    this.description = description;
  };

}
