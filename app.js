const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', age: 44, img: 'assets/1.jpg' },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', age: 42, img: 'assets/2.jpg'},
                { title: 'Good Omens', author: 'Terry Pratchett & Neil Gaiman', age: 41, img: 'assets/3.jpg'},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log(e, e.type)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');