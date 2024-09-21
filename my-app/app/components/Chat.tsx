import {useChat} from 'ai/react';
import {useEffect, useRef} from 'react';
import Image from 'next/image';
import React from 'react';
const Chat=()=>{
    const {messages, input, handleInputChange, handleSubmit }=useChat({api:'/api/openai',});
    const renderResponse =()=>{
        return messages.map((m,index))=>(
            <div ket={m.id} className={`chat-line `}

        );
    };

    return (
        <div ref={chatContainer} className="chat">
            {renderResponse()}
            <form onSubmit={handleSubmit} className="mainForm">
                <input name="input-field" type="text" placeholder="Ask me anything" onChange={handleInputChange} value={input}
                <button type="submit" className="mainButton"/>
            </form>
        </div>
    );
}
export default Chat;