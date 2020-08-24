import { useGet } from "./useGet"
import { URL_BASE } from "../helpers/api";

export const useSearch = (media,query,page = 1, language = "es-ES")=>{
/*
media, query
[tv,movies], trending
[tv,movies], tags
[multi], search
 */

 let endpoint;
let queryendpoint;
 
if (media === "multi"){
    endpoint = `/search/multi`

     queryendpoint = `&query=${query}`
}else{
     endpoint = query === "trending" 
    ? `/trending/${media}/week`
    : `/${media}/${query}`;
}

    const url = `${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}${queryendpoint}`

    return useGet(url);
}   