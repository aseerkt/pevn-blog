<template>
  <div class="home">
    <!-- Blog Posts -->
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in blogPosts"
      :post="post"
      :key="index + 'post'"
    />
    <!-- Blog Cards -->
    <div class="blog-card-wrapper">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="(card, index) in blogCards"
            :card="card"
            :key="index + 'card'"
          />
        </div>
      </div>
    </div>
    <!-- Register Section -->
    <div class="updates">
      <div class="container">
        <h2>Never miss a post, Register for your free account today</h2>
        <router-link class="router-button" :to="{ name: 'Register' }"
          >Register for PVFN Blogs
          <fai icon="chevron-right" class="arrow arrow-light"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from '@/components/BlogPost';
import BlogCard from '@/components/BlogCard';

export default {
  name: 'Home',
  components: {
    BlogPost,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome',
        blogPost:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, eos! Exercitationem natus, dicta labore nobis maxime quos illum iusto unde',
        welcomeScreen: true,
        blogCoverPhoto:
          'https://images.unsplash.com/photo-1561883088-039e53143d73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      },
      blogPosts: [
        {
          title: 'Vue',
          blogHTML: 'I love vue',
          blogCoverPhoto:
            'https://images.unsplash.com/photo-1615399569746-e48b72625137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80',
        },
        {
          title: 'React',
          blogHTML: 'Reactive DOM',
          blogCoverPhoto:
            'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
      ],
    };
  },
  computed: {
    blogCards() {
      return this.$store.state.blogCards;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrapper {
  h3 {
    text-align: left;
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media (min-width: 700px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
