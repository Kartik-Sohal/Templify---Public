import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TemplatesPage from './pages/TemplatesPage';
import AboutPage from './pages/AboutPage';
import EditorPage from './pages/EditorPage';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  var [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  var toggleTheme = () => {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  useEffect(() => {
    var root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  var showHeaderFooter = !window.location.pathname.startsWith('/editor');
  return _jsx(Router, {
    children: _jsxs("div", {
      className: "flex flex-col min-h-screen bg-white dark:bg-dark-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 font-sans",
      children: [showHeaderFooter && _jsx(Navbar, {
        theme: theme,
        toggleTheme: toggleTheme
      }), _jsx("main", {
        className: "flex-grow",
        children: _jsxs(Routes, {
          children: [_jsx(Route, {
            path: "/",
            element: _jsx(HomePage, {})
          }), _jsx(Route, {
            path: "/templates",
            element: _jsx(TemplatesPage, {})
          }), _jsx(Route, {
            path: "/about",
            element: _jsx(AboutPage, {})
          }), _jsx(Route, {
            path: "/editor/:templateId",
            element: _jsx(EditorPage, {})
          }), " "]
        })
      }), showHeaderFooter && _jsx(Footer, {})]
    })
  });
}
export default App;