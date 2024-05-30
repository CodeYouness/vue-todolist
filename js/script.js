const { createApp } = Vue

createApp({
    data() {
        return {
            todolist: [{
                'content': 'Comprare bici',
                'done': false,
                'id': 0
            },
            {
                'content': 'Finire corso Boolean',
                'done': false,
                'id': 1
            },
            {
                'content': 'Riparare orologio',
                'done': false,
                'id': 2
            },
            {
                'content': 'Andare in palestra',
                'done': false,
                'id': 3
            }],
            insertText: ''
        }
    },
    methods: {

        lineToggle: function (indexPosition) {
            this.todolist[indexPosition].done = !this.todolist[indexPosition].done
        },

        removeTask: function (elementIndex) {
            this.todolist.splice(elementIndex, 1)
        },

        addTask: function (newContent) {
            const newTask = {
                'content': '',
                'done': false,
                'id': this.todolist.length
            }
            if (newContent.length > 1) {
                newTask.content = newContent
                this.todolist.push(newTask)
                this.insertText = ''
            }
        },

        overWriteTask: function (index) {
            const newTask = prompt('overwrite the task: ' + this.todolist[index].content)
            if (newTask.length > 1) {
                this.todolist[index].content = newTask

            }
        }
    }
}).mount('#app')