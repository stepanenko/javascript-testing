
# Testing JavaScript

## Jest

### Run specific tests

`jest -t "fix-order-test"` only run tests that match the test name pattern you provide

`-t` - `--testNamePattern`

If you have an `it` inside of a `describe` block, you can run:

`jest -t [describe] [it]`

Another option, inside your test code put `only`, e.g:

```js
test.only('this will be the only test that runs', () => {
   expect(true).toBe(false);
});
```
or
```js
it.only('this will be the only test that runs', () => {
   expect(true).toBe(false);
});
```
or
```js
describe.only('this will be the only describe that runs', () => {
   it("one", () = {});
   it("two", () = {});
});
```

More on that here: https://stackoverflow.com/questions/42827054/how-do-i-run-a-single-test-using-jest
