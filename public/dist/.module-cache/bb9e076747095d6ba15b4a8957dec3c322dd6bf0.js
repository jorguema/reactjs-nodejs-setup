(function(){
	'use strict';

	var HelloMessage = React.createClass({displayName: "HelloMessage",
		render: function() {
		return React.createElement("div", null, "Hello ", this.props.name);
		}
	});

	React.render(
		React.createElement(HelloMessage, {name: "world!"}),
		document.getElementById('test') 
	);





	React.render(
		React.createElement(HelloMessage, {name: "world!"}),
		document.getElementById('dropdown') 
	);

})();