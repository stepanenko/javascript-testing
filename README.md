
# Testing JavaScript

## Jest

### Run specific tests

`jest -t "fix-order-test"` only run tests that match the test name pattern you provide (`-t` = `--testNamePattern`)

If you have an it inside of a describe block, you have to run:

`jest -t "<describeString> <itString>"`

Another option, inside you test code put `only`, e.g:

```
test.only('this will be the only test that runs', () => {
   expect(true).toBe(false);
});
```
or
```
it.only('this will be the only test that runs', () => {
   expect(true).toBe(false);
});
```

More on that here: https://stackoverflow.com/questions/42827054/how-do-i-run-a-single-test-using-jest
