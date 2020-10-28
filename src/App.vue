<template>
  <div id="App">
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1>TIN tasty recipes</h1>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <router-link :to="item.to" exact-active-class="is-active">
              <figure class="image is-24x24">
                <img v-if="key===0" src="@/assets/home.png" /> 
                <img v-if="key===1" src="@/assets/plus.png" /> 
                <img v-if="key===2" src="@/assets/author.png" /> 
  
              </figure> {{item.title}}
            </router-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'App',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: '@/assets/home.png',
          to: '/',
        },
        {
          title: 'Add new!',
          icon: '@/assets/plus.png',
          to:'/recipe/new',
        },
        {
          title: 'Author',
          icon: '@/assets/author.png',
          to: '/author',
        },
      ],
    }
  },
}
</script>

<style>

</style>
