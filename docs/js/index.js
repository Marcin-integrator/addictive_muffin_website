import "../css/reset.css";
import "../css/album.css";
import "../css/bootstrap.css";
import "../css/styles.css";

import "./bootstrap.bundle.min.js";

import "./filter.js";
import "./lightbox.js";

var requireContext = require.context("../img", true, /^\.\/.*\.jpg$/);
requireContext.keys().map(requireContext);
