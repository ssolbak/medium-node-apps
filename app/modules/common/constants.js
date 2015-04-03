module.exports = {
    position : {
        left_wing : 'lw',
        right_wing : 'rw',
        center : 'c',
        defence : 'd',
        goalie : 'g',
        isForward : function(pos){
            return !!_['lw','rw','c'].indexOf(pos);
        }
    },
    events: {
        createPlayer: 'player:create',
        createDraft: 'draft:create',
        pickupPlayer: 'roster:player:pickup',
        dropPlayer: 'roster:player:drop'
    }
};
