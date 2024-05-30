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
        next: function () { }
    }
}).mount('#app')