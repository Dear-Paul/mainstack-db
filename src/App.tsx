import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Revenue from './components/Revenue';
import NoContentPlaceholder from './components/NoContentPlaceholder';

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
            <NoContentPlaceholder title="Home" content="No Data available" />
          </Dashboard>
        }
      />
      <Route
        path="/analytics"
        element={
          <Dashboard>
            <NoContentPlaceholder
              title="Analytics"
              content="No Data available"
            />
          </Dashboard>
        }
      />
      <Route
        path="/crm"
        element={
          <Dashboard>
            <NoContentPlaceholder title="CRM" content="No Data available" />
          </Dashboard>
        }
      />
    </Routes>
  );
}
