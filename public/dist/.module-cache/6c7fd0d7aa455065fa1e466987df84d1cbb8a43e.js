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
				return React.createElement("ul", null, 
						this.props.items.map(function(b){
							return React.createElement(CustomLi, {item: b})
						})
						);
			}
	});


	var items = [1,2,3];

	React.render(
		React.createElement(CustomUL, {items: items}),
		document.getElementById('dropdown') 
	);

})();