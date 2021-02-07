<template>
  <div class="hello"></div>
  <!-- scss project -->
  <div :class="myTheme">
    <header>
      <div class="header-container">
        <div class="logo">
          <h1 class="logo__title">Living in {{ myTheme }}</h1>
          <p class="logo__description">A blog exploring minimalism in life</p>
        </div>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item nav__item--active"><a href="">Home</a></li>
            <li class="nav__item"><a href="">About me</a></li>
            <li class="nav__item"><a href="">Recent posts</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="container">
      <!-- ! Main content -->
      <main role="main" class="main">
        <article class="featured-article">
          <h2 class="featured-article__title">Finding simplicity in life</h2>
          <img
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
            class="featured-article__img"
            alt="simplistic wall and table"
          />
          <p class="featured-article__date">July 23, 2019 | 3 comments</p>
          <p class="featured-article__description">
            <span>Life can get complicated really quickly</span>, but it doesn't
            have to be! There are many ways to simplify your life,
            <a href="#">a few of which we've explored in the past</a>. This week
            we're taking a bit of a approach though, in how you can find
            simplicity in the life you already living.
          </p>
          <a href="#" class="featured-article__continue-reading"
            >Continue reading</a
          >
        </article>
        <article class="recent-article">
          <div class="recent-article__information">
            <h2 class="recent-article__title">Keeping cooking simple</h2>
            <p class="recent-article__description">
              Food is a very important part of everyone's life. If you want to
              be healthy, you have to eat healthy. One of the easiest ways to do
              that is to keep your cooking nice and simple.
            </p>
            <a href="#" class="recent-article__continue-reading"
              >Continue reading</a
            >
          </div>
          <div class="recent-article__img-with-date">
            <img
              src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
              class="recent-article__img"
              alt="plate with food and chinese sticks"
            />
            <p class="recent-article__date">July 19, 2019 | 3 comments</p>
          </div>
        </article>
        <article class="recent-article">
          <div class="recent-article__information">
            <h2 class="recent-article__title">Simplicity and work</h2>
            <p class="recent-article__description">
              Work is often a major source of stress. People get frustrated, it
              ruins their relationship with others and it leads to burnout. By
              keeping your work life as simple as possible, it will help balance
              everything out.
            </p>
            <a href="#" class="recent-article__continue-reading"
              >Continue reading</a
            >
          </div>
          <div class="recent-article__img-with-date">
            <img
              src="https://image.freepik.com/free-photo/view-working-interior-with-white-wall-empty-room_41470-347.jpg"
              class="recent-article__img"
              alt="simplistic white office environment"
            />
            <p class="recent-article__date">July 12, 2019 | 3 comments</p>
          </div>
        </article>
        <article class="recent-article">
          <div class="recent-article__information">
            <h2 class="recent-article__title">Simple decorations</h2>
            <p class="recent-article__description">
              A home isn't a home until you've decorated a little. People either
              don't decorate, or they go overboard and it doesn't have the
              impact they were hoping for. Staying simple will help draw the eye
              where you want it to and make things pop like never before.
            </p>
            <a href="#" class="recent-article__continue-reading"
              >Continue reading</a
            >
          </div>
          <div class="recent-article__img-with-date">
            <img
              src="https://talentvanguard.files.wordpress.com/2017/03/leaf-vase-sarah-dorweiler.png"
              class="recent-article__img"
              alt="vase with leaf in it"
            />
            <p class="recent-article__date">July 3, 2019 | 3 comments</p>
          </div>
        </article>
      </main>
      <!-- ! Aside content -->
      <aside class="sidebar">
        <div class="sidebar-widget">
          <h2 class="sidebar-widget__title">ABOUT ME</h2>
          <img
            src="https://images.unsplash.com/photo-1548213238-0da7521bd6e0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
            alt="smiling man outdoors"
            class="sidebar-widget__img"
          />
          <p class="sidebar-widget__description">
            I find life better, and I'm happier, when things are nice and
            simple.
          </p>
        </div>
        <div class="sidebar-widget">
          <h2 class="sidebar-widget__title">RECENT POSTS</h2>
          <div class="sidebar-widget-recent sidebar-widget-recent--spacing-top">
            <h2 class="sidebar-widget-recent__title">Keeping cooking simple</h2>
            <img
              src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
              alt="plate with food and chinese sticks"
              class="sidebar-widget-recent__img"
            />
          </div>
          <div class="sidebar-widget-recent">
            <h2 class="sidebar-widget-recent__title">Simplicity and work</h2>
            <img
              src="https://image.freepik.com/free-photo/view-working-interior-with-white-wall-empty-room_41470-347.jpg"
              alt="simplistic white office environment"
              class="sidebar-widget-recent__img"
            />
          </div>
          <div
            class="sidebar-widget-recent sidebar-widget-recent--spacing-bottom"
          >
            <h2 class="sidebar-widget-recent__title">Simple decorations</h2>
            <img
              src="https://talentvanguard.files.wordpress.com/2017/03/leaf-vase-sarah-dorweiler.png"
              alt="vase with leaf in it"
              class="sidebar-widget-recent__img"
            />
          </div>
        </div>
      </aside>
    </div>
    <footer class="footer">
      <h2 class="footer__title">Living the Simple Life</h2>
      <p class="footer__description">Copyright 2019</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore(key);
    const myTheme = ref<string>("light");

    setInterval(() => {
      console.log("mytheme", myTheme.value);
      myTheme.value = store.getters.currentTheme.theme;
      console.log("store theme from home");
    }, 1000);

    return { myTheme };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// ! Header section

