import React, { useState} from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen(){

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Mark",
            image: "https://images.unsplash.com/photo-1539664283826-8747535c24a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            message: "what's up ❤"
        },
        {
            message: "Hi, how's you?"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }


    return (
        <div className="chatScreen" >
            <p className="chatScreen__timeStamp"> 
            YOU MATCHED WITH MARK ON 10/08/20 </p>
            {messages.map((message) => 
            (
                message.name ? 
                (
                    <div className="chatScreen__message">
                    <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">
                        {message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                         <p className="chatScreen__textUser">
                         {message.message}</p>
                        </div>
                    )
            )
            )}

                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    placeholder="type a messgae..."
                    type="text"
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    );
}

export default ChatScreen;