import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { isMainThread } from 'worker_threads';
import Display from "./components/Display";
import PlayerCard from "./components/PlayerCard";
import useDarkMode from "./components/hooks/useDarkMode";
import useLocalStorage from "./components/hooks/useLocalStorage"


test('renders PlayerCard component', () => {
  const wrapper = rtl.render(<PlayerCard />);
  console.log(wrapper.debug());
});


test('renders localstorage', () => {
  const wrapper = rtl.render(<useLocalStorage/>);
  console.log(wrapper.debug());
});

test('renders darkmode', () => {
  const wrapper = rtl.render(<useDarkMode/>);
  console.log(wrapper.debug());
});

it('contains Kerr', () => {
  const wrapper = rtl.render(<App />);
  const saysKerr = wrapper.queryAllByText('kerr');
});

// test('renders display component', () => {
//   const wrapper = rtl.render(<Display />);
//   console.log(wrapper.debug());
// });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App/>, div);
//   ReactDOM.un(div);
// });
// test('renders dashboard component', () => {
//   const wrapper = rtl.render(<Display/>)
//   const element = wrapper.getByText(/playerData/i)
//   expect(element).toBeInTheDocument()
// });




