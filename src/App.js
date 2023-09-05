

import Quiz from "./pages/quiz";
import Home from "./pages/home"
import Results from "./pages/results";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/results/:score" element={<Results/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
