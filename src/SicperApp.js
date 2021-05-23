import React from "react";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";

export const SicperApp = () => {
	return (
		<div>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</div>
	);
};
