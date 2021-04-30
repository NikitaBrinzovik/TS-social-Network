export type MessagesType = {
    name: string
    message: string
    id: number
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    messageForNewMessage: string
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type PostsType = {
    message: string
    likes: number
    id: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}

export type SidebarType = {}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}


export let state: RootStateType = {

    profilePage: {
        messageForNewPost: "",
        posts: [
            {message: 'Hey-Hey', likes: 3, id: 1},
            {message: 'Hey-Hoy', likes: 5, id: 2}
        ]
    },
    dialogsPage: {
        messageForNewMessage: "",
        messages: [
            {name: "Nikita", message: "Hey", id: 1},
            {name: "Jora", message: "Hoy", id: 2},
            {name: "Polina", message: "Lets", id: 3},
            {name: "Ivan", message: "go! Yes, lets go to kill a good people, comrrrrade!", id: 4},
            {name: "Roma", message: "Oh no!", id: 5},
            {name: "Volodzzzia", message: "Oh Yes!", id: 6},
            {name: "Ilya", message: "Oh Yes!", id: 7},],
        dialogs: [
            {name: "Nikita", id: 1},
            {name: "Jora", id: 2},
            {name: "Polina", id: 3},
            {name: "Ivan", id: 4},
            {name: "Roma", id: 5},
            {name: "Volodzzzia", id: 6},
            {name: "Ilya", id: 7},
        ],
    },
    sidebar: {},
}


export const addPost = (postText: string) => {
    //alert(newPostElement.current?.value);
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postText,
        likes: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.messageForNewPost = ('');
    rerenderTree(state)
}
export const changeNewText = (newText: string) => {
    debugger
    state.profilePage.messageForNewPost = newText;
    rerenderTree(state)
}

export const addMessage = (messageText: string) => {

    const newMessage: MessagesType = {
        id: new Date().getTime(),
        message: messageText,
        name: "New",
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.messageForNewMessage = '';
    rerenderTree(state)
}
export const newMessage = (newText: string) => {
    state.dialogsPage.messageForNewMessage = newText;
    rerenderTree(state)
}

export let rerenderTree = (state: RootStateType) => {
    console.log('jjjj')
}

export const  subscriber = (observer: (state: RootStateType)=> void) => {
    rerenderTree = observer;
}


