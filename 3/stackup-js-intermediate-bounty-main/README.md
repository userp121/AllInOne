<br />
<div align="center">
  <a href="https://github.com/teyweikiet/stackup-js-intermediate-bounty">
    <img src="/favicon.ico" alt="Logo" width="50" height="50">
  </a>

  <h1 align="center" style="border-bottom: 0;">kit-t's content editor</h1>

  <p align="center">
    A Content Editor App!
    <br />
    <a href="https://kit-t-stackup-js-intermediate-bounty.netlify.app/"><strong>View Demo</strong></a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#functionalities">Functionalities</a></li>
      </ul>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
	<li>
      <a href="#how-tos">How tos</a>
	  <ul>
        <li><a href="#start-from-blank-state">Start From Blank State</a></li>
		<li><a href="#insert-component">Insert Component</a></li>
		<li><a href="#remove-component">Remove Component</a></li>
		<li><a href="#print-content">Print Content</a></li>
      </ul>
    </li>
  </ol>
</details>

## About the project

This is a submission for [StackUp's JavaScript Intermediate Campaign Bounty](https://app.stackup.dev/bounty/javascript-intermediate-campaign-bounty).

This project demonstrate usage of the following JavaScript concepts:

- class
  - each component type is represented by a class
  - each component class inherits from the parent class `Component``
  - component classes have properties e.g. tag, input & placeholder, as well as methods e.g. `setInput` to update input value, `render` to generate html for component & `createInput` to create input html for the component

- switch statements
  - switch statements are used in `onInputChange` & `insertComponent` functions

- try-catch-finally statements
  - try-catch-finally statements are used in `insertComponent` functions to handle if inappropriate argument is passed to it

### Functionalities

- user can insert different component types, e.g. Heading, Paragraph, Image & Audio

- user can remove component

- user can print content

- user can discard content to start with a blank state

## Built With

- Bootstrap to build fast, responsive user interface

- Netlify for hosting frontend app: https://kit-t-stackup-js-intermediate-bounty.netlify.app/


## How Tos

### Start From Blank State

- By default user will be presented with a sample content to get started quickly with

- To discard all components, click "Discard" button

### Insert Component

- Click "Insert Component" dropdown and choose the component to insert

- After selecting the component, new input will be added to the bottom of content editor section

- Fill in the input accordingly. For Image & Audio component input, fill in the url of the image/audio.

### Remove Component

- To remove component from the content,
click the 🗑️delete button next to the component

### Print Content

- Click on "Print" button, and print window will be opened for you to choose printer and proceed with printing

