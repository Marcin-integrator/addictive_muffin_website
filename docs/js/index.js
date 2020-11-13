import '../css/album.css';
import '../css/reset.css';
import '../css/bootstrap.min.css';
import '../css/styles.css';

import '../img/watercolor-bokeh-pastel-background.jpg';

import './bootstrap.bundle.min.js';

import './filter.js';
/*
function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));*/

var requireContext = require.context("../img", true, /^\.\/.*\.jpg$/);
requireContext.keys().map(requireContext);
console.log(requireContext);