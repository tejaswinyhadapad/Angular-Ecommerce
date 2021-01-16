import {environment } from 'src/environments/environment';

export const baseUrl=environment.production? 'https://api.shoppingCart.com':'https://localhost:3000';
export const productUrl= baseUrl +'/products'
export const cartUrl=baseUrl +'/cart'