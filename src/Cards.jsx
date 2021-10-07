import React from "react";
import CardData from "./CardData";
 
function Cards () {
    return (
        <>
        <div className="main_card">
        <div className="card" >
            <div className="card-body">
                <p className="card-title">POSTS</p>
                <h1 className="card-subtitle mb-2 text-muted">2,190</h1>
                <p>4.7%</p>
            </div>
        </div>
        <div className="card" >
            <div className="card-body">
                <p className="card-title">PAGES</p>
                <h1 className="card-subtitle mb-2 text-muted">182</h1>
                <p>12.4</p>
            </div>
        </div>
        <div className="card" >
            <div className="card-body">
                <p className="card-title">COMMENTS</p>
                <h1 className="card-subtitle mb-2 text-muted">8,147</h1>
                <p>3.8%</p>
            </div>
        </div>
        <div className="card" >
            <div className="card-body">
                <p className="card-title">USERS</p>
                <h1 className="card-subtitle mb-2 text-muted">2,413</h1>
                <p>4.7%</p>
            </div>
        </div>
        <div className="card" >
            <div className="card-body">
                <p className="card-title">SUBSCRIBERS</p>
                <h1 className="card-subtitle mb-2 text-muted">17,281</h1>
                <p>2.4%</p>
            </div>
        </div>
        </div>
        </>
    );
};
export default Cards;