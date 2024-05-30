const { createApp } = Vue

createApp({
    data() {
        return {
            todolist: [{
                'content': 'patate',
                'done': false
            },
            {
                'content': 'carote',
                'done': true
            },
            {
                'content': 'cipolle',
                'done': false
            }]
        }
    },
    methods: {

        lineToggle: function (indexPosition) {
            this.todolist[indexPosition].done = !this.todolist[indexPosition].done
        },

        removeTask: function (elementIndex) {
            this.todolist.splice(elementIndex, 1)
        },

        addTask: function () {
            const newTask = {
                'content': '',
                'done': false
            }

        }
    }
}).mount('#app')