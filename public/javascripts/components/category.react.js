var React = require('react');
var Navigation = require('./navigation.react');
var Signature = require('./signature.react');
var CategoryContent = require('./categoryContent.react');
var FooterSmall = require('./footerSmall.react.js');
var CategoryStore = require('../stores/CategoryStore');
var CategoryActions = require('../actions/CategoryAction');


function getCategoryState() {
    return {
        categories: CategoryStore.getAll()
    };
}

var Category = React.createClass(
    {
        getInitialState: function () {
            return getCategoryState();
        },
        componentWillMount:function(){
            CategoryActions.getCategoryList('all');
        },
        render: function () {
            return <div id="category">
                <Navigation/>
                <Signature/>
                <CategoryContent categories={this.state.categories}/>
                <FooterSmall/>
            </div>;
        }
    });

module.exports = Category;