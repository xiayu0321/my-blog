import Article from './article.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

ReactDOM.render(
  <Article />,
  document.getElementById("content")
);

console.log($('#content').text());

if (module.hot) {
  module.hot.accept();
}
