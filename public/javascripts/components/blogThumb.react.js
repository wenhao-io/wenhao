var React = require('react');

var BlogThumb = React.createClass(
    {
        render: function () {
            return <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="images/bkg.jpg" alt=""/>

                    <div className="caption">
                        <h3>nodejs的多线程</h3>

                        <p>nodejs的多线程nodejs的多线程nodejs的多线程nodejs的多线程nodejs的多线程</p>
                    </div>
                </div>
            </div>;
        }
    });

module.exports = BlogThumb;