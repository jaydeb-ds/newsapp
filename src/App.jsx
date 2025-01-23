import './App.css';
import Loader from './components/loader';
import Navbar from './components/nav';
import Newsapp from './components/newsapp';
function App() {

  
  return(
    <div>
      <Newsapp/>
      {/* <h1>{process.env.REACT_APP_SECRET_KEY}</h1> */}

      {/* <Navbar/> */}
      {/* <Loader/> */}
    </div>
  )
}

export default App;
