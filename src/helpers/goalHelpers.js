export const getGoalToEditAndIndex = (goalId, goals) => {
    for(const [i, goal] of goals.entries()) {
        if(goal.id === goalId) {
            return [i, goal];
        }
    }
}

export const getNewPlace = (goals, status) => {
    let numInStatus = 0;

    for(const goal of goals) {
        if(goal.status === status) {
            numInStatus++;
        }
    }

    return numInStatus;
}

export const getGoalByPlaceAndStatus = (goals, place, status) => {
    for(const goal of goals) {
        if(goal.status === status && goal.place === place) {
            return goal;
        }
    }
}

export const getTaskByPlaceAndStatus= (tasks, place, isCompleted) => {
    if(typeof isCompleted === "string") {
        isCompleted = isCompleted === "true";
    } 

    for(const task of tasks) {
        if(task.completed === isCompleted && task.place === place) {
            return task;
        }
    }
}