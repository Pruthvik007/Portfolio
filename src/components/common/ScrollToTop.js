import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <React.Fragment>
      {visible && (
        <Button
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
          }}
          onClick={scrollToTop}
          color="secondary"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      )}
    </React.Fragment>
  );
};

export default ScrollToTop;
