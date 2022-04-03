import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";
import { StickyTable } from "./components/SticktTable";

function App() {
  return (
    <div>
      {/* <BasicTable /> */}
      {/*<SortingTable/>*/}
      <FilteringTable />
      {/* <PaginationTable /> */}
      {/*<RowSelection/>*/}
      {/* <StickyTable/> */}
    </div>
  );
}

export default App;
