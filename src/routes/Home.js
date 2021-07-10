import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { LOGOUT } from '../context/types';

const Home = () => {
	const authContext = useContext(AuthContext);
	const { login, isAuthenticated, logout, loading } = authContext;
	console.log({ isAuthenticated });
	return (
		<div>
			<h1>Home</h1>
			<h2>If not logged in cant access, Profile & Dashboard</h2>

			{!isAuthenticated ? (
				<button onClick={login}>Login</button>
			) : (
				<button onClick={logout}>Logout</button>
			)}
			{loading ? <p>Loading...</p> : null}
		</div>
	);
};

export default Home;
