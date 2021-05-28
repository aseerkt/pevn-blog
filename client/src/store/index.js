import { createStore } from 'vuex';

export default createStore({
  state: {
    blogCards: [
      {
        blogTitle: 'Blog Card #1',
        blogCoverPhoto:
          'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        blogDate: 'May 1, 2021',
      },
      {
        blogTitle: 'Blog Card #2',
        blogCoverPhoto:
          'https://images.unsplash.com/photo-1551373802-aec2b9a165aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        blogDate: 'May 1, 2021',
      },
      {
        blogTitle: 'Blog Card #3',
        blogCoverPhoto:
          'https://images.unsplash.com/photo-1621168854744-c80a48210aaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        blogDate: 'May 1, 2021',
      },
    ],
    showEditPost: false,
  },
  mutations: {},
  actions: {},
  modules: {},
});
