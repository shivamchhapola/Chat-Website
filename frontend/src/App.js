import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Join from './pages/Join';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/join" element={<Join />} />
          <Route path="/gc" element={<Chat page="gc" />} />
          <Route path="/pc" element={<Chat page="pc" />} />
          <Route path="/search" element={<Chat page="search" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
