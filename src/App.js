import './App.css';
import Header from './comp/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './routes/Home/Home';
import Locations from './routes/Locations/Locations';
import Procedures from './routes/Procedures/Procedures';
import { ConfigProvider } from 'antd';
import Lapiplasty from './routes/Lapiplasty/Lapiplasty';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#002E5D'
        }
      }}
    >
    <div className="App">
      <Router>
        <Header />
        <div id="router-container">
          <div style={{ width: '100%', maxWidth: '960px'}} >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/locations' element={<Locations />} />
              <Route path='/procedures' element={<Procedures />} />
              <Route path='/lapiplasty' element={<Lapiplasty />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
    </ConfigProvider>
  );
}

export default App;
