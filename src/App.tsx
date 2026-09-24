import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Services
import AIMachineLearning from './pages/services/AIMachineLearning';
import GenerativeAI from './pages/services/GenerativeAI';
import BlockchainWeb3 from './pages/services/BlockchainWeb3';
import CustomSoftware from './pages/services/CustomSoftware';

import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/services/generative-ai" element={<GenerativeAI />} />
          <Route path="/services/blockchain-web3" element={<BlockchainWeb3 />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
