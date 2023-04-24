export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[];
}

export interface PostState {
    posts: any[];
    loading: boolean;
    error: null | string;
}

interface Post {
    id: number,
    image: string,
    title: string,
}

export type PostType = Post

export type PostAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction