
import React from "react";
import Chat from './Chat';

import "./Chats.css";

function Chats(){
    return <div className="chats">
        <Chat 
            name="Mark"
            message="hey! there i'm using Tinder"
            timestamp="34seconds ago"
            profilePic="https://images.unsplash.com/photo-1539664283826-8747535c24a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />

        <Chat 
            name="Sonny"
            message="hey! there i'm using Tinder"
            timestamp="7 seconds ago"
            profilePic="https://images.unsplash.com/photo-1594045073084-120ef0d151bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />

        <Chat 
            name="Sandara"
            message="hey! there i'm using Tinder"
            timestamp="39 seconds ago"
            profilePic="https://images.unsplash.com/photo-1597265870741-c672c939ca0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
        />

        <Chat 
            name="Sarah"
            message="hey! there i'm using Tinder"
            timestamp="55 seconds ago"
            profilePic="https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
    </div>;
}

export default Chats;