# Pipeline Process

- The app is using circleci pipeline which is composed of workflows that are divided to multiple jobs.
- The pipline is connected to the github repositry that has the code for both the frontend and backend.
- The pipline is set up to run with every added commit to the `master` branch.
- Environment variables required for the app to run are added to Circlci environment variables.
- The deploy step will run only after the manual approval throughout circleci interface.

## Pipline Steps

1. Using pre configured orbs for node, eb and aws cli
2. Run build docker container
3. Install node
4. Install Front-End Dependencies
5. Install Backend Dependencies
6. Run the lint for frontend
7. Run the build for the frontend
8. Run the build for the backend API
9. Manual approval
10. Run deploy docker container
11. Run the setup for node, eb and aws cli.
12. Run the deploy command to deploy the frontend & backend of the app
