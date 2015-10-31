var React = require('react');

var BlogThumb = React.createClass(
    {
        render: function () {
            var props = this.props;

            return <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={"images/" + props['img_src']} alt=""/>

                    <div className="caption">
                        <h3>{props['title']}</h3>

                        <p>{props['description']}</p>
                    </div>
                </div>
            </div>;
        }
    });

module.exports = BlogThumb;