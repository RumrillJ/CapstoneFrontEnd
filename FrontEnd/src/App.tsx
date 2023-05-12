
import Login from './Login';
import Home from './Home';
import CreateProject from './CreateProject';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
            <Route path = "/" element = {<Login />} />
            <Route path = "/Home" element = {<Home />} />
            <Route path = "/CreateProject" element = {<CreateProject />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App;
