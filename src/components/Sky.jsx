import { motion } from "framer-motion";
import cloud1 from "../assets/images/index/cloud-1.png";
import cloud2 from "../assets/images/index/cloud-2.png";
import moon from "../assets/images/index/moon.png";
import styled from "styled-components";

const MoonImage = styled.img`
  position: absolute;
  top: 5%;
  right: 10%;
  z-index: -100;
`;

const CloudImage = styled.img`
  width: 5rem;
`;

function Sky() {
  return (
    <>
      <motion.div
        animate={{
          x: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: "linear",
        }}
      >
        <img src={cloud1} alt="Cloud" />
      </motion.div>
      <motion.div
        animate={{
          x: ["0%", "100%"],
          y: ["-40%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        <img src={cloud2} alt="Cloud" />
      </motion.div>
      <MoonImage src={moon} alt="moon" />
    </>
  );
}

export default Sky;
