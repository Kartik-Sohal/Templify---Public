function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { supabase } from '../supabaseClient';
import TemplateCard from '../components/TemplateCard';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function TemplatesPage() {
  var [allTemplates, setAllTemplates] = useState([]);
  var [filteredTemplates, setFilteredTemplates] = useState([]);
  var [searchTerm, setSearchTerm] = useState('');
  var [activeCategory, setActiveCategory] = useState('All');
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState(null);
  var uniqueCategories = ['All', 'Portfolio', 'Business', 'Blog', 'E-commerce'];
  useEffect(() => {
    var fetchTemplates = function () {
      var _ref = _asyncToGenerator(function* () {
        setLoading(true);
        var {
          data,
          error
        } = yield supabase.from('templates').select('*');
        if (error) {
          console.error('Error fetching templates:', error);
          setError('Could not fetch templates. Please try again later.');
        } else {
          setAllTemplates(data);
          setFilteredTemplates(data);
        }
        setLoading(false);
      });
      return function fetchTemplates() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchTemplates();
  }, []);
  useEffect(() => {
    var result = allTemplates;
    if (activeCategory !== 'All') {
      result = result.filter(template => template.category === activeCategory);
    }
    if (searchTerm) {
      result = result.filter(template => template.name.toLowerCase().includes(searchTerm.toLowerCase()) || template.creator.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredTemplates(result);
  }, [searchTerm, activeCategory, allTemplates]);
  if (loading) {
    return _jsx("div", {
      className: "text-center py-20",
      children: "Loading Templates..."
    });
  }
  if (error) {
    return _jsx("div", {
      className: "text-center py-20 text-red-500",
      children: error
    });
  }
  return _jsxs("div", {
    className: "container mx-auto px-4 py-12 animate-fade-in-up",
    children: [_jsxs("div", {
      className: "text-center mb-12",
      children: [_jsx("h1", {
        className: "text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white",
        children: "Explore Templates"
      }), _jsx("p", {
        className: "mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400",
        children: "Find the perfect starting point for your next project. Fully customizable and free to use."
      })]
    }), _jsx("div", {
      className: "mb-12",
      children: _jsxs("div", {
        className: "max-w-3xl mx-auto",
        children: [_jsxs("div", {
          className: "relative mb-6",
          children: [_jsx("input", {
            type: "text",
            placeholder: "Search by name or creator...",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            className: "w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
          }), _jsx(Search, {
            className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          })]
        }), _jsx("div", {
          className: "flex flex-wrap justify-center gap-2",
          children: uniqueCategories.map(category => _jsx("button", {
            onClick: () => setActiveCategory(category),
            className: "px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ".concat(activeCategory === category ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-700'),
            children: category
          }, category))
        })]
      })
    }), filteredTemplates.length > 0 ? _jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
      children: filteredTemplates.map(template => _jsx(TemplateCard, {
        template: _objectSpread(_objectSpread({}, template), {}, {
          previewImg: template.preview_img_url
        })
      }, template.id))
    }) : _jsxs("div", {
      className: "text-center py-16",
      children: [_jsx("h3", {
        className: "text-2xl font-bold text-gray-900 dark:text-white",
        children: "No Templates Found"
      }), _jsx("p", {
        className: "mt-2 text-gray-500 dark:text-gray-400",
        children: "Try adjusting your search or filters."
      })]
    })]
  });
}
export default TemplatesPage;