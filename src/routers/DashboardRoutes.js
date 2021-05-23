import React from "react";
import { NavbarComponent } from "../components/UI/organisms/NavbarComponent";
import { Switch, Route, Redirect } from "react-router-dom";

import { SicperScreen } from "../components/pages/SicperScreen";
import { PadronScreen } from "../components/pages/PadronScreen";
import { PermisosScreen } from "../components/pages/PermisosScreen";
import { NuevoPermisoScreen } from "../components/pages/NuevoPermisoScreen";
import { TransferenciasScreen } from "../components/pages/TransferenciasScreen";
import { AsignacionScreen } from "../components/pages/AsignacionScreen";
import { LaboresScreen } from "../components/pages/LaboresScreen";
import { AutorizadosScreen } from "../components/pages/AutorizadosScreen";
import { ReportesScreen } from "../components/pages/ReportesScreen";
import { ConfiguracionScreen } from "../components/pages/ConfiguracionScreen";
import Header from "../components/UI/organisms/Header";

export const DashboardRoutes = () => {
	return (
		<div className="container-fluid pr-4">
			<NavbarComponent />
			<Header />
			<Switch>
				<Route exact path="/sicper" component={SicperScreen} />
				<Route exact path="/padron" component={PadronScreen} />
				<Route exact path="/permisos" component={PermisosScreen} />
				<Route exact path="/nuevo-permiso" component={NuevoPermisoScreen} />
				<Route exact path="/transferencias" component={TransferenciasScreen} />
				<Route exact path="/asignacion" component={AsignacionScreen} />
				<Route exact path="/labores" component={LaboresScreen} />
				<Route exact path="/autorizados" component={AutorizadosScreen} />
				<Route exact path="/reportes" component={ReportesScreen} />
				<Route exact path="/configuracion" component={ConfiguracionScreen} />

				<Redirect to="/sicper" />
			</Switch>
		</div>
	);
};
