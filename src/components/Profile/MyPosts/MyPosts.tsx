import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    //profilePage: Array<ProfilePageType>
    posts: Array<PostsType>
}

export function MyPosts(props:MyPostsPropsType) {

    let post = props.posts.map(p => <Post message={p.message} id={p.id} numb={p.numb} />)
    return (
        <div className={s.postBlock}>

            <h3>My Posts</h3>
            {post}
            <div>
                <h4>new post: </h4>
                {/*<div>*/}
                <textarea></textarea>
                {/*    <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>*/}
                {/*</div>*/}
                {/*<button onClick={addPost}>send post</button>*/}
                <button>add post</button>
                <button>remove post</button>
            </div>
            {/*<div className={s.posts}>*/}
            {/*    {postsElements}*/}
            {/*</div>*/}
        </div>
    );
}