import React from 'react';


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
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type PostsType = {
    message: string
    numb: number
    id: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}

export type SidebarType = {}

export type stateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export let state:stateType = {
    dialogsPage: {
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
    profilePage: {
        posts: [
            {message: 'Hey-Hey', numb: 3, id: 1},
            {message: 'Hey-Hoy', numb: 5, id: 2}
        ]
    },
    sidebar: {},
}



// export const messageData: Array<MessDataType> = [
//     {name: "Nikita", message: "Hey", id: 1},
//     {name: "Jora", message: "Hoy", id: 2},
//     {name: "Polina", message: "Lets", id: 3},
//     {name: "Ivan", message: "go! Yes, lets go to kill a good people, comrrrrade!", id: 4},
//     {name: "Roma", message: "Oh no!", id: 5},
//     {name: "Volodzzzia", message: "Oh Yes!", id: 6},
//     {name: "Ilya", message: "Oh Yes!", id: 7},
// ];
// export const dialogData: Array<DialogDataType> = [
//     //dialogs: Array<DialogsType> = [
//     {name: "Nikita", id: 1},
//     {name: "Jora", id: 2},
//     {name: "Polina", id: 3},
//     {name: "Ivan", id: 4},
//     {name: "Roma", id: 5},
//     {name: "Volodzzzia", id: 6},
//     {name: "Ilya", id: 7},
//     //],
// ]
// export let postData = [
//     {message: 'Hey-Hey', numb: 3, id: 1},
//     {message: 'Hey-Hoy', numb: 5, id: 2}
// ]