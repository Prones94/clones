import React from './node_modules/react'
import './Datepicker.scss'
import bulmaCalendar from './node_modules/~bulma-calendar/dist/js/bulma-calendar.min.js.js';

export default function Datepicker() {
    // Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]');

// Loop on each calendar initialized
calendars.forEach(calendar => {
	// Add listener to date:selected event
	calendar.on('date:selected', date => {
		console.log(date);
	});
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#my-element');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', datepicker => {
		console.log(datepicker.data.value());
	});
}
    return (
        <div id="my-element">
        <input type="date"/>
        </div>
    )
    }