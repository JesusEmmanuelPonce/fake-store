import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const StoreLayout = lazy(() => import('./pages/StoreLayout'));
const StoreDetail = lazy(() => import('./pages/StoreDetail'));
const Store       = lazy(() => import('./pages/Store'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/" element={<StoreLayout />}>
            <Route path="/" element={<Store /> } /> 
            <Route path=":id" element={<StoreDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
