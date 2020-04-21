
    export const saveState = (key,state) => {
        localStorage.setItem("our-state" + key , JSON.stringify(state));
    };

    export const restoreState = (key, defaultState) => {
        let state = defaultState;
        let stateAsString = localStorage.getItem("our-state" + key);
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
         this.setState(state, () => {
            this.state.tasks.forEach(task => {
                if (task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1;
                }
            })
        });
    };
