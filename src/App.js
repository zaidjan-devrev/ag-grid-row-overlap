import logo from './logo.svg';
import './App.css';
import {Table} from './components/table'
import columnDefs from './components/column-defs'
import data1 from './data/table-rows-1'

function App() {
  return (
      <div className="App">
        dsf
        <Table data={data1} columnDefs={columnDefs}/>
      </div>
  );
}

export default App;
