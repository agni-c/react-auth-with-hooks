import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, SET_LOADING } from '../types';
import { sleep } from '../../utils/mock';

const AuthState = props => {
	const initialState = {
		isAuthenticated: false,
		loading: true,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const setLoading = state => {
		dispatch({
			type: SET_LOADING,
			payload: state,
		});
	};

	// Register User
	const register = async formData => {
		setLoading(true);
		await sleep(2000);
		dispatch({
			type: REGISTER_SUCCESS,
		});
	};
	//Log In
	const login = async formData => {
		setLoading(true);
		await sleep(2000);

		dispatch({
			type: LOGIN_SUCCESS,
		});
	};

	useEffect(() => {
		sleep(2000).then(() => setLoading(false));
	}, []);

	//Log Out
	const logout = () => {
		setLoading(true);
		sleep(2000).then(() => dispatch({ type: LOGOUT }));
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				register,
				login,
				logout,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
