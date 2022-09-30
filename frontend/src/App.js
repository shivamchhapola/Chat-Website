import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage/Homepage';
import Join from './Join/Join';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
