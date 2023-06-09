import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21002.562651962802!2d100.48487764327683!3d13.649152419483721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LiY4LiZ4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1684210265204!5m2!1sth!2sth" 
          width="600" 
          height="450" 
          className="border-0 w-100"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4 text-white">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4 text-white">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center text-white">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        BangMod, Thungkhru, Bangkok, Thailand.
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center text-white">
                      <BiPhoneCall className="fs-5" />
                      <a className="text-white" href="tel:+66 935826981">+66 935826981</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center text-white">
                      <AiOutlineMail className="fs-5" />
                      <a className="text-white" href="mailto:kanokwan.rung@kmutt.ac.th">
                      kanokwan.rung@kmutt.ac.th
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
