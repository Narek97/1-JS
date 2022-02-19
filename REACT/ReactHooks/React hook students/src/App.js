import React, {useState} from 'react';
import NavBar from "./components/NavBar/navBar";
import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import AddStudents from "./components/AddStudents/addStudent";
import AddGroup from "./components/AddGroup/addGroup";
import {Home} from "./components/Home/home";
import MyContext from "./context/context";
import {SeeStudents} from "./components/SeeStudents/seeStudents";

function App() {


    const [group, setGroup] = useState([
        {
            name: 'group1',
            count: 5,
            students: [
                {name: 'a1', surname: 'aa1'},
                {name: 'a2', surname: 'aa2'},
            ]
        },
        {
            name: 'group2',
            count: 5,
            students: [
                {name: 'a1', surname: 'aa1'},
                {name: 'a2', surname: 'aa2'},
            ]
        },

    ])

    const [students, setStudents] = useState([
        {id: 5, name: 'c1', surname: 'cc1'},
        // {id:4,name: 'c2', surname: 'ccx1'},
        // {id:7,name: 'c3', surname: 'cczzxd1'},
    ])

    const [newGroup, setNewGroup] = useState([{
        value: '',
        error:'',
        count: 0,
        students: [],
        placeholder: 'Group name',
    }])

    const changeUsers = (e) => {
        let {value} = e.target
        let newArray = [...newGroup]
        newArray[0].value = value
        setNewGroup(newArray)
    }

    const addGroup = (e) => {

        let k = group.filter(g => {
            if(g.name === e[0].value){
                return true
            }
            return null
        })
        if( k.length===0){
            setGroup([...group, {
                name: e[0].value,
                count: e[0].count,
                students: e[0].students,
            }])
            setNewGroup([{
                value: '',
                error: '',
                count: 0,
                students: [],
                placeholder: 'Group name',
            }])
        }
        else{
            setNewGroup([{
                value: '',
                error: 'Such name already exists',
                count: 0,
                students: [],
                placeholder: 'Group name',
            }])
        }




    }

    const addNewStudentInGroup = (e, name) => {

        if (name.selectValue === 'disabled') {
            setStudents([...students, {id: new Date(), name: e[0], surname: e[1]}])
        } else {
            group.map((data, idx) => {
                if (data.name === name.selectValue) {
                    let newArray = [...group]
                    newArray[idx].students.push({
                        name: e[0].value,
                        surname: e[1].value,
                    })
                    newArray[idx].count++
                    setGroup(newArray)
                }
                return null
            })
        }
    }

    const addStudentNewGroup = (e, s) => {
        group.map((g, idx) => {
            if (g.name === e.name) {
                let newArray = [...group]
                newArray[idx].students.push({
                    name: s.name,
                    surname: s.surname,
                })
                newArray[idx].count++
                setGroup(newArray)
                let sfilter = students.filter(e => e.id !== s.id)
                setStudents(sfilter)
            }
            return null
        })


    }



    return (
        <div className="App">
            <MyContext.Provider
                value={{group, newGroup, changeUsers, addGroup, addNewStudentInGroup, students, addStudentNewGroup}}>

                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/addStudent" component={AddStudents}/>
                        <Route exact path="/addGroup" component={AddGroup}/>
                        <Route exact path="/group/:id?" component={SeeStudents}/>
                        <Redirect to="/home"/>
                    </Switch>

                </Router>

            </MyContext.Provider>
        </div>
    );
}

export default App;
