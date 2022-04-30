import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { GET_ALL_USERS, GET_CURRENT_USERS } from "./query/user";
import { CREATE_USER } from "./mutations/user";

const ApolloPage = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {
    // pollInterval: 500,
  });
  const {
    data: onUser,
    loading: onUserLoading,
    error: onUserError,
  } = useQuery(GET_CURRENT_USERS, {
    // pollInterval: 500,
    variables: {
      id: 1,
    },
  });

  console.log(onUser, "onUser");

  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    age: 0,
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          id: Date.now(),
          username: userData.username,
          age: +userData.age,
        },
      },
    })
      .then(({ data }) => {
        // setUsers([...users, data.createUser]);
        setUserData({
          username: "",
          age: 0,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = (e) => {
    e.preventDefault();
    refetch();
  };
  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      <form action="">
        <input
          type="text"
          name={"username"}
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="number"
          name={"age"}
          value={userData.age}
          onChange={handleChange}
        />
        <div>
          <button onClick={(e) => addUser(e)}>Create</button>
          <button onClick={(e) => getUsers(e)}>Get</button>
        </div>
      </form>
      <div>
        {users.map((user) => (
          <div className={"user"} key={user.id}>
            {user.id}
            {user.username}
            {user.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApolloPage;
