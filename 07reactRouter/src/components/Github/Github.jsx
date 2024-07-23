import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/apoorvaww')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data); 
        })
    }, [])
    return(
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-2xl">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width = {300} />
        </div>
        
    )
}


export default Github