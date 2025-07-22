function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { supabase } from '../supabaseClient';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function EditorPage() {
  var {
    templateId
  } = useParams();
  var [template, setTemplate] = useState(null);
  var [editableContent, setEditableContent] = useState({});
  var [loading, setLoading] = useState(true);
  var iframeRef = useRef(null);
  useEffect(() => {
    var fetchTemplateData = function () {
      var _ref = _asyncToGenerator(function* () {
        setLoading(true);
        var {
          data,
          error
        } = yield supabase.from('templates').select('*').eq('id', templateId).single();
        if (error) {
          console.error('Error fetching template:', error);
        } else if (data) {
          setTemplate(data);
          var initialContent = {};
          if (data.schema && data.schema.fields) {
            data.schema.fields.forEach(field => {
              initialContent[field.key] = field.defaultValue;
            });
          }
          setEditableContent(initialContent);
        }
        setLoading(false);
      });
      return function fetchTemplateData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchTemplateData();
  }, [templateId]);
  var handleContentChange = (key, value) => {
    var newContent = _objectSpread(_objectSpread({}, editableContent), {}, {
      [key]: value
    });
    setEditableContent(newContent);
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage({
        key,
        value
      }, '*');
    }
  };
  var handleDownload = () => {
    if (!iframeRef.current) {
      console.error("Iframe reference not found.");
      return;
    }
    var finalHtmlContent = '<!DOCTYPE html>\n' + iframeRef.current.contentDocument.documentElement.outerHTML;
    var zip = new JSZip();
    zip.file("index.html", finalHtmlContent);
    zip.generateAsync({
      type: "blob"
    }).then(function (content) {
      saveAs(content, "".concat(template.name.toLowerCase().replace(/\s+/g, '-'), ".zip"));
    });
  };
  if (loading) return _jsx("div", {
    className: "flex items-center justify-center h-screen",
    children: "Loading Editor..."
  });
  if (!template) return _jsx("div", {
    className: "flex items-center justify-center h-screen",
    children: "Template not found."
  });
  return _jsxs("div", {
    className: "flex h-screen bg-gray-100 dark:bg-dark-900 font-sans",
    children: [_jsxs("aside", {
      className: "w-1/4 bg-white dark:bg-dark-800 p-6 overflow-y-auto shadow-lg",
      children: [_jsxs(Link, {
        to: "/templates",
        className: "inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 mb-6",
        children: [_jsx(ArrowLeft, {
          className: "mr-2 h-4 w-4"
        }), " Back to Templates"]
      }), _jsx("h2", {
        className: "text-2xl font-bold mb-4 text-gray-900 dark:text-white",
        children: "Customize"
      }), _jsxs("p", {
        className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
        children: ["Editing: ", template.name]
      }), _jsx("div", {
        className: "space-y-6",
        children: template.schema && template.schema.fields ? template.schema.fields.map(field => _jsxs("div", {
          children: [_jsx("label", {
            htmlFor: field.key,
            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
            children: field.label
          }), _jsx("div", {
            className: "mt-1",
            children: field.type === 'textarea' ? _jsx("textarea", {
              id: field.key,
              rows: 4,
              value: editableContent[field.key] || '',
              onChange: e => handleContentChange(field.key, e.target.value),
              className: "w-full p-2 bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-dark-700 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            }) : _jsx("input", {
              type: "text",
              id: field.key,
              value: editableContent[field.key] || '',
              onChange: e => handleContentChange(field.key, e.target.value),
              className: "w-full p-2 bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-dark-700 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            })
          })]
        }, field.key)) : _jsx("p", {
          children: "This template has no editable fields defined."
        })
      }), _jsx("div", {
        className: "mt-8 pt-6 border-t border-gray-200 dark:border-dark-700",
        children: _jsxs("button", {
          onClick: handleDownload,
          className: "w-full inline-flex items-center justify-center px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-all duration-300",
          children: [_jsx(Download, {
            className: "mr-2 h-5 w-5"
          }), " Download Source Code"]
        })
      })]
    }), _jsx("main", {
      className: "w-3/4 flex-grow flex items-center justify-center bg-gray-200 dark:bg-dark-900 p-8",
      children: _jsx("div", {
        className: "w-full h-full bg-white rounded-lg shadow-2xl",
        children: _jsx("iframe", {
          ref: iframeRef,
          src: template.html_file_url,
          title: "Live Preview",
          className: "w-full h-full border-0",
          sandbox: "allow-scripts allow-same-origin"
        })
      })
    })]
  });
}
export default EditorPage;