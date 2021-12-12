import React from 'react';

class Commitments extends React.Component {

    constructor() {
        
        super();

        this.colors = {
            "research": "rgb(210,210,255)",
            "teaching": "rgb(195,240,195)",
            "service": "rgb(255,222,162)",
            "personal": "rgb(220,220,220)"
        };

        this.months = {
            1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr",
            5: "May", 6: "Jun", 7: "Jul", 8: "Aug",
            9: "Sept", 10: "Oct", 11: "Nov", 12: "Dec"
        };

    }

    renderBar(commitment, proportion=1, label=true, key=null) {

        var maxEms = 12;
        var ems = Math.round(maxEms * commitment.hours * proportion / 40);
        
        // Adjust the postfix based on size and duration of commitment.
        var postfix = 
            ems <= 3 ? "" :
            (!commitment.annually && commitment.end.getTime() !== null &&
            (commitment.end.getTime() - commitment.start.getTime()) / 1000 / 60 / 60 / 24 <= 7) ? " hrs" :
            " hrs/wk";

        return (
            <div 
                className={"bar " + commitment.category}
                key={key}
                style={
                    {
                        width: ems + "em"
                    }
                }
            >
                {label ? <span>{commitment.hours * proportion}{postfix}</span> : null}
            </div>
        );

    }

    toDateString(date, showYear=true) {
        return this.months[date.getMonth() + 1] + " " + date.getDate() + (showYear ? ", '" + date.getFullYear().toString().substr(-2) : "");
    }
    
    toDateRange(start, end) {

        var range = end.getTime() - start.getTime();
        var yearInMilliseconds = 1000 * 60 * 60 * 24 * 7 * 52;
        var weekInMilliseconds = 1000 * 60 * 60 * 24 * 7;

        // If it's longer than a year, do years
        if(range >= yearInMilliseconds) {
            return <span><em>{Math.round(10 * range / yearInMilliseconds) / 10} years</em><br/>starting <em>{this.toDateString(start)}</em></span>;
        }
        // If it's longer than a week, do weeks
        else if(range >= weekInMilliseconds) {
            return <span><em>{Math.round(range / weekInMilliseconds)} weeks</em><br/>starting <em>{this.toDateString(start)}</em></span>;
        }
        // If it's less than a week, just do the dates
         else {
            return <span><em>{this.toDateString(start, false)}</em> -<br/><em>{this.toDateString(end)}</em></span>;
         }

    }

    getPreviousMonday() {
				
        var date = new Date();
        var day = date.getDay();
        var prevMonday;
        if(date.getDay() === 1) {
            prevMonday = new Date().setDate(date.getDate() - 7);
        }
        else{
            prevMonday = new Date().setDate(date.getDate() - day + 1);
        }
    
        return new Date(prevMonday);

    }

    datesIntersect(date1Start, date1End, date2Start, date2End) {
        // The beginning of the second range is within the first range.
        // Compute the proportion of a week.
        if(date2Start.getTime() >= date1Start.getTime() && date2Start.getTime() < date1End.getTime()) {
            return (date1End.getTime() - date2Start.getTime()) / 1000 / 60 / 60 / 24 / 7;
        }
        // The second range completely subsumes the first range.
        else if(date2Start.getTime() < date1Start.getTime() && date2End.getTime() >= date1End.getTime()) {
            return 1;
        }
        // The end of the second range is within the first range.
        else if(date2End.getTime() >= date1Start.getTime() && date2End.getTime() < date1End.getTime()) {
            return (date2End.getTime() - date1Start.getTime()) / 1000 / 60 / 60 / 24 / 7;
        }
        // If none of the above apply, then there is no intersection. Return 0% overlap.
        else {
            return 0;
        }
        
    }

