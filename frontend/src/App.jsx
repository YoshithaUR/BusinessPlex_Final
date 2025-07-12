import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import Home from './view/Home';
import About from './view/About';
import Qualification from './view/Qualification';
import Blog from './view/Blog';
import Policies from './view/Policies';
import Gallery from './view/Gallery';
import StudentLogin from './view/StudentLogin';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='qualifications' element={<Qualification />} />
        <Route path='blog' element={<Blog />} />
        <Route path='policies' element={<Policies />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='login' element={<StudentLogin />} />
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
