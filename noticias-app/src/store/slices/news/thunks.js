import { newsApi } from "../../../api/newsApi";
import { setNews, startLoadingNews } from "./newSlice";




export const getNews = (page = 1, category="") => {

    //console.log("getnews: "+ category);
    return async( dispatch ) => {

        dispatch( startLoadingNews());

        const resp = await newsApi.get(`/top-headlines?country=us&category=${category}&pageSize=10&page=${page}&apiKey=fbadda589c34412b8450c5edf8643c3e`);
        
        dispatch( setNews({news: resp.data.articles, category: category, page: page, pageLength: resp.data.articles.length}) );
    }
}