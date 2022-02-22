const leapYears = function(yr) {

    if(yr%100===0)
    {
        if(yr%400===0)
        {
            return true;
        }
        else{
            return false;
        }
    }

    else if(yr%4===0)
    {
        return true;
    }

    else
    {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
