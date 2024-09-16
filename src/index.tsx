import { createRoot } from 'react-dom/client';
import './index.css';

//import reportWebVitals, { sendToAnalytics } from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <App />
);
