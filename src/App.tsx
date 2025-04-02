import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Revenue from './components/Revenue';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard>
            <Revenue />
          </Dashboard>
        }
      />
      <Route
        path="/revenue"
        element={
          <Dashboard>
            <Revenue />
          </Dashboard>
        }
      />
      <Route
        path="/home"
        element={
          <Dashboard>
            <div>Home Page</div>
          </Dashboard>
        }
      />
      <Route
        path="/analytics"
        element={
          <Dashboard>
            <div>Analytics Page</div>
          </Dashboard>
        }
      />
      <Route
        path="/crm"
        element={
          <Dashboard>
            <div>CRM Page</div>
          </Dashboard>
        }
      />
      <Route
        path="/apps"
        element={
          <Dashboard>
            <div>Apps Page</div>
          </Dashboard>
        }
      />
    </Routes>
  );
}
