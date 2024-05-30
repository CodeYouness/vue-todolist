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
        }
    }

}).mount('#app')