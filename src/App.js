import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Profile from './routes/Profile';
import About from './routes/About';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './PrivateRoute';

export default function App() {
	return (
		<Router>
			<AuthState>
				<nav className='navbar'>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
						<li>
							<Link to='/dashboard'>Dashboard</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<div className='App'>
					<Switch>
						<Route exact path='/' component={Home} />
						<PrivateRoute exact path='/profile' component={Profile} />
						<Route exact path='/about' component={About} />
						<PrivateRoute exact path='/dashboard' component={Dashboard} />
					</Switch>
				</div>
			</AuthState>
		</Router>
	);
}
