import axios from '../../assets/axios';
import { loadMovie } from '../reducers/MovieSlice';
export {removeMovie} from "../reducers/MovieSlice";

export const asyncLoadMovie = (id)=> async(dispatch,getState)=>{
    try {
        const api_key = "5f0c93bd"
        const detailResponse = await axios.get(`?i=${id}&apikey=${api_key}`);
        const ultimateDetails = {
            detail: detailResponse?.data,
        };
        dispatch(loadMovie(ultimateDetails))
    } catch (error) {
        console.log(error);
    }
}