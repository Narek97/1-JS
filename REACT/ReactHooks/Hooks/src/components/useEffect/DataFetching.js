import React, {useState, useEffect} from "react";
import axios from "axios"

export default () => {

    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const hundeleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={hundeleClick}>Fetch Posts</button>
            <div>{posts.title}</div>

            {/*<ul>*/}
            {/*    {*/}
            {/*        posts.map(post => <li key={post.id}>{post.title}</li>)*/}
            {/*    }*/}
            {/*</ul>*/}

        </div>
    )
}
