var React = require('react');
var Navigation = require('./navigation.react');
var Signature = require('./signature.react');
var Content = require('./categoryContent.react');
var FooterSmall = require('./footerSmall.react.js');

var Category = React.createClass(
    {
        render: function () {
            return <div id="category">
                <Navigation/>
                <Signature/>
                <Content/>
                <FooterSmall/>
            </div>;
        }
    });

module.exports = Category;