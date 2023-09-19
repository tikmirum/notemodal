import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import './index.css';
import * as process from 'process';

export const NoteModal = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

if (!process.env.APP_ENV || process.env.APP_ENV === 'development') {
  const container = document.getElementById('root') || document.body;
  const root = ReactDOM.createRoot(container);

  root.render(<NoteModal />);
}
