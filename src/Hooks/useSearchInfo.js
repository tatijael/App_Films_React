import { useGet } from "./useGet"
import { URL_BASE } from "../helpers/api";

export const useSearchInfo = (media, id, section)=>{

    const endpoint = `/${media}/${id}${ section ? "/".concat(section) : ''}`;

    const url = `${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`

    return useGet(url);
}