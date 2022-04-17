import React, { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
    />
  );
};

export default UserPage;
