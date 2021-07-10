import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, SET_LOADING } from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			// localStorage.setItem('token', action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false,
			};
		//Both cases has same argument
		case LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
			};

		default:
			return state;
	}
};

export default authReducer;
