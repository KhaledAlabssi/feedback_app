import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./pages/About";
import AboutIcon from "./components/AboutIcon";
import {FeedbackProvider} from './context/FeedbackContext' 

function App() {
  
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
        <Route exact path='/' element={
          <>
            <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
          </>
        }>
        
        </Route>
        <Route path='/about'element={<About />} />
        </Routes>
        {/* <Card>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </Card> */}
        <AboutIcon />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
