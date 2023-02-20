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
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/join" element={<Join />} />
          <Route exact path="/gc" element={<Chat page="gc" />} />
          <Route exact path="/pc" element={<Chat page="pc" />} />
          <Route exact path="/search" element={<Chat page="search" />} />
          <Route exact path="/profile" element={<Chat page="profile" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
