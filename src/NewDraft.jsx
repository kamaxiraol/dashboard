import React from "react";

function NewDraft (){
    return (
        <div class="container">
          <div class="row">
              <div class="col">
                <div className="draft">
                    New Draft
                    <hr/>
                    <input type="text" placeholder="Brave New World"/><br/>
                    <input type="text" placeholder="Words can be like X-rays if you use them properly..." style={{height:"200px"}}/><br/>
                    <button className="btn btn-primary">Create Draft</button>
                </div>
              </div>
            <div class="col">
                Discussions
            </div>
            <div class="col">
                Top Referrals
                <hr/>
                GitHub 19,291
                <hr/>
                Stack Overflow 11,201
                <hr/>
                Hacker News 9,291
                <hr/>
                Reddit 8,281
                <hr/>
                The Next Web 7,128
                <hr/>
                Tech Crunch 6,218
                <hr/>
                YouTube 1,218
                <hr/>
                Adobe 827
                <hr/>
                <select>
                    <option>Last Week</option>
                    <option>Today</option>
                    <option>Last Month</option>
                    <option>Last Year</option>
                </select>
                Full Report 
                <br/>
                <br/>


            </div>
          </div>
        </div>
    );
}
export default NewDraft;