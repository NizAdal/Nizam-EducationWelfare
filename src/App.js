import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/screen/Home";
import Posts from './components/screen/Posts';
import Detail from './components/screen/Detail';
import GetNotes from './components/screen/GetNotes';
import PostDetails from './components/screen/PostDetails';
import Card from './components/screen/Card';
import Dashboard from './components/screen/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/footer/Footer';
import { checkAuthStatus } from './redux/authSlice';
import Be from './components/screen/Be';
import Upload  from './components/screen/Upload';
import Notes from './components/Notes';
import { useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);
 const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <Router>
        <div className="fixed top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <div className={`w-full overflow-hidden flex flex-col min-h-screen ${darkMode ? "bg-black" : "bg-amber-100"}`}>
          <div className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/memberdetail" element={<Detail />} />
              <Route path="/getnotes" element={<GetNotes setFormSubmitted={setFormSubmitted} />} />
              <Route path="/postdetails" element={<PostDetails />} />
              <Route path="/bemember" element={<Be />} />
              <Route path="/uploadnotes" element={<Upload />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/login" element={<Login />} />
              <Route path='/card' element={formSubmitted ? <Card /> : <Navigate to="/getnotes" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
