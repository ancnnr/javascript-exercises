const sumAll = function(val1, val2) {
    if(typeof val1 === 'number' && typeof val2 === 'number' && val1>=0 && val2>=0)
    {
        let max = val1;
        let min = val2;
        if(val2>val1)
        {
            max=val2;
            min=val1;
        }

        let sum = 0;

        for(i=min; i<=max; i++)
        {
            sum+=i;
        }
        return sum;
    }

    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
