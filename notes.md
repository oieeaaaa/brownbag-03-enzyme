# Quick Notes

## React-testing-library

- A lightweight solution that provides light utility function on top
  of react-dom and react-dom/test-utils
- "The more your tests resemble the way your software is used,
  the more confidence they can give you"

### Setting up react-testing-library

1. To install "yarn add --dev @testing-library/react"
1. Create a `src/setupTests.js` file then add `import "@testing-library/jest-dom";`
1. Add the `setupTests.js` in your `jest-config.js` like so:

```javascript
// jest-config.js
{
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  // ...the rest of config
}
```

1. That's it.

### Intricacies when testing react hooks with react-testing-library

1. When using hooks use `React.<hook>` (i.e., `React.useState`, `React.useEffect`, etc...) so your `jest.spyOn` will work

## Bonus

- Try these custom jest matchers "@testing-library/jest-dom"

## Questions you might asked

- Why do we have testing libraries as dependencies in react?
  Answer: It does not matter. Unless you are developing a library
  that other developers will use

- Is it a good practice to mock your useState?
  Simple Answer: NO. Read this https://stackoverflow.com/questions/64165138/how-to-mock-spy-usestate-hook-in-jest
