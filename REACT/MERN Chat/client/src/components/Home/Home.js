import React, { useEffect, useState } from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { useHttp } from "../../cutomHooks/httpHooks"
import Preloader from '../Preloader/Preloader'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

function Home(props) {

    const data = sessionStorage.getItem('token');
    const myid = props.location.state
    const history = useHistory();
    if (data === null) {
        history.push("/");
    }
    const { request } = useHttp()

    const [user, setUser] = useState([])
    const [text, setText] = useState({ uText: '', id: null })
    const [msg, setMsg] = useState([])

    async function fetchMyAPI() {

        let data = await request('/api/auth/users', "GET")
        setUser(data.user)
    }
    useEffect(() => {
        fetchMyAPI();
    }, []);

    const enter = async e => {
        if (e.key === 'Enter') {
            setText({ ...text, uText: " " })
            socket.emit("getMessages",{myid, text })
            socket.on('serverMessages',data=> {
                const userMessage = {
                    _id:Date.now(),
                    message:data.text.uText,
                    myId:data.myid
                } 
                setMsg([...msg,userMessage])///??????
    
            });
            await request('/api/message/addMessage', "POST", { myid, text })

        }
    }
    const userClick = async id => {
        setText({ ...text, id })
        const userMessage = await request('/api/message/userMessage', "POST", { id, myid })  
        await setMsg(userMessage)
    }
    return (
        <div>
            {
                user.length !== 0 ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((user, index) =>
                                        <tr key={index} className='Users' onClick={() => userClick(user._id)}>
                                            <td  >{user.email}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div>
                            {
                                msg !== undefined ?
                                    <div className='msgDiv'>
                                        {msg.map(msg =>  
                                            <div key={msg._id}>
                                                {
                                                    msg.myId === myid ?
                                                    <p>{msg.message}</p> :
                                                    <p style={{ color: 'red', textAlign: 'right' }}>{msg.message}</p>
                                                }

                                            </div>
                                        )}
                                    </div>
                                    :
                                    (<Preloader />)
                            }
                        </div>
                        <div className='message'>
                            <hr />
                            <textarea
                                className='textarea'
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder="send letter..."
                                onChange={e => setText({ ...text, uText: e.target.value })}
                                onKeyPress={enter}
                                value={text.uText}
                            >
                            </textarea>
                        </div>
                    </div>
                )
                    : (<Preloader />)
            }
        </div>
    )
}

export default withRouter(Home)
