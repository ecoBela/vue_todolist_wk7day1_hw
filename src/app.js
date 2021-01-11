import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            tasks: ["Clean kitchen", "Clear toys", "Do laundry"],
        },
        methods: {}
    });
});




//  create a new instance passing in config object with el: '#app' as starting point.
