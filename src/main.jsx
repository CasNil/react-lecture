import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./app";

import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById('root')).render(<App />);