    renderWeeks() {

        var weeks = [];

        // Start a date counter with last Monday.
        var currentMonday = this.getPreviousMonday();
        const yearsToDisplay = 2;

        // Iterate through the next 2 years, week by week.
        for(var count = 1; count < 52 * yearsToDisplay; count++) {
            
            // Start a list of intersecting commitments
            var intersectingCommitments = [];

            // Compute Sunday.
            var nextSunday = new Date(currentMonday.getTime() + 6 * 24 * 60 * 60 * 1000);

            // Which promises occur in this week?
            this.commitments.forEach(commitment => {
                // If this is an annual commitment, is this week in it's month range?
                if(commitment.annually) {
                    let startMonth = new Date(currentMonday.getFullYear(), commitment.start.month - 1, commitment.start.date);
                    let endMonth = new Date(currentMonday.getFullYear() + (commitment.end.month < commitment.start.month ? 1 : 0), commitment.end.month - 1, commitment.end.date);
                    let overlap = this.datesIntersect(currentMonday, nextSunday, startMonth, endMonth);
                    if(overlap > 0)
                        intersectingCommitments.push({
                            commitment: commitment,
                            overlap: overlap
                        });
                }
                // If this is a weekly commitment...
                else {
                    // Does it have a start and end time and does it intersect with the
                    if(commitment.start !== null && commitment.end !== null) {
                        let overlap = this.datesIntersect(currentMonday, nextSunday, commitment.start, commitment.end);
                        if(overlap > 0)
                            intersectingCommitments.push({
                                commitment: commitment,
                                overlap: overlap
                            });
                    }
                    // If it doesn't have a start or end time, then add it.
                    else 
                        intersectingCommitments.push({
                            commitment: commitment,
                            overlap: 1
                        });
                }                
            });

            // Are there any prime commitments this week? If so, remove the flexible commitments.
            if(intersectingCommitments.filter(intersect => intersect.commitment.priority === 2).length > 0)
                intersectingCommitments = intersectingCommitments.filter(intersect => intersect.commitment.priority !== 0);

            // Add these dcommitments to this week for rendering.
            weeks.push({
                date: currentMonday,
                intersects: intersectingCommitments.sort((a, b) => {
                    if(a.commitment.category !== b.commitment.category)
                        return a.commitment.category.localeCompare(b.commitment.category);
                    else
                        return a.commitment.hours * a.overlap > b.commitment.hours * b.overlap;
                })
            });

            // Add a week to the current Monday.
            currentMonday = new Date(currentMonday.getTime() + 7 * 24 * 60 * 60 * 1000);

        }

        // Finally, map the weeks to table rows.
        var rows = [];
        var lastWeek = null;
        weeks.forEach((week, index) => {
            
            // Add a month header when we start or it changes.
            if(lastWeek === null || lastWeek.date.getMonth() !== week.date.getMonth())
                rows.push(
                    <tr key={"week-" + index}>
                        <td colSpan="2"><h4>{this.months[week.date.getMonth() + 1]} {week.date.getFullYear()}</h4></td>
                    </tr>)
            lastWeek = week;

            let hours = 
                week.intersects.reduce((sum, intersect) => sum + (intersect.commitment.category === "personal" ? 0 : Math.round(intersect.commitment.hours * intersect.overlap)), 0);

            // Add the commitments, then a total hours
            rows.push(
                <tr key={"week-" + index + "-commitments"}>
                    <td>
                        <div className={hours > 45 ? "shake" : ""} style={{animationDelay: "-" + Math.round(10 * Math.random()) / 10 + "s"}}>
                        {
                            week.intersects.map((intersect, index) => this.renderBar(intersect.commitment, intersect.overlap, false, "commitment-" + index))
                        }
                        </div>
                        {
                            <div className="commitment-notes">
                                {
                                    week.intersects.map(
                                        (intersect, index) => 
                                            <span 
                                                className={intersect.commitment.category}
                                                key={"name-" + index} 
                                            >
                                                    {/* {index > 0 && week.intersects[index - 1].commitment.category !== intersect.commitment.category ? <br/> : null} */}
                                                    {intersect.commitment.name}
                                                    {index < week.intersects.length - 1 ? <span> &sdot; </span> : null}
                                            </span>
                                    )
                                }
                            </div>
                        }
                    </td>
                    <td key="total"><div className={hours > 45 ? "shake" : ""}  style={{animationDelay: "-" + Math.round(10 * Math.random()) / 10 + "s"}}>{hours + " hrs"}</div></td>
                </tr>
            );

        });

        return rows;

    }

