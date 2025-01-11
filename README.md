# Incorrect Lifecycle Method for State Update in React

This repository demonstrates a common bug in React applications: attempting to update component state in a deprecated lifecycle method. The example uses `componentWillMount`, which is no longer recommended.

## Bug

The `bug.js` file shows the incorrect implementation. The state is updated within `componentWillMount`, leading to unpredictable behavior. 

## Solution

The `bugSolution.js` file provides a corrected version using `componentDidMount` for class components and `useState` and `useEffect` hooks for functional components, ensuring the state is updated correctly after the component has mounted.  This is a more reliable approach than using `componentWillMount`.