
# Testing JavaScript
## Testing with JEST

- ### Run a specific test or test file

`npx react-scripts test src/utils/product/` - run all tests inside `product` folder

`npx react-scripts test src/utils/product/price.test.ts` - run only tests from `price` file (`.test.ts` can be omitted)

If you have Jest installed globally:

`jest -f ContactCard` - runs only files named ContactCard (gives each test details)

`jest -f service/api` - runs all tests in `api` folder (no test details)

`-f` - can be omitted

`jest -t "Contact Card"` - runs ALL tests but skips them except those matching name after `-t`

`-t` means `--testNamePattern`

check if this works: `jest -t "Contact Card" "ContactCard"` (`"Contact Card"` - test name, `"ContactCard"` - test file name)

If you have an `it`/`test` inside of a `describe` block, you can run:

`jest -t [describe] [it/test]`

To skip some tests in your file put `only`, e.g:

```js
test.only("should return...", () => {});

it.only("should return...", () => {});

describe.only("Profile", () => { ... });
```

To skip a test add an `x` before `it`/`test` or `describe`:

```js
xdescribe("Profile", () => {});

xit("should return...", () => {});
```

TO VERIFY: try putting `skip` after `it`/`test` or `describe`: `it.skip("should ...", () => {});`

More on that here: https://stackoverflow.com/questions/42827054/how-do-i-run-a-single-test-using-jest


- ### Debugging tests

You can use the `debug` method, accessible from the `screen` object, to log the current HTML output of components:

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


- ### Library [react-app-rewired](https://github.com/timarney/react-app-rewired) examples:

`npx react-app-rewired test -t "Contact Card"` - bad as it runs and skips all except tests matching "Contact Card"

`npx react-app-rewired test -f ContactCard` - good as it runs only files named ContactCard, and gives each test details

`npx react-app-rewired test -f service/api` - runs all tests in `api` folder, gives no test details

`-f` stands for file name

To generate and log [instanbul](https://istanbul.js.org/) coverage html report:

`npx react-app-rewired test --coverage -f ContactCard`
