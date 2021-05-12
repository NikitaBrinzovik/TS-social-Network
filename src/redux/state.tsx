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

export type StoreType = {
    _state: RootStateType
    addPost: (postText: string) => void
    changeNewText: (newText: string) => void
    addMessage: (messageText: string) => void
    newMessage: (newText: string) => void
    rerenderTree: (state: RootStateType) => void
    subscriber: (observer: (state: RootStateType)=> void) => void
    getState: () => RootStateType
    dispatch:(action: AddPostActionType | ChangeNewTextActionType |AddMessageActionType | NewMessageActionType) => void
}

export type AddPostActionType = {
    type:"ADD-POST"
    postText: string
}
export type ChangeNewTextActionType = {
    type:"CHANGE-NEW-TEXT"
    newText: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    messageText: string
}
export type NewMessageActionType={
    type: "NEW-MESSAGE"
    newText: string
}

export let store: StoreType = {
    _state: {

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
    },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this.rerenderTree = observer;
    },

    addPost(postText: string) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = ('');
        this.rerenderTree(store._state)
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this.rerenderTree(store._state)
    },
    addMessage(messageText: string) {
        const newMessage: MessagesType = {
            id: new Date().getTime(),
            message: messageText,
            name: "New",
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.messageForNewMessage = '';
        this.rerenderTree(store._state)
    },
    newMessage(newText: string) {
        this._state.dialogsPage.messageForNewMessage = newText;
        this.rerenderTree(store._state)
    },

    rerenderTree(state: RootStateType) {
        console.log('jjjj')
    },

    dispatch(action) {
        if(action.type === "ADD-POST"){
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = ('');
            this.rerenderTree(store._state)
        }
        else if(action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText;
            this.rerenderTree(store._state)
        }
        else if(action.type === "ADD-MESSAGE") {
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.messageText,
                name: "New",
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.messageForNewMessage = '';
            this.rerenderTree(store._state)
        }
        else if(action.type === "NEW-MESSAGE") {
            this._state.dialogsPage.messageForNewMessage = action.newText;
            this.rerenderTree(store._state)
        }
    }

}