    commit(name, description, category, priority, hours, annually, start, end) {

        this.commitments.push({
            "name": name,
            "description": description,
            "category": category,
            "priority": priority,
            "hours": hours,
            "annually": annually,
            "start": start,
            "end": end
        });

    }

    generateCommitments() {

        this.commitments = [];

        var profile = this.props.app.getProfile();
        var thisYear = (new Date()).getFullYear();

        // Start with an list of miscellaneous commitments.
        profile.getCommitments().map(
            com => 
                this.commit(com.title, com.description, com.category, com.commitment.priority, com.commitment.hours, com.annually, com.commitment.start, com.commitment.end))

        // Add editing responsibilities.
        profile.getEditing().forEach(editing =>
            this.commit(
                editing.venue, editing.title, "service", 
                editing.commitment.priority, editing.commitment.hours, false, 
                editing.commitment.start, editing.commitment.end
            )
        );

        // Add service responsibilities.
        profile.getService().forEach(service =>
            this.commit(
                service.committee, service.title, "service", 
                service.commitment.priority, service.commitment.hours, false, 
                service.commitment.start, service.commitment.end
            )
        );

        // Add funding responsibilities.
        profile.getFunding().forEach(funding =>
            this.commit(
                funding.title, "Research, collaboration, reporting", funding.category, 
                funding.commitment.priority, funding.commitment.hours, false, 
                funding.commitment.start, funding.commitment.end
            )
        );

        // Add travel responsibilities.
        profile.getTravel().forEach(trip =>
            this.commit(
                trip.title, trip.details, trip.category, 
                trip.commitment.priority, trip.commitment.hours, false, 
                trip.commitment.start, trip.commitment.end
            )
        );

        // Add talk prep responsibilities (start prep 90 days beforehand)
        profile.getTalks().forEach(talk => {
            let start = new Date(talk.date.getTime());
            start.setDate(start.getDate() - 90);
            return this.commit(
                talk.title, talk.description, "research", 
                1, 1, false, 
                start, talk.date
            )
        });

        // Add reviewing responsibilities.
        profile.getReviewing().forEach(reviewing => {
            // If this has a commitment, add commitments for all current and future years.
            if(reviewing.commitment) {
                reviewing.years.filter(year => year >= thisYear).forEach(
                    year => 
                        this.commit(
                            reviewing.title ? reviewing.title : "Reviewer", reviewing.venue, "service", 
                            reviewing.commitment.priority, reviewing.commitment.hours, false, 
                            new Date(year, reviewing.commitment.start.month, reviewing.commitment.start.date),
                            // Handle the year wraparound for end months that are before start months.
                            new Date(year + (reviewing.commitment.end.month < reviewing.commitment.start.month ? 1 : 0), reviewing.commitment.end.month, reviewing.commitment.end.date),
                        )
                )
            }
        });

        // Add teaching responsibilities
        profile.getClasses().forEach(course => {
           course.offerings.forEach(offering => {
                // If this course is going to be offered this year, add commitments for it
                if(offering.year >= thisYear) {
                    // Add time for preparing to teach the quarter before.
                    this.commit(
                        course.number + " Prep", "Curriculum design", "teaching",
                        1, 2, false,
                        new Date(offering.year - (offering.term === 2 ? 1 : 0), [6, 9, 0][offering.term - 1], [1, 5, 5][offering.term - 1]),
                        new Date(offering.year - (offering.term === 2 ? 1 : 0), [8, 11, 3][offering.term - 1], [15, 15, 15][offering.term - 1])
                    );
                    // Add time for teaching the class the quarter before.
                    this.commit(
                        course.number, "Teaching and grading", "teaching",
                        1, course.hours, false,
                        new Date(offering.year, [8, 0, 3][offering.term - 1], [15, 1, 1][offering.term - 1]),
                        new Date(offering.year, [11, 2, 5][offering.term - 1], [15, 15, 15][offering.term - 1])
                    );
                }
            });
        });

    }