.light {
  background-color: #d3d3d3;
  color: rgb(53, 53, 53);
  p {
    color: rgb(32, 32, 32);
  }
  header {
    background-color: #919191;
    text-align: center;
  }

  .header-container {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0;
  }

  .logo {
    &__title {
      font-size: 2rem;
      letter-spacing: 0.15rem;
      font-family: "Lora", serif, sans-serif;

      font-weight: 400;
      margin: 0;
    }

    &__description {
      font-size: 0.75rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;

      font-weight: 700;
      margin: 0;
      text-align: left;
    }
  }
  //* Navigation
  .nav {
    &__list {
      list-style-type: none;
      display: flex;
      justify-content: center;
      padding: 0;
    }
    &__item {
      margin-left: 2em;
      padding: 0.25em 0;
      a {
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.1rem;

        text-transform: uppercase;
        padding: 0.9em 0;
        text-align: center;
      }
      a:hover,
      a:focus {
      }
    }
    &__item--active {
      border-bottom: 2px solid #707070;
    }
  }
  //* End of header section */

  //* Footer section */
  .footer {
    display: block;

    text-align: center;
    padding: 2em 0;

    margin: 0;
    &__title {
      font-size: 1rem;
      margin: 0;
      line-height: 1.75rem;
    }

    &__description {
      margin: 0;
      font-size: 0.75rem;
    }
  }
  //* End of footer section */

  //* Responsiveness */
  @media (max-width: 700px) {
    .header-container {
      flex-direction: column;
      padding-bottom: 0.5em;
    }
    .logo {
      &__title {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
      }

      &__description {
        font-size: 0.5rem;
        letter-spacing: 0.1rem;
        margin-top: 0.5em;
        text-align: center;
      }
    }
    .nav {
      &__list {
        flex-direction: column;
        padding: 0;
      }
      &__item {
        margin-left: 0;
        padding: 0.5em 0;
        a {
          font-size: 0.8rem;
          padding: 0;
        }
        a:hover,
        a:focus {
        }
      }
      &__item--active {
        border-bottom: 2px solid #707070;
        width: fit-content;
        margin: 0 auto;
      }
    }
  }
  .container {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
    padding-bottom: 3em;
  }
  .main {
    width: 75%;
  }
  a {
  }
  .sidebar {
    width: 20%;
    display: flex;
    flex-direction: column;
    row-gap: 3em;
  }
  .featured-article {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #70707052;
    padding-bottom: 1.5em;

    &__img {
      order: 1;
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
    &__date {
      order: 2;
      color: #707070;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 0.875rem;
      margin-bottom: 2em;
    }
    &__title {
      order: 3;

      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }
    &__description {
      order: 4;

      font-size: 1rem;
      line-height: 1.75rem;
      margin-top: 1em;
    }
    &__continue-reading {
      order: 5;

      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
    }
    span {
      font-weight: 700;
    }
  }

  .recent-article {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 2em;
    align-items: flex-start;
    &__img-with-date {
      width: 35%;
    }

    &__img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }

    &__information {
      width: 60%;
      margin: 0;
      padding: 0;
    }
    &__title {
      margin: 0;
      font-family: "Lora", serif, sans-serif;
      font-weight: 400;

      padding-bottom: 0.5em;
      font-size: 1.5rem;
    }
    &__date {
      order: 2;

      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 0.875rem;
      margin-bottom: 2em;
    }
    &__description {
      padding-bottom: 1em;
    }

    &__continue-reading {
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
    }
  }

  .sidebar-widget {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 20px solid #ebebeb;
    padding: 1em;
    &__title {
      font-size: 1rem;
      margin-top: 0;
    }

    &__description {
      font-size: 0.7rem;
    }

    &__img {
      width: 100%;
      object-fit: cover;
      max-height: 100px;
      padding: 0 0 0.75em 0;
    }
  }

  .sidebar-widget-recent {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #70707052;
    padding: 1em 0;
    &__title {
      font-size: 0.8rem;
      font-weight: 400;
      order: 2;

      font-family: "Lora", serif, sans-serif;
      margin-bottom: 0;
    }
    &__img {
      width: 100%;
      order: 1;
      object-fit: cover;
    }
    &--spacing-bottom {
      border-bottom: none;
      padding-bottom: 0;
    }
    &--spacing-top {
      padding-top: 0;
    }
  }

  //* Responsiveness */
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: center;
      padding-bottom: 1.5em;
    }
    .main {
      width: 100%;
      margin-bottom: 2em;
      padding-bottom: 1em;
      border-bottom: 4px solid #70707052;
    }
    .sidebar {
      width: 100%;
      row-gap: 0;
    }
    .featured-article {
      &__title {
        font-size: 1.1rem;
        margin: 0;
        font-weight: 700;
      }
      &__description {
        font-size: 0.75rem;
        line-height: 1.2rem;
      }
      &__continue-reading {
        font-size: 0.6rem;
      }
    }
    .recent-article {
      flex-direction: column-reverse;
      justify-content: center;

      &__img-with-date {
        width: 100%;
      }

      &__img {
        width: 100%;
      }

      &__date {
        text-align: end;
        font-size: 0.7rem;
        margin: 0;
      }

      &__information {
        width: 100%;
      }

      &__title {
        margin: 0;
        padding-bottom: 0;
        font-size: 1rem;
        font-weight: 700;
      }

      &__description {
        padding-bottom: 0;
      }

      &__continue-reading {
        font-size: 0.6rem;
        padding-bottom: 0.5em;
      }
    }

    .sidebar-widget {
      justify-content: center;
      border: 10px solid #ebebeb;
      margin-bottom: 2em;
      &__description {
        font-size: 0.75rem;
        color: #143774;
        line-height: 1rem;
      }

      &__img {
        padding: 0.25em 0 0.5em 0;
      }
    }

    .sidebar-widget-recent {
      &__title {
        font-weight: 700;
      }
    }
  }
}

