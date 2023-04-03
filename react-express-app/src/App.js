import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CreateEmployee from './Components/create-employee';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import EditEmployee from './Components/edit-employee';
import EmployeeList from './Components/list-employee';


function App() {
  return (
    <div className="App">
    <Router>
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
                  component={(props) => <CreateEmployee {...props} />}
                />
                <Route
                  exact
                  path="/create-employee"
                  component={(props) => <CreateEmployee {...props} />}
                />
                <Route
                  exact
                  path="/edit-employee/:id"
                  component={(props) => <EditEmployee {...props} />}
                />
                <Route
                  exact
                  path="/employee-list"
                  component={(props) => <EmployeeList {...props} />}
                />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  </div>
  );
}

export default App;
