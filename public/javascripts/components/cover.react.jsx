var React = require('react');
var ReactDOM = require('react-dom');

var Cover = React.createClass({
    render: function() {
        return <div class="site-wrapper">
            <div class="site-wrapper-inner">
                <div class="cover-container">
                    <div class="inner cover">
                        <div class="row">
                            <img src="images/gundam_circle.png" style="width: 240px;height: 240px;"/>
                        </div>
                        <h1 class="cover-heading">wenhao.io</h1>
                        <p class="lead">热爱新鲜事物,热爱前端技术.</p>
                        <p class="lead">
                            <!--<a href="#" class="btn btn-lg btn-pri">Learn more</a>-->
                            <button class="btn btn-lg btn-wenhao" style="width:200px">Let me in !</button>
                        </p>
                    </div>
                    <div class="mastfoot">
                        <div class="inner">
                            <p>Copyright © 2015, wenhao.io, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
});

ReactDOM.render(
    <Cover/>,
    body
);