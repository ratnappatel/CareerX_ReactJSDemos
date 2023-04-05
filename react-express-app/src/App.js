import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import CreateEmployee from './Components/create-employee';
import EditEmployee from './Components/edit-employee';
import EmployeeList from './Components/list-employee';


function App() {
  return (
    <Router>
    <div className="App">
  
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={'/create-student'} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={'/create-employee'} className="nav-link">
                  Create Employee
                </Link>
              </Nav>
              <Nav>
                <Link to={'/employee-list'} className="nav-link">
                  Employee List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={(props) => <CreateEmployee {...props} />}
                />
                <Route
                  exact
                  path="/create-employee"
                  //action={(props) => <CreateEmployee {...props} />}
                  element={<CreateEmployee/>}
                />
                <Route
                  exact
                  path="/edit-employee/:id"
                  //action={(props) => <EditEmployee {...props} />}
                  element={<EditEmployee/>}
                />
                <Route
                  exact
                  path="/employee-list"
                 // action={(props) => <EmployeeList {...props} />}
                 element={<EmployeeList/>}
                />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </Router>
 
  );
}

export default App;
