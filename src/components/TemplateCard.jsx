import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function TemplateCard(_ref) {
  var {
    template
  } = _ref;
  return _jsxs("div", {
    className: "group rounded-lg overflow-hidden bg-white dark:bg-dark-800 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1",
    children: [_jsxs("div", {
      className: "relative",
      children: [_jsx("img", {
        src: template.previewImg,
        alt: template.name,
        className: "w-full h-auto object-cover"
      }), _jsx("div", {
        className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        children: _jsxs("a", {
          href: template.livePreviewUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-4 py-2 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700",
          children: [_jsx(ExternalLink, {
            className: "mr-2 h-4 w-4"
          }), "Live Preview"]
        })
      })]
    }), _jsxs("div", {
      className: "p-4",
      children: [_jsx("h3", {
        className: "text-lg font-bold text-gray-900 dark:text-white",
        children: template.name
      }), _jsxs("p", {
        className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
        children: ["by ", template.creator]
      }), _jsx(Link, {
        to: "/editor/".concat(template.id),
        className: "w-full mt-4 inline-block text-center px-4 py-2 bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-white font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-dark-900 transition-colors",
        children: "Customize"
      })]
    })]
  });
}
export default TemplateCard;