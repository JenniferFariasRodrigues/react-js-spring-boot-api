import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Books from "./pages/Books";
import NewBook from "./pages/NewBook";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/new/:bookId" element={<NewBook />} />
      </Routes>
    </BrowserRouter>
  );
}

// import React from "react";
// import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
// import Login from "./pages/Login";
// import Books from "./pages/Books";
// import NewBook from "./pages/NewBook";

// // Renomeie o componente para evitar conflito com 'Routes' do 'react-router-dom'
// export default function Routes() {
//   return (
//     <BrowserRouter>
//       <RouterRoutes>
//         <Route path="/" element={<Login />} />
//         <Route path="/books" element={<Books />} />
//         <Route path="/book/new/:bookId" element={<NewBook />} />
//       </RouterRoutes>
//     </BrowserRouter>
//   );
// }
