import { createRoot } from 'react-dom/client';
//import reportWebVitals, { sendToAnalytics } from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
// after bootstrap so the theme overrides win
import './index.css';
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <App />
);
