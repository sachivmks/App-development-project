import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loginpage from './Components/Loginpage';
import Signuppage from './Components/Signuppage';
import Homepage from './Components/Homepage';




function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='login' element={<Loginpage/>}/>
      
      
      <Route path='login/signup' element={<Signuppage/>}/>
      
      <Route path='signup' element={<Signuppage/>}/>        
       
     </Routes>
    
    </div>
  );
}

export default App;
