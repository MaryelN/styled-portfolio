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
  width: 50vh;
  height: auto;
  position: relative;
  z-index: 1;

  @media (min-width: 960px) {
    width: 55vh;
  }
`;

const FirstName = styled.h2`
  color: #fecc00;
  font-size: 4vw;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 74%;
  left: 38%;
  z-index: 4;

  @media (min-width: 960px) {
    font-size: 1.2vw;
    top: 72%;
    left: 33%;
  }
`;
const LastName = styled.h2`
  color: #fecc00;
  font-size: 6vw;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 77%;
  left: 36%;
  z-index: 4;

  @media (min-width: 768px) {
    font-size: 1.8vw;
    top: 75%;
    left: 30%;
  }
`;

const P = styled.p`
  color: white;
  font-size: 4vw;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  bottom: 5%;
  left: 22%;
  z-index: 4;

  @media (min-width: 768px) {
    font-size: 1vw;
    bottom: 5%;
    left: 18%;
  }
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
        <P>Developpeur web</P>
      </ContentContainer>
    </StyledProfileCard>
  );
}

export default ProfileCard;
