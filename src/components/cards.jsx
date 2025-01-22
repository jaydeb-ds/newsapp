
import React from "react";

const Cards=({data})=> {

    console.log("cards",data)

    return (<div>
            {data.map((item,index)=>{

                return(
                <div>
                    <div>
                        <h2 key={index}>{item.title}</h2>
                    <img src={item.urlToImage} style={{height:"200px",width:"300px"}}/>
                    </div>
                    <div>
                        <p>{item.description}</p>
                    </div>
                    
                </div>
                )

            })}
    </div>)
}
export default Cards;