import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return(
    <div>
      <h2>Home page</h2>
    </div>
  )
};

const About = () => {
  return(
    <div>
      <h2>About page</h2>
    </div>
  )
};

// ({match}) --> Komponentti props
const Projects = ({ match }) => {
  return(
    <div>
      <h2>Projects page</h2>
      <ul>
        <li>
          <Link to={`${match.url}/project1`}>Project 1</Link>
        </li>
      </ul>
      <ul>
        <li>
        <Link to={`${match.url}/project2`}>Project 2</Link>
        </li>
      </ul>
      <ul>
        <li>
        <Link to={`${match.url}/project3`}>Project 3</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {' '}
            <h3>{match.params.name}</h3>
          </div>
        )}
      />
      <Route path={`${match.path}/:name`} render={(props) => <Project {...props} />}/>
    </div>
  )
};

const Project = ({ match }) => {
  return(
    <div>
      <h3>I am Project page {match.params.name}</h3>
    </div>
  )
};


const Nav = () => {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Kauttaviiva path="/" --> tarkoittaa tässä localhostista

const App = () => {
  return(
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
        </Switch>  
      </Router>
    </div>
  )
};


export default App;
