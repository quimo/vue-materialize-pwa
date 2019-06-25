import Posts from './posts.js';
export default {
    template: `
    <div id="posts" class="posts">
        <app_posts></app_posts>
    </div>
    `,
    components: {
        app_posts: Posts
    }
}