import styled from "styled-components";
import bus from "../assets/images/index/bus-gif.gif";
import { motion } from "framer-motion";

const BusImage = styled.img`
  width: 15vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -300%);
`;

function Bus() {
  return (
    <motion.div
      animate={{
        x: ["0%", "400%"],
        y: ["50%", "-50%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      <BusImage src={bus} alt="Bus" />
    </motion.div>
  );
}

export default Bus;
