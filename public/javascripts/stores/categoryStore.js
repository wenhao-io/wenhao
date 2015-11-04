var AppDispatcher = require('../dispatcher/CategoryDispatcher');
var EventEmitter = require('events').EventEmitter;
var CategoryConstants = require('../constants/CategoryConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var categories = [];

function getCategoryList(type) {
    $.ajax({
        url: 'category/list',
        type: 'GET',
        dataType: 'json',
        data: {type: type},
        success: function (data) {
            categories = data;
            CategoryStore.emitChange();
        },
        error: function (e) {
            console.log(e);
        }
    });
}

var CategoryStore = assign({}, EventEmitter.prototype, {
    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    getAll: function () {
        return categories;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case CategoryConstants.CATEGORY_SHOW_LIST:
            $.ajax({
                url: 'category/list',
                type: 'GET',
                dataType: 'json',
                data: {type: 'all'},
                success: function (data) {
                    categories = data;
                    CategoryStore.emitChange();
                },
                error: function (e) {
                    console.log(e);
                }
            });
            break;
        default:
    }
});

module.exports = CategoryStore;
