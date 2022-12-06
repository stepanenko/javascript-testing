
# Testing JavaScript

## Jest

### Run specific tests

`jest -t "fix-order-test"` only run tests that match the test name pattern you provide (`-t` `--testNamePattern`)

If you have an `it` inside of a `describe` block, you can run:

`jest -t [describe] [it]`

To skip some tests in your file put `only`, e.g:

```js
test.only("should return...", () => {});

it.only("should return...", () => {});

describe.only("Profile", () => { ... });
```

To skip a test add an `x` before `it` or `describe`:

```js
xdescribe("Profile", () => {});

xit("should return...", () => {});
```

TO VERIFY: try putting `skip` after `it` or `describe`: `it.skip("should ...", () => {});`

More on that here: https://stackoverflow.com/questions/42827054/how-do-i-run-a-single-test-using-jest

> Todo: merge this file with JEST.md

