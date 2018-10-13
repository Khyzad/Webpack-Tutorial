import {cube} from './math.js';

function component() {
	let element = document.createElement('pre');	

	element.innerHTML = [
		'hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');

	return element;
};

let element = component(); // store the element to rerender changes
document.body.appendChild(element); 

if (module.hot) {
	module.hot.accept('./print.js', () => {
		console.log('Accepting the updated printMe module!');
		document.body.removeChild(element);
		element = component(); // re-render the component to update the click handler
		document.body.appendChild(element);
	})
}