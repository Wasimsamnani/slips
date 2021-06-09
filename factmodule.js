
module.exports = {
    fact: function (no1) {
        var fact = 1;
        for (var i=1; i<=no1; i++) {
            fact = fact * i;
            
        }
        console.log("fact:" + fact);
    }

}