//dark mode scss
.dark {
  background-color: #2c2c2c;
  color: white;
  p {
    color: #ffffff;
  }
  header {
    text-align: center;
  }

  .header-container {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0;
  }

  .logo {
    &__title {
      font-size: 2rem;
      letter-spacing: 0.15rem;
      font-family: "Lora", serif, sans-serif;

      font-weight: 400;
      margin: 0;
    }

    &__description {
      font-size: 0.75rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;

      font-weight: 700;
      margin: 0;
      text-align: left;
    }
  }
  //* Navigation
  .nav {
    &__list {
      list-style-type: none;
      display: flex;
      justify-content: center;
      padding: 0;
    }
    &__item {
      margin-left: 2em;
      padding: 0.25em 0;
      a {
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.1rem;

        text-transform: uppercase;
        padding: 0.9em 0;
        text-align: center;
      }
      a:hover,
      a:focus {
      }
    }
    &__item--active {
      border-bottom: 2px solid #707070;
    }
  }
  //* End of header section */

  //* Footer section */
  .footer {
    display: block;

    text-align: center;
    padding: 2em 0;

    margin: 0;
    &__title {
      font-size: 1rem;
      margin: 0;
      line-height: 1.75rem;
    }

    &__description {
      margin: 0;
      font-size: 0.75rem;
    }
  }
  //* End of footer section */

  //* Responsiveness */
  @media (max-width: 700px) {
    .header-container {
      flex-direction: column;
      padding-bottom: 0.5em;
    }
    .logo {
      &__title {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
      }

      &__description {
        font-size: 0.5rem;
        letter-spacing: 0.1rem;
        margin-top: 0.5em;
        text-align: center;
      }
    }
    .nav {
      &__list {
        flex-direction: column;
        padding: 0;
      }
      &__item {
        margin-left: 0;
        padding: 0.5em 0;
        a {
          font-size: 0.8rem;
          padding: 0;
        }
        a:hover,
        a:focus {
        }
      }
      &__item--active {
        border-bottom: 2px solid #707070;
        width: fit-content;
        margin: 0 auto;
      }
    }
  }
  .container {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
    padding-bottom: 3em;
  }
  .main {
    width: 75%;
  }
  a {
  }
  .sidebar {
    width: 20%;
    display: flex;
    flex-direction: column;
    row-gap: 3em;
  }
  .featured-article {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #70707052;
    padding-bottom: 1.5em;

    &__img {
      order: 1;
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
    &__date {
      order: 2;

      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 0.875rem;
      margin-bottom: 2em;
    }
    &__title {
      order: 3;

      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }
    &__description {
      order: 4;

      font-size: 1rem;
      line-height: 1.75rem;
      margin-top: 1em;
    }
    &__continue-reading {
      order: 5;

      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
    }
    span {
      font-weight: 700;
    }
  }

  .recent-article {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 2em;
    align-items: flex-start;
    &__img-with-date {
      width: 35%;
    }

    &__img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }

    &__information {
      width: 60%;
      margin: 0;
      padding: 0;
    }
    &__title {
      margin: 0;
      font-family: "Lora", serif, sans-serif;
      font-weight: 400;

      padding-bottom: 0.5em;
      font-size: 1.5rem;
    }
    &__date {
      order: 2;

      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 0.875rem;
      margin-bottom: 2em;
    }
    &__description {
      padding-bottom: 1em;
    }

    &__continue-reading {
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
    }
  }

  .sidebar-widget {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 20px solid #ebebeb;
    padding: 1em;
    &__title {
      font-size: 1rem;
      margin-top: 0;
    }

    &__description {
      font-size: 0.7rem;
    }

    &__img {
      width: 100%;
      object-fit: cover;
      max-height: 100px;
      padding: 0 0 0.75em 0;
    }
  }

  .sidebar-widget-recent {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #70707052;
    padding: 1em 0;
    &__title {
      font-size: 0.8rem;
      font-weight: 400;
      order: 2;

      font-family: "Lora", serif, sans-serif;
      margin-bottom: 0;
    }
    &__img {
      width: 100%;
      order: 1;
      object-fit: cover;
    }
    &--spacing-bottom {
      border-bottom: none;
      padding-bottom: 0;
    }
    &--spacing-top {
      padding-top: 0;
    }
  }

  //* Responsiveness */
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: center;
      padding-bottom: 1.5em;
    }
    .main {
      width: 100%;
      margin-bottom: 2em;
      padding-bottom: 1em;
      border-bottom: 4px solid #70707052;
    }
    .sidebar {
      width: 100%;
      row-gap: 0;
    }
    .featured-article {
      &__title {
        font-size: 1.1rem;
        margin: 0;
        font-weight: 700;
      }
      &__description {
        font-size: 0.75rem;
        line-height: 1.2rem;
      }
      &__continue-reading {
        font-size: 0.6rem;
      }
    }
    .recent-article {
      flex-direction: column-reverse;
      justify-content: center;

      &__img-with-date {
        width: 100%;
      }

      &__img {
        width: 100%;
      }

      &__date {
        text-align: end;
        font-size: 0.7rem;
        margin: 0;
      }

      &__information {
        width: 100%;
      }

      &__title {
        margin: 0;
        padding-bottom: 0;
        font-size: 1rem;
        font-weight: 700;
      }

      &__description {
        padding-bottom: 0;
      }

      &__continue-reading {
        font-size: 0.6rem;
        padding-bottom: 0.5em;
      }
    }

    .sidebar-widget {
      justify-content: center;
      border: 10px solid #ebebeb;
      margin-bottom: 2em;
      &__description {
        font-size: 0.75rem;

        line-height: 1rem;
      }

      &__img {
        padding: 0.25em 0 0.5em 0;
      }
    }

    .sidebar-widget-recent {
      &__title {
        font-weight: 700;
      }
    }
  }
}
</style>
