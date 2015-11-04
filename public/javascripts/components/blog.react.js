var React = require('react');
var Navigation = require('./navigation.react');
var Signature = require('./blog.signature.react');
var BlogContent = require('./blog.content.react.jsx');
var FooterSmall = require('./footerSmall.react');

var Blog = React.createClass({
    render: function () {
        return <div id="blog">
            <Navigation/>
            <Signature/>
            <BlogContent/>
            <FooterSmall/>
        </div>;
    }
});

module.exports = Blog;