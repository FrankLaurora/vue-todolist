const app = new Vue ({
    el: "#root",

    data: {
        toDoList: [
            {
                toDo: "Fare i compiti",
                done: "undone"
            },

            {
                toDo: "Fare la spesa",
                done: "undone"
            },

            {
                toDo: "Fare il bucato",
                done: "undone"
            }
        ],

        newToDo: ""
    },

    methods: {
        addNewToDo: function(){
            if(this.newToDo != "") {
                this.toDoList.push({
                    toDo: this.newToDo,
                    done: "undone"
                });

                this.newToDo = "";
            }
        },

        removeToDo: function(index){
            this.toDoList.splice(index, 1);
        },

        toDoDone: function(index) {
            if(this.toDoList[index].done == "undone") {
                this.toDoList[index].done = "done";
            } else {
                this.toDoList[index].done = "undone";
            }
        }
    }
});
