import LoginForm from "./cmponents/LoginForm";
import { FC, useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";

const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const res = await UserService.fetchUsers();
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>loading...</div>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
        <button onClick={getUsers}>Get users</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{store.isAuth ? "user is logged in" : "Authorization"}</h1>
      <h1>{store.user.isActivated ? "activated" : "no activated"}</h1>
      <button onClick={() => store.logOut()}>Logout</button>
      <div>
        <button onClick={getUsers}>Get users</button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.email}>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default observer(App);
