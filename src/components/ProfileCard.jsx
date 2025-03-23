import styled from "styled-components";
import playerGif from "../assets/images/index/player-gif.gif";
import profilePhoto from "../assets/images/index/profile-photo.png";
import profileBuilding from "../assets/images/index/profile-building.png";

const StyledProfileCard = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 2rem;
  z-index: 10;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
`;

const PlayerGif = styled.img`
  width: 25vh;
  height: auto;
  position: relative;
  align-self: center;
  z-index: 2;
`;

const ProfileImage = styled.img`
  width: 38vh;
  height: auto;
  position: absolute;
  top: 18%;
  left: 13%;
  z-index: 3;
`;

const BuildingImage = styled.img`
  width: 55vh;
  height: auto;
  position: relative;
  z-index: 1;
`;

const FirstName = styled.h2`
  color: #fecc00;
  font-size: 1.2vw;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 72%;
  left: 33%;
  z-index: 4;
`;
const LastName = styled.h2`
  color: #fecc00;
  font-size: 1.8vw;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 75%;
  left: 30%;
  z-index: 4;
`;

const H3 = styled.h3`
  color: white;
  font-size: 1vw;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  bottom: 5%;
  left: 18%;
  z-index: 4;
`;

function ProfileCard() {
  return (
    <StyledProfileCard>
      <ContentContainer>
        <PlayerGif src={playerGif} alt="player gif" />
        <BuildingImage src={profileBuilding} alt="building" />
        <FirstName>Cédric</FirstName>
        <LastName> Phung</LastName>
        <ProfileImage src={profilePhoto} alt="profile" />
        <H3>Developpeur web</H3>
      </ContentContainer>
    </StyledProfileCard>
  );
}

export default ProfileCard;
