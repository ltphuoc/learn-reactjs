import "./Product.scss";
import mac1 from "../../assets/img/mac1.jpg";
import mac2 from "../../assets/img/mac2.jpg";
import mac3 from "../../assets/img/mac3.jpg";
import mac4 from "../../assets/img/mac4.jpg";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

const images = [mac1, mac2, mac3, mac4];

const Product = () => {
  const [currentUpImg, setCurrentUpImg] = useState(mac1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickPreviewImg = () => {
    setIsOpen(true);
    let index = images.findIndex((item) => item === currentUpImg);
    setPhotoIndex(index);
  };

  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img
              src={currentUpImg}
              alt=""
              onClick={() => handleClickPreviewImg()}
            />
          </div>

          <div className="img-down">
            <div className="img-small">
              <img
                className={currentUpImg === mac1 ? "active" : ""}
                src={mac1}
                alt=""
                onClick={() => setCurrentUpImg(mac1)}
              />
            </div>
            <div className="img-small">
              <img
                className={currentUpImg === mac2 ? "active" : ""}
                src={mac2}
                alt=""
                onClick={() => setCurrentUpImg(mac2)}
              />
            </div>
            <div className="img-small">
              <img
                className={currentUpImg === mac3 ? "active" : ""}
                src={mac3}
                alt=""
                onClick={() => setCurrentUpImg(mac3)}
              />
            </div>
            <div className="img-small">
              <img
                className={currentUpImg === mac4 ? "active" : ""}
                src={mac4}
                alt=""
                onClick={() => setCurrentUpImg(mac4)}
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">Apple MacBook Air 13" 2020 (M1/8GB/256GB)</div>
          <div className="price">24.590.000 vnd</div>
          <div className="color">Color: Grey</div>
          <div className="action">
            <label htmlFor="" className="quantity">
              So luong
            </label>
            <input type="number" className="input-quantity" min="1" />
            <div className="">
              <button className="Buy-btn">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Product;
