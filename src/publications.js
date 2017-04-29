import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import { Paper }  from './paper';

var pubs = require('./pubs');

// Sort the publications by decreasing year.
pubs = pubs.sort((a, b)=>{ return b["year"] - a["year"]; });

class Publications extends React.Component {

	componentDidMount() {
		
		var paperToHighlight = this.props.location.query.id;

		var highlight = $('[name=' + paperToHighlight + ']');
		
		// Now scroll to the highlight, if there is one.
		if(highlight.length > 0)
			$('html,body').animate({scrollTop:highlight.offset().top - $(window).height() / 2}, 300);
		
	}

	render() {

		var paperToHighlight = this.props.location.query.id;

		// Create a list of publications, inserting year headers.
		var lastYear = null;
		var rows = [];
		for (var i = 0; i < pubs.length; i++) {
			
			var pub = pubs[i];
			
			if(lastYear === null || lastYear !== pub.year)
				rows.push(<h3 key={pub.year}>{pub.year}</h3>);
			lastYear = pub.year;
			
			rows.push(<Paper {...pubs[i]} key={i} highlight={ paperToHighlight === pubs[i].id } />);
		}
		return (
			<div>
				<div className="lead">These are all of my publications. See <a href="https://scholar.google.com/citations?user=otmdDLoAAAAJ&hl=en" target="_blank">who's citing them.</a></div>
				<div>{rows}</div>
			</div>
		);
			
	}
}

export { Publications };