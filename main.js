var app = Vue.createApp({
    data () {
        return {
            message: 'Hello Vue!',
            seen: true
        }
    }
})

app.mount('#app');

var app2 = Vue.createApp({
    data () {
        return {
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    }
}).mount('#app-2');

var app3 = Vue.createApp({
    data () {
        return {
            todos: [
                {text: "fuck you js"},
                {text: "fuck you css"},
                {text: "fuck you html"}
            ]
        }
    }
}).mount('#app-3');

var app4 = Vue.createApp({
    data () {
        return {
            price: 100,
            quantity: 10
        }
    },
    methods: {
        totalMethod () {
            return this.price * this.quantity;
        }
    },
    computed: {
        totalComputed () {
            return this.price * this.quantity;
        }
    }
    // The function in computed will be computed once until the used attribute value has been changed
}).mount('#app-4');

app4.$data.price = 10

var app5 = Vue.createApp({
    template: '<div>{{ greeting }} is so nice!</div>',
    data () {
        return {
            greeting: 'Hello Vue.js!'
        }
    }
}).mount('#app-5');