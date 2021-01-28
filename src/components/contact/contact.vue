<template>
  <section id="contact">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-6 contact___description" data-wow-delay="0.6s">
            <h2 class="text-uppercase">Contact Us</h2>
            <address>
              <p>
                <b>Address:&ensp;</b><i class="fa fa-map-marker"></i>106 Hoàng
                Quốc Việt, Cầu Giấy, TP Hà Nội
              </p>
              <p><b>Phone:&ensp;</b><i class="fa fa-phone"></i> 123456789</p>
              <p>
                <b>Email:&ensp;</b
                ><i class="fa fa-envelope-o"></i> nguyendangchien1997@gmail.com
              </p>
              <p>
                <b>Skype:&ensp;</b
                ><i class="fa fa-envelope-o"></i> live:nguyendangchien1997
              </p>
            </address>
          </div>
          <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="contact-form">
              <form action="#" method="post">
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="col-md-12">
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
                <div class="col-md-8">
                  <input
                    type="button"
                    class="form-control text-uppercase"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="css">
#contact {
  background-image: url("../../assets/images/contact-bg.jpg");
}
.contact___description {
  color: #fff;
}

#contact .form-control {
  border: none;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 20px;
}

#contact input {
  height: 50px;
}
#contact input[type="button"]:hover {
  background: #107db6;
}
#contact input[type="button"] {
  background: #28a7e9;
  color: #fff;
  font-weight: 700;
  transition: all 0.3s ease;
}
#contact input {
  height: 50px;
}
</style>
