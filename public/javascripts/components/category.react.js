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
            return {categories:[]};
        },
        //componentWillMount:function(){
        //    //CategoryActions.getCategoryList('all');
        //},
        //componentDidMount: function () {
        //    CategoryActions.getCategoryList('all');
        //    TodoStore.addChangeListener(this._onChange);
        //    this.setState(getCategoryState());
        //},
        componentDidMount: function () {
            CategoryStore.addChangeListener(this._onChange);
            CategoryActions.getCategoryList('all');
        },

        componentWillUnmount: function () {
            CategoryStore.removeChangeListener(this._onChange);
        },
        render: function () {
            var cate = this.state.categories;
            console.log(cate);
            return <div id="category">
                <Navigation/>
                <Signature/>
                <CategoryContent categories={this.state.categories}/>
                <FooterSmall/>
            </div>;
        },

        _onChange:function(){
            this.setState(getCategoryState());
        }
    });

module.exports = Category;