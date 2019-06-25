
<div class="post">
    <div class="posts__loading" v-if="posts_flag.loading">Loading...</div>
    <div class="posts__error" v-if="posts_flag.error">Error!</div>
    <ul class="posts__items" v-if="posts_flag.loaded">
        <li class="post__item" v-for="post in posts">
            <h2><a target="_blank" v-bind:href="post.guid.rendered">{{ post.title.rendered }}</a></h2>
            <p>slug: {{ post.slug }} | id: {{ post.id }}</p>
            <div class="post__content" v-html="post.content.rendered"></div>
        </li>
    </ul>
    <div style="cursor: pointer; color: green" class="posts__reload" v-if="posts_flag.reload" v-on:click="get_posts()">RELOAD</div>
</div>

<script>
module.exports = {
    data: function() {
        return {
            posts: "gino",
            posts_flag: {
                loading: true,
                loaded: false,
                error: false,
                reload: false
            },
            target_url: 'https://www.simonealati.it/wp-json/wp/v2/posts?per_page=8'
        }
    },
    mounted() {
        this.get_posts();
    },
    methods: {
        get_posts() {
            fetch(this.target_url).then(response => {
                if (response.status >= 100 && response.status < 200) console.log("Informazioni per il client");
                if (response.status >= 300 && response.status < 399) console.log("Redirezione");
                if (response.status >= 400 && response.status < 499) console.log("Richiesta errata");
                if (response.status >= 500 && response.status < 599) console.log("Errore sul server");
                if (response.ok) return response.json();
            })
            .then(posts => {
                this.posts = posts;
                this.posts_flag = {
                    loading: false,
                    loaded: true,
                    reload: true
                }
                if (posts) console.log(posts);
            })
            .catch(() => {
                this.posts_flag.error = true;
            });
        }
    }
}
</script>