var React = require('react');

var Signature = React.createClass(
    {
        render: function () {
            return <div id="signature" className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h1>{this.props.title}</h1>
                        </div>
                        <div className="col-lg-3">
                            <img src="images/gundam_circle.png"/>
                        </div>
                    </div>
                </div>
            </div>;
        }
    });

module.exports = Signature;