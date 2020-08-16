import { SERVER_ADDRESS } from "../api-dictionary";
import { ISource } from "../../entities/news-source";

export const fetchNewsSources = () => {
  return fetch( `${SERVER_ADDRESS}/news/news-sources` )
          .then( res => res.json() );
}

export const fetchNewsSource = ( id: number ) => {
  return fetch( `${SERVER_ADDRESS}/news/news-sources/${id}` )
          .then( res => res.json() );
}

export const fetchSaveNewsSource = (id: number, data: ISource) => {
  if ( data.id === 0) {
    return fetch( `${SERVER_ADDRESS}/news/news-sources/`, 
      {
        method: 'PUSH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
  } else {
    return fetch( `${SERVER_ADDRESS}/news/news-sources/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
  }
}