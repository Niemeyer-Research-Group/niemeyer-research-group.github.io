import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

import { Biography } from './components/bio';
import { ContactInfo } from './components/contact';
import { Communities } from './components/communities';
import { Funding } from './components/funding';
import { Publications } from './components/publications';
import { Posts } from './components/posts';
import { Impact } from './components/impact';
import { Students } from './components/students';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { Project } from './components/project';
import { Reading } from './components/reading';
import { Advice } from './components/advice';
import { Teaching } from './components/teaching';
import { Talks } from './components/talks';
import { Books } from './components/books';
import { Travel } from './components/travel';
import { Vita } from './components/cv';
import { CER } from './components/cer';
import { Unknown } from './components/unknown';
import { Footer } from './components/footer';

import 'bootstrap';

var webRoot = "/ajko" + (window.location.pathname.includes("/test") ? "/test" : "");

// Polyfill startsWith
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

class App extends React.Component {

	constructor(props) {

		super(props);
		this.ref = React.createRef();

		this.handleKeyPress = this.handleKeyPress.bind(this);
		
		this.links = [
			"/",
			"/students",
			"/communities",
			"/publications",
			"/posts",
			"/talks",
			"/teaching",
			"/books",
			"/travel",
			"/impact",
			"/advice",
			"/bio",
			"/funding",
			"/contact"
		];
		
	}
	
	getWebRoot() { return this.props.root; }
	
	handleKeyPress(event) {

		var oldIndex = this.links.indexOf(this.props.location.pathname);
		var newIndex = oldIndex;

		if(event.keyCode === 37) { newIndex = oldIndex === 0 ? index = this.links.length - 1 : oldIndex - 1; }
		if(event.keyCode === 39) { newIndex = oldIndex === this.links.length - 1 ? oldIndex = 0 : oldIndex + 1; }

		if(oldIndex !== newIndex)
			this.props.history.push(this.links[newIndex]);
		
	}
	
	componentDidMount() {
		this.focusApp();
	}
	
	componentDidUpdate() {
	    this.focusApp();
	}
	
	focusApp() {
		if(this.ref.current)
			this.ref.current.focus();
	}

	render() {
		
		var currentRoute = this.props.location.pathname;
		
		// Return the single page app.
		return (
			<div className="container" onKeyDown={this.handleKeyPress} tabIndex="0" ref={this.ref}>
				{currentRoute === "/cv" ? null : <Header path={currentRoute} app={this} />}
				<Switch>
					<Route exact path="/" render={(props) => <Projects {...props} app={this} />} />
					<Route path="/bio" render={(props) => <Biography {...props} app={this} />} />
					<Route path="/publications/:paper?" render={(props) => <Publications {...props} app={this} />} />
					<Route path="/posts" render={(props) => <Posts {...props} app={this} />} />
					<Route path="/impact" render={(props) => <Impact {...props} app={this} />} />
					<Route path="/reading" component={Reading}/>
					<Route path="/advice" render={(props) => <Advice {...props} app={this} />} />
					<Route path="/teaching" render={(props) => <Teaching {...props} app={this} />} />
					<Route path="/talks" render={(props) => <Talks {...props} app={this} />} />
					<Route path="/books" render={(props) => <Books {...props} app={this} />} />
					<Route path="/travel" render={(props) => <Travel {...props} app={this} />} />
					<Route path="/contact" render={(props) => <ContactInfo {...props} app={this} />} />
					<Route path="/communities" render={(props) => <Communities {...props} app={this} />} />
					<Route path="/funding" render={(props) => <Funding {...props} app={this} />} />
					<Route path="/lab" render={(props) => <Students {...props} app={this} />} />
					<Route path="/students/:student?" render={(props) => <Students {...props} app={this} />} />
					<Route path="/projects/:id" render={(props) => <Project {...props} app={this} />} />
					<Route path="/cv" render={(props) => <Vita {...props} app={this} />} />
					<Route path="/cer" component={CER}/>
					<Route path="*" component={Unknown}/>
				</Switch>
				{currentRoute === "/cv" ? null : <Footer/>}
			</div>
		)
	}
	
	getPeople() { return this.props.data.people; }	
	getTravel() { return this.props.data.travel; }	
	getProjects() { return this.props.data.projects; }
	getImpacts() { return this.props.data.impacts; }
	
}


var AppWithRouter = withRouter(App);

// Get the data, then render it.
var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'data/data.json', true);
request.onreadystatechange = function () {
	// Did it come back?
	if(request.readyState == 4) {
		// If it was successful, render it!
		if(request.status == "200") {
			// Construct the app, passing it the data.
			ReactDOM.render((
				<BrowserRouter basename={webRoot}>
					<Route path="/" render={(props) => <AppWithRouter {...props} root={webRoot} data={JSON.parse(request.responseText)} /> } />
				</BrowserRouter>
			), document.getElementById('app'));
		}
		// If not, say something was wrong.
		else {
			document.getElementById("app").innerHTML = "Something went badly wrong, and I couldn't load the app's data..."
		}
	}
};
request.send(null);