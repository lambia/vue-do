const { createApp } = Vue

createApp({
    data() {
        return {
            userInput: "",
            inputError: false,
            tasks: [
                {
                    text: "Completare milestone 1",
                    done: true
                },
                {
                    text: "Controllare che tutto funzioni",
                    done: true
                },
                {
                    text: "Fare pausa",
                    done: false
                },
                {
                    text: "Pushare",
                    done: false
                },
            ]
        }
    },
    methods: {
        //metodo di delete
        deleteTask(i) {
            console.log("delete", i);
            this.tasks.splice(i, 1);
        },
        //metodo di inserimento
        addTask() {
            console.log("add", this.userInput);

            if(this.userInput.length < 3) {
                this.inputError = true;
            } else {
    
                //aggiungi nuovo oggeto all'array
                this.tasks.unshift({
                    text: this.userInput,
                    done: false
                });
    
                //resettiamo valori iniziali
                this.userInput = "";
                this.inputError = false;
            }

        },
        //metodo di toggle per il done
        checkTask(i) {
            console.log("check", i);

            this.tasks[i].done = !this.tasks[i].done;
        }
    },
    mounted() {
        
    }
}).mount('#app')