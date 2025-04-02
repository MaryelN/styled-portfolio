import styled from "styled-components";
import { useState } from "react";

const IconContainer = styled.a`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  transition: background-image 0.3s ease;
  display: inline-block;

  &:hover {
    background-image: url(${(props) => props.hover});
  }
`;

function LinkIcons({ iconDefault, iconHover, link }) {
  const [icon, setIcon] = useState(iconDefault);

  return (
    <IconContainer
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundImage: `url(${icon})` }}
      hover={iconHover}
      onMouseEnter={() => setIcon(iconHover)}
      onMouseLeave={() => setIcon(iconDefault)}
    />
  );
}

export default LinkIcons;
