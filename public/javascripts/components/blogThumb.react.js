var React = require('react');

var BlogThumb = React.createClass(
    {
        redirect2Article: function () {
            window.location.href = "blog#" + this.props['blog'];
        },
        getBlogAddress: function () {
            return "blog#" + this.props['blog'];
        },
        render: function () {
            var props = this.props;

            return <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={"images/" + props['img_src']} alt="" onClick={this.redirect2Article}/>

                    <div className="caption">
                        <a href={this.getBlogAddress()}><h3>{props['title']}</h3></a>

                        <p>{props['description']}</p>
                    </div>
                </div>
            </div>;
        }
    });

module.exports = BlogThumb;