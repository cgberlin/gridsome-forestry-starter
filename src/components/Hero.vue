<template>
  <div class="video-wrapper">
    <div class="hero">
      <div class="hero-text-container">
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
      </div>
    </div>
    <video playsinline autoplay muted loop poster="backg1.png" id="bgvid">
      <source src="backg.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
};
</script>

<style lang="scss">
.hero {
  text-align: center;
  width: 480px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  flex-flow: column;
  top: 0;
  z-index: 10;
}
.video-wrapper {
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
#bgvid {
  width: 100%;
  max-height: 100%;
}
.header-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}
.hero-title {
  font-size: 3rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
  color: black;
}
.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 2rem;
  font-weight: 100;
  padding: 0;
  margin: 0;
  color: black;
}
.hero-text-container {
  height: 92%;
  justify-content: space-between;
  display: flex;
  flex-flow: column;
}
@media (max-width: 500px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1.5rem;
  }
}
</style>
