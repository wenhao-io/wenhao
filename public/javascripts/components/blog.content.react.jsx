var React = require('react');

var Content = React.createClass({
    createBlogContent:function(){
        var content = this.props.content;
        var blogContent = [];
        if(content && content.length>0){
            for(var i=0;i<content.length;i++){
                blogContent.push(this.generateComponent(content[i]));
            }
        }
        return blogContent;
    },
    generateComponent:function(record){
        switch(record['type']){
            case "p":
                return <p>
                    {record['content']}
                </p>;
            case "img":
                return <img src={record['content']}/>;
        }
    },
    render: function () {
        return <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    {this.createBlogContent()}
                </div>
            </div>
        </div>;
    }
});

module.exports = Content;