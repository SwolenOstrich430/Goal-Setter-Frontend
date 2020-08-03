const getGoalToEdit = (targetId, goals) => {
    for(const goal of goals) {
        if(targetId === goal.id) {
            return goal;
        }
    }
}

const getTasks = (targetId, goals) => {
    const goalToEdit = getGoalToEdit(targetId, goals);
    return goalToEdit.tasks;
}

export default {
    getGoalToEdit, 
    getTasks
}