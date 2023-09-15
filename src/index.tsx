import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import './index.css';

const container = document.getElementById('root') || document.body;
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
