var React = require('react');

// require helper methods to run queries and requests.
var helpers = require('../utils/helpers.js')

var Search = React.createClass({

		getInitialState: function(){
			return {
				term: ""
			}
		},

		handleClick: function(){

			helpers.runSearch(this.state.term);
		
		},

		setTerm: function(event){
			var newState = {};
			newState[event.target.id] = event.target.value;
			this.setState(newState);
		},

	// Here we render the component
	render: function(){

		return(

			<div className="container">

					<div className="row">

						<div className="col-lg-12">
							
							<div className="panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">Search NYT!</h3>
								</div>
								<div className="panel-body">
									<input type="text" className="form-control text-center" id="term" onChange= {this.setTerm} required/>
									<br />
									<button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
								</div>
							</div>

						</div>

					</div>
				</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Search;