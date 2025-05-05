**Description:**

This project contains automated UI and API tests for the application. It uses Cypress for UI testing and includes API test cases for CRUD operations on posts from JSONPlaceholder.



**Prerequisites:**

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended) - Install Node.js
- npm - comes installed with Node.js
- Cypress - will be installed via npm



**Setup Instructions:**

_1. Clone the repository_

Clone the project to your local machine using the following command:

`git clone https://github.com/MaksymilianRrr/softonix-test-task`

_2. Install dependencies_

Navigate to the project folder and install the necessary dependencies:

`cd softonix-test-task
npm install`
This will install all required packages, including Cypress.

_3. Configure API Endpoints_

You can define and configure any API constants such as endpoints inside `cypress/support/apiConstants.js`. Make sure that the API endpoints, like `POSTS_ENDPOINT`, are set correctly for the tests.

_4. Configure your test environment_

Cypress allows configuration of different environments. You can set environment variables, base URL, or modify other settings in the `cypress.json` configuration file.



**Test Execution:**

_1. Open Cypress UI_

To open the Cypress Test Runner and run tests interactively:

`npx cypress open`
This will launch the Cypress Test Runner, where you can manually select and run individual tests or test suites.

_2. Run Tests in Headless Mode_

To run the tests in headless mode (suitable for CI/CD pipelines):

`npx cypress run`
This will execute all the test cases in headless mode using the browser's default configuration.

_3. Run Specific Tests_

To run a specific test file, use the following command:

`npx cypress run --spec "cypress/e2e/ui/login.cy.js"`
_4. View Test Results_

Test results can be viewed in the Cypress dashboard after running the tests. If you want to capture the test results programmatically, you can use Cypress plugins like Cypress Mochawesome.



**Contributing:**

Feel free to contribute to the project! To contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix (`git checkout -b feature-branch`).

3. Commit your changes (`git commit -am 'Add new feature'`).

4. Push to the branch (`git push origin feature-branch`).

5. Open a pull request.


**Folder Structure:**

softonix-test-task/

├── cypress/

│   ├── e2e/                # Test specifications (UI and API tests)

│   │   ├── api/            # API tests folder

│   │   └── ui/             # UI tests folder

│   ├── fixtures/           # Test data files

│   ├── support/            # Support files (commands, constants, etc.)

│   ├── plugins/            # Cypress plugins

│   └── videos/             # Recorded videos of test runs (headless mode)

├── package.json            # Project dependencies and scripts

└── README.md               # This file
