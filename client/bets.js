Bets = new Meteor.Collection('bets');

// bet list template
Template.createBet.init = function () {
      // for the dial pad stuff
    setTimeout(function(){
        $(".dial").append("€");
        
        $(".dial-bet-amount").knob({
                     'change' : function (v) {  },
                     'release' : function (v) { console.log(v); }
                    });
        
        $(".dial-bet-end-date").knob({
                     'change' : function (v) {  },
                     'release' : function (v) { console.log(v); }
                    });
        
        
        
        $(".dial-bet-amount").on("click", function(){
            $(".notification").html("Nice one, now select when the Bet will end!");
            $("#betAmount").hide();
            $("#betEndDate").show();
            $(".notification").hide();
        });
        
        
        $(".dial-bet-end-date").on("click", function(){
            $(".notification").html("It'sson!");
        });

    },0);
};

Template.betList.bets = function () {
    var pram = Session.get('sortBy'),
        allBets;

    switch(pram){
        case 'amount':
            allBets = Bets.find({}, {sort: {amount: 1}});
            break;
        case 'enddate':
            allBets = Bets.find({}, {sort: {endDate: -1}});
            break;
        case 'name':
            allBets = Bets.find({}, {sort: {name: -1}});
    }
    
    setTimeout(function () {
<<<<<<< HEAD
    $('.iconsearchbutton').bind('click', function () {
        var id = $('#searchButton').val(),
            bet = Bets.find({}),
            _id;
        for (var obj in bet.collection.docs) {
            if (bet.collection.docs[obj].betId) {
                _id = (parseInt(id) === parseInt(bet.collection.docs[obj].betId)) ? _id = obj : null;
            }
        }
        if(_id != null) {
            Session.set('currentRoomId','startBet');
            Session.set('createdGroup',_id);
            window.location.hash = _id;
            $('#content').html(getCurrentPageView());
            Template.startBet.bet();
        }
    });
=======
>>>>>>> efac37befafbb72dbc586b15463ae151e0d8ed39

        $('.entry').bind('click', function () {
            var _id = $(this).data('id');
            
            Session.set('currentRoomId','startBet');
            Session.set('createdGroup',_id);
            window.location.hash = _id;
            $('#content').html(getCurrentPageView());
            Template.startBet.bet();
        });

        $('.watch').bind('click', function(e) {
            e.stopImmediatePropagation();
            var _id = $(this).parents('.entry').data('id');
            $(this).css('backgroound-color', 'red');
            console.log($(this));
            Bets.update({_id: _id}, {$push: {watchers: 'sam'}});
        });

    },0);
       
    
    allBets.totalPot = allBets.amount
    return allBets;
};

Template.startBet.bet = function () {
    
    var _id = (window.location.hash.substr(1)).split('#').toString();
    
    setTimeout(function() {
    $('#betbutton').on('click', function(e) {
        e.preventDefault();
        console.log($(this));
        if ($(this).attr('disabled') != 'disabled'){
                
            $('#betbutton').val('Involved').attr('disabled','disabled');
            var bet = Bets.findOne({_id:_id});
            
            Bets.update({_id: _id}, {$push: {betters: 'sam'}});
        }
        
    });
    },0);
    
    
	bet = Bets.findOne({_id: _id});
    
    setTimeout(function(){
        var austDay = bet.endDate;
        $('#defaultCountdown').countdown({until: austDay});
        $('#year').text(austDay.getFullYear());
    },0);
    
    return bet;
};


Handlebars.registerHelper ('getTotalPot', function (amount, betters) {
    return (amount*betters.length);
});

Handlebars.registerHelper ('convertDate', function (date) {
    return date.getDate() + '/' +  (date.getMonth()+1) + '/' + date.getFullYear();
});


// create bet template events
Template.createBet.events = {
    
    // submit event
    'submit': function (e, tmpl) {
        e.preventDefault();
        var hours = tmpl.find('#endDate').value;
        var bet = {
            name: tmpl.find('#betName').value,
            amount: tmpl.find('#betAmountInput').value,
            countryOrigin: 'Malta',
            startDate: new Date(),
            endDate: new Date().addHours(hours),
            betters: [{
                user: 'sam'
            }],
            watchers: [{
                user: 'sam'
            }],
            public: tmpl.find('input[name=radio]:checked').value,
            betId: Math.floor((Math.random()*999999)+000000)
        };
        
        var _id = Bets.insert(bet, function(err,obj){
            return obj;
        });

        Session.set('currentRoomId','startBet');
        Session.set('createdGroup',_id);
        window.location.hash = _id;
        $('#content').html(getCurrentPageView());
        Template.startBet.bet();
    },
    'change': function(){console.log('changed');}
};



$(function(){
    $('#content').html(getCurrentPageView());
});


