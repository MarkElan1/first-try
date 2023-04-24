import {Dispatch} from "redux";
import {PostAction, PostsActionTypes} from "../../types/post";
import axios from "axios";


export const fetchPosts = (limit: number = 8) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {_limit: limit}
            })
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: PostsActionTypes.FETCH_POSTS_ERROR, payload: 'Error'})
        }
    }
}