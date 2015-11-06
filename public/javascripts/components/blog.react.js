var React = require('react');
var Navigation = require('./navigation.react');
var Signature = require('./blog.signature.react');
var BlogContent = require('./blog.content.react.jsx');
var FooterSmall = require('./footerSmall.react');

var BlogStore = require('../stores/BlogStore');
var BlogAction = require('../actions/BlogAction');

function getBlogState() {
    return {
        blog: BlogStore.getAll()
    };
}

var Blog = React.createClass({
    getInitialState: function () {
        return {blog:{}};
    },
    componentDidMount: function () {
        BlogStore.addChangeListener(this._onChange);
        var hash = window.location.hash;
        BlogAction.getBlog(hash);
    },
    componentWillUnmount: function () {
        BlogStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return <div id="blog">
            <Navigation/>
            <Signature title={this.state.blog.title}/>
            <BlogContent content={this.state.blog.content}/>
            <FooterSmall/>
        </div>;
    },
    _onChange:function(){
        this.setState(getBlogState());
    }
});

module.exports = Blog;