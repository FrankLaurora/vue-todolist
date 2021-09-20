const app = new Vue ({
    el: "#root",

    data: {
        toDoList: [
            {
                toDo: "Fare i compiti",
                done: false
            },

            {
                toDo: "Fare la spesa",
                done: false
            },

            {
                toDo: "Fare il bucato",
                done: false
            }
        ],

        newToDo: ""
    },

    methods: {
        addNewToDo: function(){
            if(this.newToDo != "") {
                this.toDoList.push({
                    toDo: this.newToDo,
                    done: false
                });

                this.newToDo = "";
            }
        },

        removeToDo: function(index){
            this.toDoList.splice(index, 1);
        }
    }
});
