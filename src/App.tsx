// IMPORTS -
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// SCREENS -
import {
  Dashboard,
  Products,
  Customers,
  Transaction,
} from "./utils/lazyRoutes";
import { Suspense } from "react";
import Loader from "./components/Loader";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;


// NOTES:
// JAB TAK YE COMPONENTS LOAD NAE HOTE SARAY TAB TAK HUM LOADER DEKHA SAKTE AND USKE LIYE WE CAN KEEP THESE ROUTES IN SUSPENSE 
// COMPONENTS ARE DYNAMICALLY IMPORTED USING LAZY (CHUNKS MAIN COMPONENTS BHEJTE HAI AND NOT IN BUNDLE, ISAY CODE SPLITTING BHI KHETE HAI. HAR PAGE KA COMPONENT TAB LOAD HO JAB WO TRIGGER HO)
