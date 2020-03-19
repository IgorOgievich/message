import React from 'react';
import a from "./Qualities.module.css";

let arrQualities = [
    {quality: "Умный"},
    {quality: "Красивый"},
    {quality: "Богатый"}
];
function Qualities(props) {
    let myQualities = arrQualities.map((el) => <div className={a.qualities}> - {el.quality} </div>);

    return (
        <div className={a.blockQualities}>
            {myQualities}
        </div>
    );
}

export default Qualities;