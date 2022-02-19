import React, { useState } from "react"
import avatar from "../../photo/avatar.jpg"
import s from "./users.module.css"
import { NavLink } from "react-router-dom";
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.css';



let Users = (props) => {

    let Props = props.props
    let pagesCount = Math.ceil(Props.totalUsersCount / Props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [activePage, setActivePage] = useState(1)


    let handleChange = (idx) => {
        props.onPageChanged(idx)
        setActivePage(idx)

    }

    return (
        <div>
            {/* <div>
                {
                    pages.map((p, index) => {
                        return <span
                            onClick={() => { props.onPageChanged(p) }}
                            key={index}
                            className={Props.currentPage === p ? s.selectPage : s.selectPage1}>
                            {p}
                        </span>
                    })
                }

            </div> */}
            <div>

                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={1}
                    totalItemsCount={pagesCount}
                    pageRangeDisplayed={20}
                    onChange={handleChange}
                />
            </div>

            {
                Props.users.map((data) =>
                    <div key={data.id}>
                        <span>
                            <div>
                                <NavLink to={`/Profile/${data.id}`}>
                                    <img className={s.userFhoto} src={data.photos.small != null ? data.photos.small : avatar} alt="" />
                                </NavLink>
                            </div>
                            <div>
                                {
                                    data.followed ?


                                        <button disabled={props.followingIsProgress.some((id) => id === data.id)} onClick={() => {
                                            // bazayi het hardumneri kody grum enq reduxStorum u funkchiayi tesqov kanchum
                                            props.unFollaw(data.id)

                                        }} >Unfollow</button> :

                                        <button disabled={props.followingIsProgress.some((id) => id === data.id)} onClick={() => {
                                            // bazayi het hardumneri kody grum enq reduxStorum u funkchiayi tesqov kanchum
                                            props.follaw(data.id)

                                        }}>Follow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{data.name}</div>
                                <div>{data.status}</div>
                            </span>
                            <span>
                                {/* <div>{data.location.city}</div> */}
                                {/* <div>{data.location.country}</div> */}
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users

