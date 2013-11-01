Session.set('currentRoomId','createBet');
Session.set('sortBy','amount');


getCurrentPageView = function () {
    var room = Session.get('currentRoomId');
    return Meteor.render( function () {
        return Template[ room ]();
    });
};
getView = function (view) {
    return Meteor.render( function () {
        return Template[ view ]();
    });
};



$(function(){
    $('#viewBets').on('click', function () {
        if (Session.get('currentRoomId') === 'betList') {
            Session.set('currentRoomId','createBet');
        } else {
            Session.set('currentRoomId','betList');
        }
        $('#content').html(getCurrentPageView());
    });
});

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime()+(h*60*60*1000));
    return this;
};