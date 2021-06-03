# Typescript + Jest Styker example

## Install & Run
`npm i`

`npm start`

## What's odd
This is an example of a test which I think should kill mutants but don't. You can run the mutation with npm run mutate. Note the score is zero.

If you attempt to manually see if the mutants are killed by the tests you'll find they are. For example replacing
```typescript
if (value != 'true' && value != 'false') {
```
with
```typescript
if (true) {
```
fails the tests, however in the report this mutant isn't killed.

This problem was found in production code, this is the simplest possible reproduction of it I could get to in the time I had.