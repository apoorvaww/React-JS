import React , {useState, useEffect} from "react";
import Postcard from "../components/index";
import { service } from "../appwrite/config";

function AllPosts() {
    const[posts, setPosts] = useState([])
    useEffect( () => {}, [])
    service.listPosts([]).then((posts) => setPosts(posts)) 
    return(
        <div></div>
    )
}

export default AllPosts