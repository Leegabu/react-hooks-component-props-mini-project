import React from "react";
import Article from "./Article";

const lists =[
    {id:1, title:"Components 101", date:"December 15, 2020", preview:"Setting up the building blocks of your site", minutes:5},
    {id:2, title:"React Data Flow", date:"December 11, 2020", preview:"Passing props is never passé", minutes:15},
    {id:3, title:"Function vs Class Components", date:"", preview:"React, meet OOJS", minutes:47}
]

function ArticleList({}){
    return(
        <main>
            {lists.map(list => (
                <Article key={list.id} id={list.id} title={list.title} date={list.date} preview={list.preview} minutes={list.minutes} />
            ))}
        </main>
    )
}
export default ArticleList;