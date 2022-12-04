
## Testing with JEST

- ### Run a specific test or test file

Lets say we have `describe("Contact Card", () => {...})` in the `ContactCard.tsx`:

`jest -t "Contact Card" "ContactCard"` - `"Contact Card Component"` - test name, `"ContactCard"` - test file name

`-t` stands for `--testNamePattern`

Example with [react-app-rewired](https://github.com/timarney/react-app-rewired) library:

`npx react-app-rewired test -t "Contact Card"` - bad as it runs and skips all except tests matching "Contact Card"

`npx react-app-rewired test -f ContactCard` - good as it runs only files named ContactCard, and gives each test details

`npx react-app-rewired test -f service/api` - runs all tests in `api` folder, gives no test details

`-f` stands for file name

To generate and log [instanbul](https://istanbul.js.org/) coverage html report:

`npx react-app-rewired test --coverage -f ContactCard`

- ### Debugging tests

You can use the debug `method`, accessible from the `screen` object, to log the current HTML output of components:

```js
it("displays contact card", () => {
   render(<ContactCard />);
   screen.debug();
});
```

- ### Coverage report

To generate a coverage report for a specific file run:

`npx react-scripts test src/hooks/useCounter.test.ts --coverage --collectCoverageFrom=src/hooks/useCounter.ts`

This will also work:

`npx react-scripts test useCounter.test.ts --coverage --collectCoverageFrom=src/hooks/useCounter.ts`

Then open report at: `my-project/coverage/lcov-report/index.html`. Note that the path might be different in your project.

> If your test file runs but coverage shows `0%` check if the file extension was put correctly, e.g. `*.tsx`/`*.ts`/`*.jsx`
