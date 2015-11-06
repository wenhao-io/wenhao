var React = require('react');

var Content = React.createClass({
    render: function () {
        return <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    {this.props.content}
                </div>
            </div>
        </div>;
    }
});

module.exports = Content;