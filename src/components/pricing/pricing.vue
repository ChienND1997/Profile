<template>
  <section id="pricing">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-4">
          <h2 class="text-uppercase">Our Pricing</h2>
        </div>
        <div class="col-md-4 pricing-center" data-wow-delay="0.6s">
          <div class="pricing text-uppercase">
            <div class="pricing-title">
              <h4>Basic Plan</h4>
              <p>$11</p>
              <small class="text-lowercase">monthly</small>
            </div>
            <ul class="content-pricing">
              <li>6 GB Space</li>
              <li>600 GB Bandwidth</li>
              <li>60 More Themes</li>
              <li>Lifetime Support</li>
            </ul>
            <button class="btn btn-primary text-uppercase">Sign up</button>
          </div>
        </div>
        <div class="col-md-4 pricing-center" data-wow-delay="0.6s">
          <div class="pricing active text-uppercase">
            <div class="pricing-title">
              <h4>Business Plan</h4>
              <p>$22</p>
              <small class="text-lowercase">monthly</small>
            </div>
            <ul class="content-pricing">
              <li>15 GB space</li>
              <li>1,500 GB Bandwidth</li>
              <li>150 More Themes</li>
              <li>Lifetime Support</li>
            </ul>
            <button class="btn btn-primary text-uppercase">Sign up</button>
          </div>
        </div>
        <div class="col-md-4 pricing-center" data-wow-delay="0.6s">
          <div class="pricing text-uppercase">
            <div class="pricing-title">
              <h4>Pro Plan</h4>
              <p>$33</p>
              <small class="text-lowercase">monthly</small>
            </div>
            <ul class="content-pricing">
              <li>35 GB space</li>
              <li>3,500 GB bandwidth</li>
              <li>350 more themes</li>
              <li>Lifetime Support</li>
            </ul>
            <button class="btn btn-primary text-uppercase">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#pricing {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 50px 0 50px 0;
  background: #fff;
  border: none;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.08);
  margin: 0 !important;
}
.pricing-center {
  text-align: center;
}
ul li {
  list-style: none;
}
#pricing .pricing .pricing-title {
  background: #28a7e9;
  color: #fff;
  font-weight: 700;
  padding: 30px;
}
.content-pricing {
  padding: 10px 10px 10px 10px;
}
</style>