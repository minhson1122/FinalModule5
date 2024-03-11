import logo from './logo.svg';
import './App.css';
import ListFlags from "./model/ListFlags";
import SearchComponent from "./model/Search";

function App() {
    const countries = [


    ];
  return (
   <>
       <h1>Country Search</h1>
       {/*<SearchComponent countries={countries}></SearchComponent>*/}
       <ListFlags></ListFlags>

   </>
  );
}

export default App;
