import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  HistoryPage from './Pages/History/History';
import  Reward from './Pages/Reward/Reward';
import Discount from './Pages/My_reward/Discount';
import Ticket from './Pages/My_reward/Ticket';
import Rewardd from './Pages/My_reward/Reward';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Reward />} />
    <Route path="/history" element={<HistoryPage />} />
    <Route path="/My reward" element={<Discount />} />
    <Route path="/ticket" element={<Ticket />} />
    <Route path="/Rewardd" element={<Rewardd />} />
    
  </Routes>
);

export default AppRoutes;