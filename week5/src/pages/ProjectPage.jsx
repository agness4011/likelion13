import Header from "../components/header/header";
import styled from "styled-components";
import card1Img from "../assets/images/Projectimages/dangdang.jpg";
import card2Img from "../assets/images/Projectimages/airang.jpg";
import card3Img from "../assets/images/Projectimages/travai.jpg";
import card4Img from "../assets/images/Projectimages/frameout.jpg";
import card5Img from "../assets/images/Projectimages/turtle.jpg";
import card6Img from "../assets/images/Projectimages/kim.jpg";
import card7Img from "../assets/images/Projectimages/talksick.jpg";
import card8Img from "../assets/images/Projectimages/tpocket.jpg";
import imogImg from "../assets/images/Projectimages/sun.png";
import Input from "../components/projectpage/Input.jsx";

export default function ProjectPage() {
  return (
    <>

    
      <Header />
   

        <Input placeholder="키워드를 입력하세요" />

      <MainContainer>
        <Section>
          <TitleWrapper>
            { <Img src={imogImg} alt="sun" /> }
            <StrongText>Project</StrongText>
          </TitleWrapper>

          <TopText>2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인해보세요!
            모아 놓으니 더 예쁘네요. 
            다들 수고 많으셨습니다!
          </TopText>
        </Section>

        <ImageSection>
 
           <img src={card1Img} alt="card1" />
           <img src={card2Img} alt="card2" />
           <img src={card3Img} alt="card3" />
           <img src={card4Img} alt="card4" />
           <img src={card5Img} alt="card5" />
           <img src={card6Img} alt="card6" />
           <img src={card7Img} alt="card7" />
           <img src={card8Img} alt="card8" />
        </ImageSection>
      </MainContainer>
    </>
  );
}

/*const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 100px;
  gap: 20px;
`;
*/


const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const Section = styled.div`
  text-align: center;
`;

const TopText = styled.p`
  color: #7C7C7C;
  text-align: left;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;  
  gap: 15px;
`;

const Img=styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    align-items: left;
`;

const StrongText = styled.p`
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0 36px;
`;

const ImageSection = styled.div`
  margin: 80px -100px 80px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;


