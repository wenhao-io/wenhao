var AppDispatcher = require('../dispatcher/BlogDispatcher');
var EventEmitter = require('events').EventEmitter;
var BlogConstants = require('../constants/BlogConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var blog = {};

var BlogStore = assign({}, EventEmitter.prototype, {
    getBlog: function () {
        return blog;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case BlogConstants.GET_BLOG_CONTENT:
            var title = action.text.trim().replace(/#/,'');
            $.ajax({
                url: '/api/getBlog',
                type: 'GET',
                dataType: 'json',
                data: {title: title},
                success: function (data) {
                    blog = data;
                    BlogStore.emitChange();
                },
                error: function (e) {
                    console.log(e);
                }
            });
            break;
        default:
    }
});

module.exports = BlogStore;