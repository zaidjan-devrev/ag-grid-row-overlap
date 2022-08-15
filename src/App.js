import logo from './logo.svg';
import './App.css';
import {Table} from './components/table'
import { useEffect, useState } from 'react';
import {columnDefs, page1, page2, page3, page10, page4, page5, page6, page7, page8, page9, defaultColDef} from './data/example'

const allPages ={
  page1, page2, page3, page10, page4, page5, page6, page7, page8, page9
}

const timePromise = (time) =>
  new Promise((resovle) => {
    setTimeout(() => {
      resovle();
    }, time);
  });


const dataSwitcher = async (setData) => {
  for (let i = 0; i < 10000; i++) {
    for (let i = 0; i < 10; i++) {
      await timePromise(0)
      setData(allPages['page' + (i+1)])
    }
  }
}





function App() {
  const [data, setData] = useState()
  useEffect(() => {
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //   .then((response) => response.json())
    //   .then((data) =>{
    //     console.log({data})
    //     for (let i = 0; i < data.length; i += 100) {
    //       console.log(`start index ${i}`, data.slice(i, i + 100))
    //     }
    //   });
    dataSwitcher(setData)

  }, [])
  return (
      <div className="App">
        <Table data={data} columnDefs={columnDefs} columnDefaults={defaultColDef}/>
      </div>
  );
}

export default App;
