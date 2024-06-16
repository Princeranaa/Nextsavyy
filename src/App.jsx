import React from 'react';
import Navbar from './Navbar';
import PropertyList from './PropertyList'
import ContactPage from './ContactPage';
import { Route,Routes } from 'react-router-dom';
import Filters from './Filters';
import Contactus from './Contactus';
import Pagination from './Pagination';
import Lastform from './Lastform';



function App() {
  return (
    <div className="App">
      <main className="container  ">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <Filters />
              <PropertyList />
            
              <Pagination/>
            </>
          } />
           
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/lastform" element={<Lastform/>} />
          <Route path="id" element={<Pagination/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        
      </main>
    </div>
  );
}
export default App;