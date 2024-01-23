import React, { useEffect, useState } from "react";
import "./index.css";

export default function BackTop() {
  const [show, setShow] = useState(false);

  const scroll = () => {
    if (window.scrollY > 200) {
      // Cập nhâtj state của show
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    // Lắng nghe sự kiện lăn chuột
    window.addEventListener("scroll", scroll);

    // Hàm clean up - Hủy bỏ sự kiện lăn chuột
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [window.scrollY]);

  // Quay về đầu trang
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button onClick={backTop} className="back-top">
          Top
        </button>
      )}
    </>
  );
}
