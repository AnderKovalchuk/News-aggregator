import { SERVER_ADDRESS } from "../api-dictionary";

export const fetchCategories = () => {
  return fetch( `${SERVER_ADDRESS}/news/categories/` )
          .then( res => res.json() );
}

export const fetchCategory = ( id: number ) => {
  return fetch( `${SERVER_ADDRESS}/news/categories/${id}` )
          .then( res => res.json() );
}