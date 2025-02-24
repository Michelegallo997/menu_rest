import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from './components/Menu';

const App = () => {
  const [language, setLanguage] = useState('es');

  return (
    <Router>
      <Menu language={language} setLanguage={setLanguage} />
    </Router>
  );
};

export default App;