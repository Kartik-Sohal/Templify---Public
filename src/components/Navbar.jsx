import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SunIcon = () => _jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
  className: "w-6 h-6",
  children: _jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
  })
});
var MoonIcon = () => _jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
  className: "w-6 h-6",
  children: _jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75 2.57 0 4.881-.996 6.652-2.648z"
  })
});
function Navbar(_ref) {
  var {
    theme,
    toggleTheme
  } = _ref;
  var [isOpen, setIsOpen] = useState(false);
  var navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  var activeLinkClasses = "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white";
  var inactiveLinkClasses = "text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white";
  return _jsxs("nav", {
    className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md sticky top-0 z-50",
    children: [_jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: _jsxs("div", {
        className: "flex items-center justify-between h-16",
        children: [_jsx("div", {
          className: "flex items-center",
          children: _jsx(Link, {
            to: "/",
            className: "text-2xl font-bold text-indigo-600 dark:text-indigo-400",
            children: "Templify"
          })
        }), _jsx("div", {
          className: "hidden md:block",
          children: _jsxs("div", {
            className: "ml-10 flex items-baseline space-x-4",
            children: [_jsx(NavLink, {
              to: "/",
              className: _ref2 => {
                var {
                  isActive
                } = _ref2;
                return "".concat(navLinkClasses, " ").concat(isActive ? activeLinkClasses : inactiveLinkClasses);
              },
              children: "Home"
            }), _jsx(NavLink, {
              to: "/templates",
              className: _ref3 => {
                var {
                  isActive
                } = _ref3;
                return "".concat(navLinkClasses, " ").concat(isActive ? activeLinkClasses : inactiveLinkClasses);
              },
              children: "Templates"
            }), _jsx(NavLink, {
              to: "/about",
              className: _ref4 => {
                var {
                  isActive
                } = _ref4;
                return "".concat(navLinkClasses, " ").concat(isActive ? activeLinkClasses : inactiveLinkClasses);
              },
              children: "About"
            })]
          })
        }), _jsxs("div", {
          className: "flex items-center",
          children: [_jsx("button", {
            onClick: toggleTheme,
            className: "p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
            children: theme === 'light' ? _jsx(MoonIcon, {}) : _jsx(SunIcon, {})
          }), _jsx("div", {
            className: "hidden md:block ml-4",
            children: _jsx(Link, {
              to: "/login",
              className: "bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors",
              children: "Log In"
            })
          }), _jsx("div", {
            className: "md:hidden ml-2",
            children: _jsx("button", {
              onClick: () => setIsOpen(!isOpen),
              className: "p-2 rounded-md text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
              children: _jsx("svg", {
                className: "h-6 w-6",
                stroke: "currentColor",
                fill: "none",
                viewBox: "0 0 24 24",
                children: isOpen ? _jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }) : _jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                })
              })
            })
          })]
        })]
      })
    }), isOpen && _jsx("div", {
      className: "md:hidden",
      children: _jsxs("div", {
        className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
        children: [_jsx(NavLink, {
          to: "/",
          className: _ref5 => {
            var {
              isActive
            } = _ref5;
            return "block ".concat(navLinkClasses, " ").concat(isActive ? activeLinkClasses : inactiveLinkClasses);
          },
          onClick: () => setIsOpen(false),
          children: "Home"
        }), _jsx(NavLink, {
          to: "/templates",
          className: _ref6 => {
            var {
              isActive
            } = _ref6;
            return "block ".concat(navLinkClasses, " ").concat(isActive ? activeLinkClasses : inactiveLinkClasses);
          },
          onClick: () => setIsOpen(false),
          children: "Templates"
        }), _jsx(NavLink, {
          to: "/about",
          className: _ref7 => {
            var {
              isActive
            } = _ref7;
            return "block ".concat(navLinkClasses, " ").concat(isActive ? activeLinkClasses : inactiveLinkClasses);
          },
          onClick: () => setIsOpen(false),
          children: "About"
        }), _jsx(Link, {
          to: "/login",
          className: "block bg-indigo-600 text-white text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 mt-2",
          onClick: () => setIsOpen(false),
          children: "Log In"
        })]
      })
    })]
  });
}
export default Navbar;