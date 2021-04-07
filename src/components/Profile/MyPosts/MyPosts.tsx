import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    message: string
    numb: number
    id: number
}

export function MyPosts() {
    // let postsElements =
    //     props.postsData.map(p => <Post message={p.message} numb={p.numb} id={p.id}/>);
    //
    // let newPostEl= React.createRef()
    //
    // let addPost = () => {
    //     // let text= newPostEl.current.value;
    //     // props.addPost(text);
    //     // props.updateNewPostText('');
    //     props.dispatch({ type: 'ADD-POST'})
    // }
    // let onPostChange = () => {
    //     let text= newPostEl.current.value;
    //     props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText:text});
    // }

    let postData = [
        {message:'Hey-Hey', numb:3, id:1},
        {message:'Hey-Hoy', numb:5, id:2}
    ]

    let post = postData.map(p => <Post message={p.message} id={p.id} numb={p.numb} />)
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