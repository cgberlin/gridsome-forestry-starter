<template>
  <div class="video-wrapper">
    <div class="hero">
      <div class="hero-text-container">
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
      </div>
    </div>
    <video playsinline autoplay muted loop poster="cut.png" id="bgvid">
      <source src="fadecut.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
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
    position:absolute;
    flex-flow: column;
    top:0;
    padding: 5rem;
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
  top: 0; left:0;
  width: 100%; 
  height: 100%; 
  z-index: -1;
  object-fit: cover;
}
.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
}
.hero-text-container {
  padding: 2rem;
}
@media (max-width: 500px) {
  .hero-text-container {
    background-color: transparent;
  }
  .hero-subtitle p {
      font-weight: 700;
  }
}

</style>
