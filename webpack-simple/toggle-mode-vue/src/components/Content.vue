<template>
  <div class="content">
    <h3>This is {{ mode }} mode</h3>
    <div class="image-grid">
      <div class="col">
        <img src="../assets/p1.jpg" alt="">
      </div>
      <div class="col">
        <img src="../assets/p2.jpg" alt="">
      </div>
      <div class="col">
        <img src="../assets/p3.jpg" alt="">
      </div>
      <div class="col">
        <img src="../assets/p4.jpg" alt="">
      </div>
      <!-- <div class="col">
        <img src="../assets/p5.jpg" alt="">
      </div>
      <div class="col">
        <img src="../assets/p6.jpg" alt=""> -->
      <!-- </div> -->
    </div>
    <p class="para">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Sit maiores quos aut sequi repellat eum similique rerum quo quia aspernatur iusto quis repellendus, 
      eaque ipsum dolores tempore, dolore sapiente perferendis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime qui enim, odio aliquam maiores, 
      beatae sit repellendus molestiae vero consequuntur sed repellat nihil amet ipsam quaerat, harum in! Et?
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'mode'
  ]
};
</script>

<style scoped>
  .content {
    padding: 25px;
  }

  .content h3 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 25px;
  }

  .content .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  .content .image-grid img {
    width: 100%;
  }

  .para {
    width: 100%;
    max-width: 600px;
    margin: 25px auto 0px
  }


  /* img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 700;
    height: 700px;
  } */
</style>