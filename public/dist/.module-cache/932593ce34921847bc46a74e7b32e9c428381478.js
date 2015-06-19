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


	var CustomUL = React.createClass({displayName: "CustomUL",
		render: function() {
				return React.createElement("ul", null);
			}
	});


	React.render(
		React.createElement(CustomUL, {name: "world!"}),
		document.getElementById('dropdown') 
	);

})();