var React = require('react');

var FooterSmall = React.createClass(
    {
        render: function () {
            return <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p id="footerContent">Copyright © 2015, wenhao.io, All Rights Reserved</p>
                    </div>
                </div>
            </div>;
        }
    });

module.exports = FooterSmall;