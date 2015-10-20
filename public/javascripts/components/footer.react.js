var React = require('react');

var Footer = React.createClass({
    render: function () {
        return <div className="mastfoot">
            <div className="inner">
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright © 2015, wenhao.io, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    }
});

module.exports = Footer;