var AppDispatcher = require('../dispatcher/CategoryDispatcher');
var CategoryConstants = require('../constants/CategoryConstants');

var CategoryActions = {
    getCategoryList: function (text) {
        AppDispatcher.dispatch({
            actionType: CategoryConstants.CATEGORY_SHOW_LIST,
            text: text
        });
    }
};

module.exports = CategoryActions;
