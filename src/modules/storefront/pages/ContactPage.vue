<template>
  <div class="pt-4">
    <BreadCrumb page="contact" />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6 mb-2 mb-lg-0">
          <h2 class="title mb-1">Contact Information</h2>
          <p class="mb-3">
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <div class="row">
            <div class="col-sm-7">
              <div class="contact-info">
                <h3>The Office</h3>

                <ul class="contact-list">
                  <li>
                    <i class="bi bi-geo-alt"></i>
                    130 Trung Phung, Dong Da, Ha Noi
                  </li>
                  <li>
                    <i class="bi bi-telephone"></i>
                    <a href="tel:#">+92 423 567</a>
                  </li>
                  <li>
                    <i class="bi bi-envelope"></i>
                    <a href="mailto:#">hoangle1@beekting.net</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-sm-5">
              <div class="contact-info">
                <h3>The Office</h3>

                <ul class="contact-list">
                  <li>
                    <i class="bi bi-clock"></i>
                    <span class="text-dark">Monday-Saturday</span>
                    <br />11am-7pm ET
                  </li>
                  <li>
                    <i class="bi bi-calendar4-week"></i>
                    <span class="text-dark">Sunday</span> <br />11am-6pm ET
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h2 class="title mb-1">Got Any Questions?</h2>
          <p class="mb-2">
            Use the form below to get in touch with the sales team
          </p>

          <form action="#" class="contact-form mb-3">
            <div class="row">
              <div class="col-sm-6">
                <label for="cname" class="sr-only">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="cname"
                  placeholder="Name *"
                  required=""
                />
              </div>
              <div class="col-sm-6">
                <label for="cemail" class="sr-only">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="cemail"
                  placeholder="Email *"
                  required=""
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <label for="cphone" class="sr-only">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="cphone"
                  placeholder="Phone"
                />
              </div>
              <div class="col-sm-6">
                <label for="csubject" class="sr-only">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  id="csubject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <label for="cmessage" class="sr-only">Message</label>
            <textarea
              class="form-control"
              cols="30"
              rows="4"
              id="cmessage"
              required=""
              placeholder="Message *"
            ></textarea>
            <button
              type="submit"
              class="btn btn-outline-primary-2 btn-minwidth-sm"
            >
              <span class="me-2">SUBMIT</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.399566532592!2d105.83169183011036!3d21.016692548815257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab84684c22a9%3A0xe52791dba6ad9bf0!2zMTMwIFAuVHJ1bmcgUGjhu6VuZywgVHJ1bmcgUGjhu6VuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1678987152155!5m2!1sen!2s"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
export default {
  name: "ContactPage",
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="css" scoped>
.form-control {
  border: 1px solid #ebebeb;
  margin-bottom: 20px;
}

.contact-info {
  margin-bottom: 30px;
}
.contact-info h3 {
  margin-top: 5px;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.025em;
  margin-bottom: 15px;
}
.contact-list {
  max-width: 270px;
  list-style: none;
  padding-left: 0;
}
.contact-list li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 14px;
}
.contact-list a {
  color: inherit;
}
.contact-list a:hover,
.contact-list a:focus {
  color: #39f;
}
.contact-list i {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 3px;
  font-size: 20px;
  line-height: 1;
  color: #39f;
}
p {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  color: #777;
}
.title {
  font-size: 24px;
}
</style>
