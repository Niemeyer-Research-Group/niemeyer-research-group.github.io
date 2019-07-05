import React from 'react';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are online books I maintain to support my teaching.
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/books/design-methods/images/cover.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<a target="_blank" href="/ajko/books/design-methods">Design Methods</a>. <small>This book covers interaction design, design methods, and HCI fundamentals. I have my students read it in the first five weeks of class, then launch into a five week design project.</small>
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/books/cooperative-software-development/images/cover.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<a target="_blank" href="/ajko/books/cooperative-software-development/">Cooperative Software Development</a>. <small>This book covers software engineering fundamentals, but from a human, social, collaborative, and organizational perspective, rather than from a technical perspective. </small>
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/books/uist/images/cover.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<a target="_blank" href="/ajko/books/uist/">User Interface Software and Technology</a>. <small>This book covers the history, theory, and innovations in user interface software and technology. </small>
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/books/informatics-teaching-guide/images/cover.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<a target="_blank" href="/ajko/books/informatics-teaching-guide/">Informatics Teaching Guide</a>. <small>I wrote this book to support teachers new to the iSchool and/or new to teaching, including new faculty, guest faculty, doctoral student teachers, and teaching assistants.</small>
					</div>
				</div>
				
			</div>
		);
	}
}

export {Books}