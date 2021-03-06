import { DefaultLayout } from './Features/Layouts/Components/DefaultLayout';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const TaskPage = React.lazy(() => import('./Pages/TaskPage'));
const CustomerPage = React.lazy(() => import('./Pages/CustomerPage'));

function App() {
  return (
    <DefaultLayout>
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="task/:id" element={<TaskPage />} />
          <Route path="customer" element={<CustomerPage />}></Route>
        </Routes>
      </Suspense>
    </DefaultLayout>
  );
}

export default App;
