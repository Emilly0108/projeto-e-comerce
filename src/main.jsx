import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import ProdutoPage from './ProdutoPage.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="produto" element={<ProdutoPage/>}/>
    </Routes>
  </BrowserRouter>,
)

