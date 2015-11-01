var React = require('react');

var BlogThumb = React.createClass(
    {
        redirect2Article: function () {
            window.location.href = "article/" + this.props['article'];
        },
        render: function () {
            var props = this.props;

            return <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={"images/" + props['img_src']} alt="" onClick={this.redirect2Article}/>

                    <div className="caption">
                        <h3 onClick={this.redirect2Article}>{props['title']}</h3>

                        <p>{props['description']}</p>
                    </div>
                </div>
            </div>;
        }
    });

module.exports = BlogThumb;