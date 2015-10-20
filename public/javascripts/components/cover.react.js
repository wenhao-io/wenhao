var React = require('react');
var Footer = require('./footer.react');

var Cover = React.createClass({
    render: function () {
        return <div className="site-wrapper">
            <div className="site-wrapper-inner">
                <div className="cover-container">
                    <div className="inner cover">
                        <div className="row">
                            <img src="images/gundam_circle.png" className="cover-avatar"/>
                        </div>
                        <h1 className="cover-heading">wenhao.io</h1>

                        <p className="lead">热爱新鲜事物,热爱前端技术.</p>

                        <p className="lead">
                            <button className="btn btn-lg btn-wenhao">Let me in !</button>
                        </p>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>;
    }
});

module.exports = Cover;