import Home from './Home/Home';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './TermsOfUse/TermsOfUse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App flex flex-col h-full box-border bg-[#f1f1f1]">
      <Router>
        <Routes>
          <Route exact path="/escapekar" element={<Home />} />
          <Route exact path="/escapekar/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/escapekar/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
