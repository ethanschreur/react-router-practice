import { Route, BrowserRouter, Link } from 'react-router-dom';
function VendingMachine() {
	return (
		<div className="VendingMachine">
			<BrowserRouter>
				<Route exact path="/">
					<Link to="/granolabar">Granola Bar</Link>
					<br />
					<Link to="/crackers">Crackers</Link>
					<br />
					<Link to="/trailmix">Trail Mix</Link>
				</Route>
				<Route exact path="/granolabar">
					Granola Bar
					<br />
					<Link to="/">Go Back</Link>
				</Route>
				<Route exact path="/crackers">
					Crackers
					<br />
					<Link to="/">Go Back</Link>
				</Route>
				<Route exact path="/trailmix">
					Trail Mix
					<br />
					<Link to="/">Go Back</Link>
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default VendingMachine;
