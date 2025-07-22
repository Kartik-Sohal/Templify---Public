import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function AboutPage() {
  return _jsxs("div", {
    className: "flex flex-col items-center justify-center py-12 px-4",
    children: [_jsx("h1", {
      className: "text-5xl font-bold",
      children: "About Us"
    }), _jsx("p", {
      className: "mt-4 text-lg text-gray-500 dark:text-gray-400",
      children: "Our mission is to make web creation accessible to everyone."
    })]
  });
}
export default AboutPage;