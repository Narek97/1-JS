import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
            <NavLink to={"/users"}>Users</NavLink>
            <NavLink to={"/todos"}>Todos</NavLink>
        </div>
        <Routes>
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
        </Routes>
      </BrowserRouter>

      {/*<EventsExample />*/}
      {/*<Card*/}
      {/*    height={"200px"}*/}
      {/*    width={"200px"}*/}
      {/*    variant={CardVariant.outlined}*/}
      {/*    onClick={(num) => console.log("ok", num)}*/}
      {/*>*/}
      {/*    <button>Click</button>*/}
      {/*</Card>*/}
    </>
  );
};

export default App;
