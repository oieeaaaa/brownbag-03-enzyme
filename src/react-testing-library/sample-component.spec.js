import { helloWorld } from './sample-component';

it('should test hello world', () => {
  expect(helloWorld()).toMatch('Hello world');
});
