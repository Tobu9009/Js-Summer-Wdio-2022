const moment = require("moment")
class MyMomentFunctions{
    static getCurrentDate(){   //simply just a helping function, static so only need class name and function name to use 
        return moment().date();
    }
}
