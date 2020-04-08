import React from 'react';
import a from "./Qualities.module.css";

let arrQualities = [
    {quality: "Умный"},
    {quality: "Красивый"},
    {quality: "Богатый"}
];

function Qualities(props) {
    let myQualities = arrQualities.map((el, i) => (i === 1) ?
        <div className={a.qualities} key={i}> - {el.quality} </div> :
        <div className={a.NewQualities} key={i}> - {el.quality} </div>
    );

    return (
        <div className={a.blockQualities}>
            {myQualities}
        </div>
    );
}

export default Qualities;