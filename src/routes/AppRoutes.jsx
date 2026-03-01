import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from '../components/layout/Layout';
import WhoWeAre from '../pages/WhoWeAre/WhoWeAre';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<WhoWeAre/>} />
        <Route path="solution" element={<div>Who We Are</div>} />
        </Route>
    </Routes>
  )
}

export default AppRoutes