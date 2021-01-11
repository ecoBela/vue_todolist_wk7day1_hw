import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            tasks: ["Clean kitchen", "Clear toys", "Do laundry"],
            newTask: ""
        },
        methods: {
            saveNewTask: function(){
                this.tasks.push(this.newTask);
                this.newItem = "";
            }
        }
    });
});




//  create a new instance passing in config object with el: '#app' as starting point.
