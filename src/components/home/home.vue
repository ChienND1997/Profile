<template>
  <section id="home">
    <div class="overlay">
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-1"></div>
          <div class="col-md-10" data-wow-delay="0.3s">
            <h1 class="text-upper">Software Engineer</h1>
            <p class="tm-white">
              Software engineering is defined as a process of analyzing user
              requirements and then designing, building, and testing software
              application which will satisfy those requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="css">
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding-top: 90px;
  display: block;
  padding-bottom: 90px;
}
#home {
  background: url("../../assets/images/home-bg.jpg") no-repeat;
  background-size: cover;
  color: #fff;
  text-align: center;
  width: 100%;
  border: none;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.08);
  margin: 0 !important;
}
#home p {
  font-weight: 400;
  font-style: italic;
  line-height: 2em;
}
.tm-white {
  margin: 0 0 10px;
}
h1 {
  color: orange;
}
</style>