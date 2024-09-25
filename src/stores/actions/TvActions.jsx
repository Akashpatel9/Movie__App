import axios from '../../assets/axios';
import { loadTv } from '../reducers/TvSlice';
export {removeTv} from "../reducers/TvSlice";

export const asyncLoadTv = (id)=> async(dispatch,getState)=>{
    const key = "5f0c93bd";
    try {
        const detailResponse = await axios.get(`?i=${id}&apikey=${key}&type=series`);
        const theUltimateDetails = {
            detail: detailResponse.data,
        };
        dispatch(loadTv(theUltimateDetails))
    } catch (error) {
        console.log(error);
    }
}