	render() {

        this.generateCommitments();

        // Split up the committments into categories for display.
        const indefiniteWeekly = 
            this.commitments
                .filter(commitment => commitment.end === null && commitment.category !== "personal")
                .sort((a, b) => b.hours - a.hours)

        const indefiniteAnnually = 
            this.commitments
                .filter(commitment => commitment.annually && commitment.category !== "personal")
                .sort((a, b) => (a.start.month * 12 + a.start.date) - (b.start.month * 12 + b.start.date))

        const definiteResearch = 
            this.commitments
                .filter(commitment => !commitment.annually && commitment.end !== null && commitment.category === "research" && commitment.end.getTime() > Date.now())
                .sort((a, b) => a.start.getTime() - b.start.getTime())

        const definiteTeaching = 
            this.commitments
                .filter(commitment => !commitment.annually && commitment.end !== null && commitment.category === "teaching" && commitment.end.getTime() > Date.now())
                .sort((a, b) => a.start.getTime() - b.start.getTime())

        const definiteService = 
            this.commitments
                .filter(commitment => !commitment.annually && commitment.end !== null && commitment.category === "service" && commitment.end.getTime() > Date.now())
                .sort((a, b) => a.start.getTime() - b.start.getTime())

		return (
			<div>
				<div className="lead">
					This is my commitment calendar, which estimates how much work I've promised to do in the next two years. I use this to decide whether to say yes to new opportunities and brace myself for busy periods.
				</div>

                <p>Curious how I maintain this page? I have a <a target="_blank" href="https://github.com/amyjko/faculty/blob/master/profile/profile.json">list of commitments</a> with date ranges, from which I <a target="_blank" href="https://github.com/amyjko/faculty/blob/master/components/commitments.js">automatically generate</a> this page.</p>

                <hr/>

                <div className="bar personal">personal</div>
                <div className="bar research">research</div>
                <div className="bar teaching">teaching</div>
                <div className="bar service">service</div>

                <table className="table">
                    <tbody>
                        <tr><td colSpan="3"><h3>Weekly commitments</h3></td></tr>
                        {
                            indefiniteWeekly.map((commitment, index) =>
                                <tr key={"weekly-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        <em>weekly</em>
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h3>Annual commitments</h3></td></tr>
                        {
                            indefiniteAnnually.map((commitment, index) =>
                                <tr key={"annual-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {
                                            this.months[commitment.start.month] === this.months[commitment.end.month] ?
                                                <em>{this.months[commitment.start.month]}</em> :
                                                <span><em>{this.months[commitment.start.month]}</em> - <em>{this.months[commitment.end.month]}</em></span>
                                        }                             
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h3>One-time commitments</h3></td></tr>
                        <tr><td colSpan="3"><h4>Research</h4></td></tr>
                        {
                            definiteResearch.map((commitment, index) =>
                                <tr key={"fixed-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {this.toDateRange(commitment.start, commitment.end)}
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h4>Teaching</h4></td></tr>
                        {
                            definiteTeaching.map((commitment, index) =>
                                <tr key={"fixed-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {this.toDateRange(commitment.start, commitment.end)}
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h4>Service</h4></td></tr>
                        {
                            definiteService.map((commitment, index) =>
                                <tr key={"fixed-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {this.toDateRange(commitment.start, commitment.end)}
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                    </tbody>
                </table>

                <h3>Weekly workload</h3>

                <p>
                    Here's an estimate of how busy I'll be per week in the next two years. 
                    You might notice from the wiggles that I don't like working more than 45 hours a week.
                    Do big numbers mean I work obscene hours?
                    No: I take shortcuts to make my work fit into 45 hours a week.
                    For example, it might mean being less prepared for class, missing a meeting, or making less progress on a grant or service responsibility.
                </p>

                <table className="table">
                    <tbody>
                    { this.renderWeeks() }
                    </tbody>
                </table>
            </div>
		)
		
	}

}

export { Commitments };