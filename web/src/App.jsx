import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Header } from "./components/Header";
import Search from "./components/Search";
import Edit from "./components/Edit";
import Detail from "./components/Detail";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Search />} />
            <Route path="detail" element={<Detail />} />
            <Route path="edit" element={<Edit />} />

            {/* path="*"" matches anything, so acts as a 
                catch for things we haven't setup */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

function Layout() {
  return (
    <div>
      <div className="pb-2">
        <Header />
      </div>
      {/* <Outlet> renders current child route component */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>That page does not exists</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
