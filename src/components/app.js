import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretDoc from './secret_doc';
import OperativeList from './operative_list';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/secret-doc" component={auth(SecretDoc)} />
            <Route path="/operative-list" component={OperativeList} />
        </div>
    </div>
);

export default App;
