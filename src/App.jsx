import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MemberOne from './MemberOne';
import MemberTwo from './MemberTwo';
import MemberThree from './MemberThree';
import WeddingInvite from './WeddingInvite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member-one" element={<MemberOne />} />
        <Route path="/member-two" element={<MemberTwo />} />
        <Route path="/member-three" element={<MemberThree />} />
        <Route path="/wedding" element={<WeddingInvite />} />
      </Routes>
    </Router>
  );
}

export default App;