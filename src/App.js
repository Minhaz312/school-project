import './globals.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Notice from './pages/Notice'
import Photos from './pages/Photos'
import Videos from './pages/Videos'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import StudentProfile from './pages/studentportal/StudentProfile'
import StudentResult from './pages/studentportal/StudentResult'
import StudentBillling from './pages/studentportal/StudentBillling'
import StudentAttandance from './pages/studentportal/StudentAttandance'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/information/notice" component={Notice} />
      <Route exact path="/information/celendar" component={AboutUs} />
      <Route exact path="/gallery/photos" component={Photos} />
      <Route exact path="/gallery/videos" component={Videos} />
      <Route exact path="/admission" component={Admission} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="/login" component={Login} />

      {/* Portal Private Routes */}

      {/* Student portal routes */}
      <Route exact path="/portal/student/profile" component={StudentProfile} />
      <Route
        exact
        path="/portal/student/attendance"
        component={StudentAttandance}
      />
      <Route exact path="/portal/student/result" component={StudentResult} />
      <Route exact path="/portal/student/billing" component={StudentBillling} />

      {/* Teacher portal routes */}
      {/* <Route exact path="/portal/teacher/profile" component={TeacherProfile} /> */}
    </Router>
  )
}

export default App
