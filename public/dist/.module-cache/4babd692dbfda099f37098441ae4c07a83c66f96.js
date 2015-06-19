(function(){
	'use strict';

	var HelloMessage = React.createClass({displayName: "HelloMessage",
	  render: function() {
	    return React.createElement("div", null, "Hello ", this.props.name);
	  }
	});
	
	React.render(
	React.createElement("h3", null, "Hello, world!"),
	document.getElementById('test') 
	);

})();