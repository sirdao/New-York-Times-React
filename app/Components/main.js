// Include React 
var React = require('react');

// Included all of the React Router dependencies
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = React.createClass({

	// Here we render the component
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1>NY Times Article Scrubber</h1>
						<p><em>Search for and annotate articles of interest!</em></p>
						<a href="#/search"><button className="btn btn-default">Search</button></a>						<a href="#/saved"><button className="btn btn-default">Saved Articles</button></a>
					</div>
					<div className="row">
						<div className="text-center">
							
						</div>
					</div>
					<div className="container">
						{/*Added this.props.children to dump all of the child components into place*/}
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
});
// Export the component back for use in other files
module.exports = Main;