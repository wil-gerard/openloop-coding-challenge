# OpenLoop Coding Challenge

This project was completed for the software engineer application process at [OpenLoop Health](https://openloophealth.com/). The challenge was to build a form with validation that adds information to a list and allows the user to remove the information. Thank you for the opportunity, OpenLoop!

The developer:
* [William Gerard](https://github.com/wil-gerard)

## Project Requirements

- Built with React along with any other libraries that help get the job done
- Form field should be on the left, with user submissions on the right
- The first field in the form should autofocus on page load and after each submission
- Form contains fields for: first name, last name, email, and note
- Each item in the submissions list should display: first name, last name, email, and note
- All form fields are required
  - If a form field has a validation error, display a status message below it, and indicate the error with a red border
  - Ensure the 'email' field value is correctly formatted
- Disable form submissions unless the form is valid
- Reset form on submit
- Allow the user to remove submissions from the list

## Features in Progress

- Form validation to check if user name and/or email already exists
- Style user list for better readability

## Built With

- React.js
- Formik
- Yup
- Ant Design

## Deployment

### Prerequisites

- VS Code or any similar IDE supporting JavaScript ES6
- Node.js 14 or higher
- Yarn or NPM

### Installation

#### 1. Clone the repo

`https://github.com/wil-gerard/openloop-coding-challenge.git`

#### 2. Install dependencies

`yarn install` or `npm install`

#### 3. Run App

`yarn start` or `npm start`

## Preview

You can check out a live preview at: [https://wil-gerard-coding-challenge.netlify.app/](https://wil-gerard-coding-challenge.netlify.app/)
