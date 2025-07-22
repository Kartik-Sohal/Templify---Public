import React from 'react';
import { Link } from 'react-router-dom';
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
function Footer() {
  return _jsx("footer", {
    className: "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
    children: _jsxs("div", {
      className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center",
      children: [_jsxs("p", {
        children: ["\xA9 ", new Date().getFullYear(), " Templify. All rights reserved."]
      }), _jsxs("div", {
        className: "flex justify-center space-x-4 mt-2",
        children: [_jsx(Link, {
          to: "/privacy",
          className: "hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors",
          children: "Privacy Policy"
        }), _jsx(Link, {
          to: "/terms",
          className: "hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors",
          children: "Terms of Service"
        })]
      })]
    })
  });
}
export default Footer;