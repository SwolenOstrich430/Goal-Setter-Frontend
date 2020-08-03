import moment from "moment";


class CalendarDisplayFomatter{
    constructor(taskMap, selectedDate, range, dateFormat) {
        this.taskMap = taskMap;
        this.selectedDate = selectedDate;
        this.range = range;
        this.dateFormat = dateFormat;
    }

    getTaskMap() {
        if(this.range === "day") {
            return {
                [this.selectedDate]: this.taskMap[this.selectedDate]
            };
        }

        let segmentedTaskMap = {};
        const datesInRange = this.getDatesInRange();
        
        for(const date of datesInRange) {
            segmentedTaskMap[date] = this.taskMap[date];
        }

        console.log(segmentedTaskMap);
        
    }

    getDatesInRange() {
        let datesInRange = [];
        let currDayInRange = moment(this.selectedDate, this.dateFormat).startOf(this.range);
        let endOfTimeRange = moment(this.selectedDate, this.dateFormat).endOf(this.range);

        if(this.range === "month") {
            currDayInRange = currDayInRange.startOf("week");
        }

        while(!currDayInRange.isAfter(endOfTimeRange)) {
            datesInRange.push(currDayInRange.format(this.dateFormat));
            currDayInRange = currDayInRange.add(1, "days");
        }
        
        return datesInRange;
    }

}

export default CalendarDisplayFomatter;