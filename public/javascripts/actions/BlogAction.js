var AppDispatcher = require('../dispatcher/BlogDispatcher');
var BlogConstants = require('../constants/BLogConstants');

var BlogActions = {
    getBlog: function (text) {
        AppDispatcher.dispatch({
            actionType: BlogConstants.GET_BLOG_CONTENT,
            text: text
        });
    }
};

module.exports = BlogActions;
