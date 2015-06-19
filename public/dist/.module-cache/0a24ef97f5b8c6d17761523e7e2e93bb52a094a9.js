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

	var CustomLi = React.createClass({displayName: "CustomLi",
		
		render: function(){
			return React.createElement("li", null, React.createElement("h4", null, this.props.item))
		}
	});

	var CustomUL = React.createClass({displayName: "CustomUL",
		propTypes:{
			item: React.propTypes.array.isRequired
		},
		render: function() {
				return React.createElement("ul", null, 
						this.props.items.map(function(b){
							return React.createElement(CustomLi, {item: b})
						})
						);
			}
	});


	var items = [{key:1, value:"LOTR"},{key:2, value:"ASD"},{key:3, value:"ASD2"}];

	React.render(
		React.createElement(CustomUL, {items: items}),
		document.getElementById('dropdown') 
	);

})();