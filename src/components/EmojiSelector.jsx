import React, {useState} from "react";
import Picker from 'emoji-picker-react'

function EmojiSelector(){

    const [chosenEmoji, setChosenEmoji] = useState(null);
  
     const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
     };


    return(
        <div className="container">
            <div className="row">
              <div className="col">
                 <h3> Emoji Picker</h3>
             </div>
            </div>
       
            <div className="row ">
                <div className="col">
                    {chosenEmoji ? (
                               <span className="text-center">Your Emoji: {chosenEmoji.emoji}</span>
                     ) : (
                            <span>No Emoji</span>
                     )}
                </div>
            </div>
    

            <div className="row">
                <div className="col">
                    <Picker onEmojiClick={onEmojiClick} />
                 </div>
            </div>
      </div>

    );
}

export default EmojiSelector;