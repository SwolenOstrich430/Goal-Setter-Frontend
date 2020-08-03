import moment from "moment";
import CalendarDisplayFormatter from "./CalendarDisplayFormatter";

const buildCalendarDisplayFormatter = (goals, dateFormat, selectedDate, range) => {
    const tasks = processGoalsToTasks(goals);
    let taskMap = {};
    let currDate;

    for(const task of tasks) {
        currDate = moment(tasks.endDate).format(dateFormat);

        if(taskMap[currDate]) {
            taskMap[currDate].push(task);
        } else {
            taskMap[currDate] = new Array(task);
        }
    }

    return new CalendarDisplayFormatter(taskMap, selectedDate, range, dateFormat);
}

const processGoalsToTasks = goals => {
        let tasks = [];

        for(const goal of goals) {
            console.log(goal)
            tasks = tasks.concat(goal.tasks);
        }

        return tasks;
    }


export default buildCalendarDisplayFormatter;
