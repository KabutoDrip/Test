import footerImage1 from "@/assets/img/footer/footer_1.png";
import footerImage2 from "@/assets/img/footer/footer__bg__1.png";
import footerImage3 from "@/assets/img/footer/footer__bg__2.png";
import LogoFooter from "./LogoFooter";
import NewsLetter from "./NewsLetter";
import Copyright from "./Copyright";
import GalleryFooter from "./GalleryFooter";
import Copyright2 from "./Copyright2";
import ConsultingFooter from "./ConsultingFooter";
import Brands4 from "@/components/sections/brands/Brands4";

const Footer = ({ style, footerBg, copyright }) => {
  return (
    <>
      <div
        className={`${
          !style
            ? "footer pink__bg__color sp_top_250"
            : `footer__${style} ${
                style === 3 && footerBg === "black"
                  ? "sp_top_200"
                  : "sp_top_140"
              }`
        } ${style === 4 ? "sp_bottom_140" : ""} position-relative ${
          footerBg === "black" ? "bg__black" : ""
        }`}
        id={!style ? `footer__area` : `footer__area__${style}`}
        style={
          !style || style === 2 || style === 4
            ? {
                backgroundImage: `url('${
                  !style
                    ? footerImage1.src
                    : style === 2
                    ? footerImage2.src
                    : footerImage3.src
                }')`,
              }
            : {}
        }
      >
        {style === 3 && <Brands4 type={"footer"} />}

        <div className="container">
          {style === 4 ? (
            <div className="row">
              <ConsultingFooter />
            </div>
          ) : (
            <div className="footer__wrapper sp_bottom_110">
              <div className="row">
                <div className="col-lg-8">
                  <LogoFooter style={style} />
                  {style && <GalleryFooter />}
                </div>
                <div className="col-lg-4">
                  <NewsLetter style={style} />
                </div>
              </div>
            </div>
          )}

          {!style && <Copyright />}
        </div>
      </div>
      {(copyright === 2 || style === 2 || style === 3 || style === 4) && (
        <Copyright2 style={style} copyright={copyright} />
      )}
    </>
  );
};

export default Footer;
