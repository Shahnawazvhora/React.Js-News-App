import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NewsApi from './Components/NewsApi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewsApi />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
