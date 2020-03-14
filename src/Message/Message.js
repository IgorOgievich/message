import React from 'react';
import a from "./Message.module.css";


function Message() {
  return (
      <div className={a.myMessage}>
          <div className={a.borderMessage}>
              <div className={a.name}>
                 Igor Ogievich
              </div>
              <div className={a.before}>

              </div>
              <div className={a.after}>

              </div>
              <div className={a.text}>
                  Hello, how are you?
              </div>
              <div className={a.time}>
                  12:20 AM
              </div>
          </div>
      </div>

  );
}

export default Message;
