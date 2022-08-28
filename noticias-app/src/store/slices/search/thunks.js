
import { newsApi } from "../../../api/newsApi";
import { getQuery } from "./searchSlice"; 



export const getNewsByQuery = ( page = 1, query = " " ) => {

    return async( dispatch ) => {
        
        const resp = await newsApi.get( `/everything?q=${ query }&page=${ page }&pageSize=10&language=en&apiKey=fbadda589c34412b8450c5edf8643c3e`);
        dispatch( getQuery( { news: resp.data.articles, query: query, page: page, pageLength: resp.data.articles.length } ) );
        
    }
}