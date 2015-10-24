var React = require('react');
var BlogThumb = require('./blogThumb.react');

var CategoryContent = React.createClass(
    {
        render: function () {
            return <div id="category" className="container">
                <div className="row">
                    <BlogThumb/>
                    <BlogThumb/>
                    <BlogThumb/>
                    <BlogThumb/>
                    <BlogThumb/>
                    <BlogThumb/>
                    <BlogThumb/>
                    <BlogThumb/>
                </div>
            </div>;
        }
    });

module.exports = CategoryContent;