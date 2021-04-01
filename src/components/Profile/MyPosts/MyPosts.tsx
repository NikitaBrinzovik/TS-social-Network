import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = {}

export function MyPosts(props: MyPostsPropsType) {
    // let postsElements =
    //     props.postsData.map(p => <Post message={p.message} numb={p.numb} id={p.id}/>);
    //
    // let newPostEl= React.createRef()
    //
    // let addPost = () => {
    //
    //     // let text= newPostEl.current.value;
    //     // props.addPost(text);
    //     // props.updateNewPostText('');
    //
    //     props.dispatch({ type: 'ADD-POST'})
    //
    // }
    //
    // let onPostChange = () => {
    //
    //     let text= newPostEl.current.value;
    //     props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText:text});
    // }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <Post message={'Hey-Hey'} />
            <Post message={'Hey-Hoy'} />
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