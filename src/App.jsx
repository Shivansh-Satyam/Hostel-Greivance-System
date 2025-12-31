import './styles/layout.css'
import SideBar from './components/sidebar'
import Dashboard from './components/Dashboard';


function App() {
  
  return (
    <div className='app-container'>
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App
