import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as PostActionCreators from '../store/action-creator/post'

export const useAction = () => {
    const dispatch: any = useDispatch()
    return bindActionCreators(PostActionCreators, dispatch)
}