import React from "react";

function Article({title , date  , preview}){
    return(
        <article>
            <h3>{title}</h3>
            <p>{preview}</p>
            <small>{date || "January 1, 1970"}</small>
        </article>
    )
}
export default Article;