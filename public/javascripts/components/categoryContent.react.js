var React = require('react');
var BlogThumb = require('./blogThumb.react');

var CategoryContent = React.createClass(
    {
        render: function () {
            var categories = this.props.categories;
            var BlogThumbs = [];
            var len = categories.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    var category = categories[i];
                    BlogThumbs.push(<BlogThumb title={category['title']}
                                               description={category['description']}
                                               img_src={category['img_src']}
                                               article={category['article']}
                        />);
                }
            }

            return <div id="category" className="container">
                <div className="row">
                    {BlogThumbs}
                </div>
            </div>;
        }
    });

module.exports = CategoryContent;