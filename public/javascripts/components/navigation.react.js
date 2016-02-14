var React = require('react');

var Navigation = React.createClass({
        render: function () {
            return <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="/index">WENHAO.IO</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/category">目录</a></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            {
                                //<div className="form-group">
                                //    <input type="text" placeholder="Email" className="form-control"/>
                                //</div>
                                //<div className="form-group">
                                //<input type="password" placeholder="Password" className="form-control"/>
                                //</div>
                            }
                            <button className="btn btn-success">登录 | 注册</button>
                        </form>
                    </div>
                </div>
            </nav>;
        }
    });

module.exports = Navigation;