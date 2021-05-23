import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginScreen } from "../components/pages/LoginScreen";
import { RegisterScreen } from "../components/pages/RegisterScreen";

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth/login" component={LoginScreen} />

					<Route exact path="/auth/register" component={RegisterScreen} />

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
