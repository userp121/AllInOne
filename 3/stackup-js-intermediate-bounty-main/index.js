/**
 * Base component class
 */
class Component {
	constructor(input='', tag) {
		this.input = input
		this.tag = tag
		this.placeholder = `Enter ${this.constructor.name.toLowerCase()} here`
	}

	// update input value
	setInput(value) {
		this.input = value
	}

	// create input to customise component
	createInput(index) {
		return `
		<div class="input-group">
			<span class="input-group-text" style="width: 96.375px;">${this.constructor.name}</span>
			<input id="input-${index}" data-component-type="${this.constructor.name}" type="text" class="form-control" aria-label="${this.placeholder}" placeholder="${this.placeholder}" value="${this.input}" oninput="onInputChange(${index})">
			<button class="btn btn-outline-secondary" type="button" onclick="removeComponent(${index})"><i class="bi bi-floppy-fill">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
					<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
					<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
				</svg>
			</button>
		</div>
		`
	}

	// render componet based on input provided by user
	render(index) {
		return `<${this.tag} id="component-${index}" class="mb-3">${this.input}</${this.tag}>`
	}
}

class Heading extends Component {
	constructor(input) {
		super(input, 'h2')
	}
}

class Paragraph extends Component {
	constructor(input) {
		super(input, 'p')
	}

	// create input to customise component
	createInput(index) {
		return `
		<div class="input-group">
			<span class="input-group-text" style="width: 96.375px;">${this.constructor.name}</span>
			<textarea id="input-${index}" data-component-type="${this.constructor.name}" type="text" class="form-control" aria-label="${this.placeholder}" placeholder="${this.placeholder}" oninput="onInputChange(${index})">${this.input}</textarea>
			<button class="btn btn-outline-secondary" type="button" onclick="removeComponent(${index})"><i class="bi bi-floppy-fill">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
					<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
					<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
				</svg>
			</button>
		</div>
		`
	}
}

class Image extends Component {
	constructor(input) {
		super(input, 'img')
		this.placeholder = `Enter image url here`
	}

	render(index) {
		return `<${this.tag} id="component-${index}" src="${this.input}" class="img-fluid mb-3 mx-auto d-block">`
	}
}

class Audio extends Component {
	constructor(input) {
		super(input, 'audio')
		this.placeholder = `Enter audio url here`
	}

	render(index) {
		return `<div class="d-flex justify-content-center mb-3 no-print">
			<${this.tag} id="audio-${index}" controls>
				<source id="component-${index}" src="${this.input}">
				Your browser does not support the audio element.
			</${this.tag}>
		</div>`
	}
}

/**
 * handle when input value has been updated
 * @param {number} index - index of input
 */
function onInputChange(index) {
	const input = document.getElementById(`input-${index}`)
	content[index].setInput(input.value)
	switch (input.getAttribute('data-component-type')) {
		case 'Audio':
			document.getElementById(`component-${index}`).src = input.value
			document.getElementById(`audio-${index}`).load()
			break;
		case 'Image':
			document.getElementById(`component-${index}`).src = input.value
			break;
		default:
			document.getElementById(`component-${index}`).innerHTML = input.value
	}
}

/**
 * keep track of all the components added & their order
 */
var content = [
	new Heading('Getting started is easy!'),
	new Paragraph('Just choose a component type and enter the details. You can insert text and event media files!'),
	new Image('https://cdn.pixabay.com/photo/2023/07/06/16/52/mountain-8110888_1280.jpg'),
	new Audio('https://www.no-copyright-music.com/wp-content/uploads/2021/09/Calmness.mp3'),
	new Paragraph('And voila, you got a beautify document!')
]

/**
 * render inputs for editor & components for
 * @param {Component[]} array - content array
 */
function render(array) {
	document.getElementById("editor").innerHTML = array.map((ele, index) => ele.createInput(index)).join('')
	document.getElementById("renderer").innerHTML = array.map((ele, index) => ele.render(index)).join('')
}

/**
 * insert new component to content array & re-render UI
 * @param {String} componentType
 */
function insertComponent(componentType) {
	let msg;
	try {
		switch (componentType) {
			case "Heading":
				content.push(new Heading())
				break;
			case "Paragraph":
				content.push(new Paragraph())
				break;
			case "Image":
				content.push(new Image())
				break;
			case "Audio":
				content.push(new Audio())
				break;
			default:
				throw new Error('Invalid Component Selected')
		}
		msg = `🥳 ${componentType} added to the end of content!`
		render(content)
	} catch (err) {
		msg = err.message
	} finally {
		alert(msg)
	}
}

/**
 * Remove component & input at specified index
 * @param {number} index - index of component to remove
 */
function removeComponent(index) {
	content = [
		...content.slice(0, index),
		...content.slice(index + 1)
	]
	render(content)
}

/**
 * Remove all components from content array
 */
function discard() {
	content = []
	render(content)
}

/**
 * Open printing window for user to print content created
 */
function print() {
	const head = document.head.innerHTML
	const content = document.getElementById("renderer").innerHTML;
	const a = window.open('', '', 'height=3508, width=2480');
	a.document.write(`<html><head>${head}<head><body><div class="container">${content}</div></body></html>`);
	a.document.close();
	a.print();
}

/**
 * render sample document after whole page has loaded
 */
window.onload = function () {
	render(content)
};
