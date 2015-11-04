var React = require('react');

var Signature = React.createClass(
    {
        render: function () {
            return <div id="signature" className="jumbotron">
                <div className="container">
                    <img src="images/gundam_circle.png"/>
                </div>
            </div>;
        }
    });

module.exports = Signature;