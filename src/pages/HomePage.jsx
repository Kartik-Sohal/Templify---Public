import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brush, Rocket } from 'lucide-react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var FeatureCard = _ref => {
  var {
    icon,
    title,
    children
  } = _ref;
  return _jsxs("div", {
    className: "bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
    children: [_jsx("div", {
      className: "flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-4",
      children: icon
    }), _jsx("h3", {
      className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
      children: title
    }), _jsx("p", {
      className: "text-gray-600 dark:text-gray-400",
      children: children
    })]
  });
};
var StepCard = _ref2 => {
  var {
    number,
    title,
    children
  } = _ref2;
  return _jsxs("div", {
    className: "flex items-start space-x-4",
    children: [_jsx("div", {
      className: "flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-500 text-white font-bold text-xl",
      children: number
    }), _jsxs("div", {
      children: [_jsx("h3", {
        className: "text-xl font-bold text-gray-900 dark:text-white",
        children: title
      }), _jsx("p", {
        className: "mt-1 text-gray-600 dark:text-gray-400",
        children: children
      })]
    })]
  });
};
function HomePage() {
  var featuredTemplates = [{
    name: 'Portfolio',
    img: 'https://via.placeholder.com/400x300.png/3B82F6/FFFFFF?text=Portfolio'
  }, {
    name: 'Blog',
    img: 'https://via.placeholder.com/400x300.png/10B981/FFFFFF?text=Blog'
  }, {
    name: 'SaaS',
    img: 'https://via.placeholder.com/400x300.png/F59E0B/FFFFFF?text=SaaS'
  }];
  return _jsxs("div", {
    className: "animate-fade-in-up",
    children: [_jsx("section", {
      className: "py-20 md:py-32 text-center",
      children: _jsxs("div", {
        className: "container mx-auto px-4",
        children: [_jsxs("h1", {
          className: "text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white",
          children: ["Stunning Websites, ", _jsx("span", {
            className: "text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500",
            children: "Zero Effort"
          })]
        }), _jsx("p", {
          className: "mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400",
          children: "Choose a template, customize it with our live editor, and launch for free. Your professional website is just a few clicks away."
        }), _jsx("div", {
          className: "mt-8",
          children: _jsxs(Link, {
            to: "/templates",
            className: "inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300",
            children: ["Get Started for Free ", _jsx(ArrowRight, {
              className: "ml-2 h-5 w-5"
            })]
          })
        })]
      })
    }), _jsx("section", {
      id: "how-it-works",
      className: "py-20 bg-gray-50 dark:bg-dark-900",
      children: _jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [_jsx("h2", {
          className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white",
          children: "How It Works"
        }), _jsx("p", {
          className: "mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400",
          children: "Simple as 1, 2, 3."
        }), _jsxs("div", {
          className: "mt-12 grid md:grid-cols-3 gap-8 md:gap-12 text-left",
          children: [_jsx(StepCard, {
            number: "1",
            title: "Choose a Template",
            children: "Browse our growing library of professionally designed, fully responsive templates."
          }), _jsx(StepCard, {
            number: "2",
            title: "Customize Visually",
            children: "Use our simple editor to change text, images, and colors. See your changes live."
          }), _jsx(StepCard, {
            number: "3",
            title: "Download & Launch",
            children: "Get your site's source code and deploy it on free platforms like Netlify or Vercel in seconds."
          })]
        })]
      })
    }), _jsx("section", {
      className: "py-20",
      children: _jsx("div", {
        className: "container mx-auto px-4",
        children: _jsxs("div", {
          className: "grid md:grid-cols-3 gap-8",
          children: [_jsx(FeatureCard, {
            icon: _jsx(Brush, {
              className: "h-6 w-6 text-primary-600 dark:text-primary-400"
            }),
            title: "Easy Customization",
            children: "No coding required. Our intuitive interface makes personalizing your site a breeze."
          }), _jsx(FeatureCard, {
            icon: _jsx(Code, {
              className: "h-6 w-6 text-primary-600 dark:text-primary-400"
            }),
            title: "Full Source Code",
            children: "You get the complete HTML, CSS, and JS. No lock-in, your website is truly yours."
          }), _jsx(FeatureCard, {
            icon: _jsx(Rocket, {
              className: "h-6 w-6 text-primary-600 dark:text-primary-400"
            }),
            title: "Free Hosting Guide",
            children: "We guide you on how to host your new website for free, forever."
          })]
        })
      })
    }), _jsx("section", {
      className: "py-10",
      children: _jsx("div", {
        className: "container mx-auto px-4",
        children: _jsx("div", {
          className: "h-40 md:h-60 bg-gray-200 dark:bg-dark-800 rounded-lg flex items-center justify-center",
          children: _jsx("span", {
            className: "text-gray-500 dark:text-gray-400",
            children: "Ad Placeholder"
          })
        })
      })
    }), _jsx("section", {
      className: "py-20 bg-gray-50 dark:bg-dark-900",
      children: _jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [_jsx("h2", {
          className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white",
          children: "Featured Templates"
        }), _jsx("p", {
          className: "mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400",
          children: "A glimpse of what you can create."
        }), _jsx("div", {
          className: "mt-12 grid md:grid-cols-3 gap-8",
          children: featuredTemplates.map(template => _jsx("div", {
            className: "group overflow-hidden rounded-lg shadow-lg",
            children: _jsx("img", {
              src: template.img,
              alt: template.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            })
          }, template.name))
        }), _jsx("div", {
          className: "mt-12",
          children: _jsxs(Link, {
            to: "/templates",
            className: "inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 transition-colors",
            children: ["Explore All Templates ", _jsx(ArrowRight, {
              className: "ml-2 h-4 w-4"
            })]
          })
        })]
      })
    }), _jsx("section", {
      className: "py-20",
      children: _jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [_jsx("h2", {
          className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white",
          children: "Ready to Build Your Site?"
        }), _jsx("div", {
          className: "mt-8",
          children: _jsx(Link, {
            to: "/templates",
            className: "inline-flex items-center justify-center px-10 py-5 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300",
            children: "Start Creating Now"
          })
        })]
      })
    })]
  });
}
export default HomePage;