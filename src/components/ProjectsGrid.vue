<template>
  <div class="projects">
    <div class="project" v-for="item in projects" :key="item.node.id">
      <g-link :to="item.node.path" class="project-link">
        <g-image
          :src="item.node.thumbnail"
          :alt="item.node.title"
          class="thumbnail"
        />
        <h3 class="project-title">{{ item.node.title }}</h3>
        <div class="categories">
          <span
            class="category"
            v-for="(item, index) in item.node.categories"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.project {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 42%;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: auto;
  min-width: 100%;
  object-fit: contain;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
  word-wrap: break-word;
  width: 100%;
  margin: 0 auto;
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}

@media (min-width: 920px) {
}
@media (max-width: 600px) {
  .project {
    width: 90vw;
    margin-top: 5rem;
  }
  .thumbnail {
    height: auto;
    width: 90vw;
    object-fit: contain;
    transition: all 0.15s ease;
    box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
  }
}
</style>
