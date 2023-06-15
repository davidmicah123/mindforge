import classes from'../CSS/index.module.css';
import logo from "../Assets/Logos/Logo png01.png";
import card_bg from "../Assets/Images/9c31e0159999957.63aafa94bdec1.png";
import hero from "../Assets/Images/hero5.webp";
import user_img from "../Assets/Images/profile-pic.png";
import video_slide from "../Assets/video/15534c0cdf1d35ded22cd9442de1aec2_FrhosDmWAAI7GPI.mp4";
import ceo from "../Assets/Images/user.avif";
import Trustedby from '../Components/TrustedBy/Trustedby';
import Footer from "../Components/Footer/Footer";
import CallToAction from "../Components/CallToAction/CallToAction";
import Navbar from '../Components/Navbar/Navbar';

function App() {
  return (
    <div className={classes.app_area}>
        <Navbar />

      <section className={classes.hero_section}>
          <div className={classes.hero_content_wrapper}>
              <img src={hero} alt="" className={classes.hero_img} />
              <div className={classes.hero_text_content}>
                  <button className={classes.custom_tag}>#MindForge</button>
                   {/* <h1>Freedom for <br/> your creative ideas</h1> */}
                  <h1>Freedom for <br/> your creative ideas</h1>
                  <p>Unleash Your Visual Potential! We're a cutting-edge graphics agency specializing in design, Photoshop wizardry, CorelDRAW mastery, Canva finesse, Figma tutoring, and much more. Forge your ideas into stunning reality with our creative expertise!</p>
                  <div className={classes.hero_btn_wrapper}>
                      <button className={classes.custom_btn}>Try now</button>
                      <button className={classes.custom_btn}>How it works</button>
                  </div>
                  {/* <div className={classes.nav_logo_wrapper}>
                      <div>Canva</div>
                      <div>Figma</div>
                      <div>CoreDraw</div>
                  </div> */}
              </div>
          </div>
      </section>

      <Trustedby />
      
      <div className={classes.festures_section}>
          <div className={classes.features_section_content_wrapper}>
              <div className={classes.features_section_top}>
                  <button className={classes.custom_tag}>#ourFeatures</button>
                  <h1>Best and Latest Features from us</h1>
                  <p>Development to be the best of us... you can explore your<br />  imagination</p>
              </div>
              <div className={classes.features_card_wrapper}>
                  <div className={classes.features_card}>
                      <ion-icon name="eye-outline"></ion-icon>
                      <h2>Figma Design</h2>
                      <p className={classes.features_card_txt}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi?</p>
                  </div>
                  <div className={classes.features_card}>
                      <ion-icon name="rocket-outline"></ion-icon>
                      <h2>Figma Design</h2>
                      <p className={classes.features_card_txt}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi?</p>
                  </div>
                  <div className={classes.features_card}>
                      <ion-icon name="scan-outline"></ion-icon>
                      <h2>Figma Design</h2>
                      <p className={classes.features_card_txt}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi?</p>
                  </div>
                  <div className={classes.features_card}>
                      <ion-icon name="videocam-outline"></ion-icon>
                      <h2>Figma Design</h2>
                      <p className={classes.features_card_txt}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi?</p>
                  </div>
              </div>
          </div>
      </div>

    <div className={classes.video__slide_section}>
        <div className={classes.video_slide_top_area}>
            <button className={classes.custom_tag}>#OurProduct</button>
            <h2>Our best product for your edditing</h2>
            <p>find the creative side of yourself with a product <br/> that meets all your needs</p>
        </div>
        <div className={classes.video_slide_video_wrapper}>
            <video src={video_slide} className={classes.video_slide} controls loop></video>
        </div>
    </div>

    <section className={classes.our_user_section}>
        <div className={classes.out_user_container}>
            <div className={classes.our_user_image_wrapper}>
                <img src={ceo} alt="" className={classes.our_user_img} />
            </div>
            <div className={classes.user_section_content}>
                <button className={classes.custom_tag}>#OurUser</button>
                <h2 className={classes.user_section_heading}>What Professionals say about our products</h2>
                <p className={classes.our_user_remark}>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolores illo error excepturi repudiandae accusantium, beatae cum eveniet consequuntur magni. Doloremque illo animi, nisi distinctio at quia pariatur magnam eligendi!"</p>
                <div className={classes.user_detsils_wrapper}>
                    <h3 className={classes.username}>John Steve</h3>
                    <p className={classes.user_role}>Creative Director</p>
                </div>
            </div>
        </div>
    </section>

    
    <div className={classes.video__slide_section}>
        <div className={classes.video_slide_top_area}>
            <button className={classes.custom_tag}>#OurProduct</button>
            <h2>Our best product for your edditing</h2>
            <p>find the creative side of yourself with a product <br/> that meets all your needs</p>
        </div>
        <div className={classes.user_review_card_wrapper}>
            <div className={classes.user_review_card}>
                <div className={classes.review_card_img_wrapper}>
                    <img src={card_bg} alt="" className={classes.review_card_bg_img} />
                    <img src={user_img} alt="" className={classes.review_user_img} />
                </div>
                <div className={classes.user_review_card_text_content}>
                    <h3>Opara Jeremiah</h3>
                    <p className={classes.user_review_card_text}>Lorem ipsum dolor sit amet consectetur cing eli. Sed odio voluptatem ani? Dolor, quasi! Lorem ipsum dolor sit amet. Bala blu tia-tia highway generated</p>
                    <p className={classes.review_user_occupation}>Programmer</p>                    
                </div>
            </div>
            <div className={classes.user_review_card}>
                <div className={classes.review_card_img_wrapper}>
                    <img src={card_bg} alt="" className={classes.review_card_bg_img} />
                    <img src={user_img} alt="" className={classes.review_user_img} />
                </div>
                <div className={classes.user_review_card_text_content}>
                    <h3>Ayodeji Desmond</h3>
                    <p className={classes.user_review_card_text}>Lorem ipsum dolor sit amet consectetur cing eli. Sed odio voluptatem ani? Dolor, quasi! Lorem ipsum dolor sit amet. Bala blu tia-tia highway generated</p>
                    <p className={classes.review_user_occupation}>Programmer</p>                    
                </div>
            </div>
            <div className={classes.user_review_card}>
                <div className={classes.review_card_img_wrapper}>
                    <img src={card_bg} alt="" className={classes.review_card_bg_img} />
                    <img src={user_img} alt="" className={classes.review_user_img} />
                </div>
                <div className={classes.user_review_card_text_content}>
                    <h3>Qoyum Adegbola</h3>
                    <p className={classes.user_review_card_text}>Lorem ipsum dolor sit amet consectetur cing eli. Sed odio voluptatem ani? Dolor, quasi! Lorem ipsum dolor sit amet. Bala blu tia-tia highway generated</p>
                    <p className={classes.review_user_occupation}>Programmer</p>                    
                </div>
            </div>
        </div>
    </div>


      <CallToAction />

      <Footer />  
    </div>
  );

    
}

export default App;
