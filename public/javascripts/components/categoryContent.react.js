var React = require('react');
var BlogThumb = require('./blogThumb.react');

var CategoryContent = React.createClass(
    {
        render: function () {
            var categories = this.props.categories;

            var BlogThumbs = [];
            for (var i = 0; i < categories; i++) {
                var category = categories[i];
                BlogThumbs.push(<BlogThumb title={category['title']}
                                           description={category['description']}
                                           img_src={category['img_src']}/>);
            }
            return <div id="category" className="container">
                <div className="row">
                    {
                        //<BlogThumb/>
                        //<BlogThumb/>
                        //<BlogThumb/>
                        //<BlogThumb/>
                        //<BlogThumb/>
                        //<BlogThumb/>
                        //<BlogThumb/>
                        //<BlogThumb/>
                        BlogThumbs
                    }
                </div>
            </div>;
        }
    });

module.exports = CategoryContent;