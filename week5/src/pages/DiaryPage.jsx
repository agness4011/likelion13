import Header from "../components/header/header";
import styled from "styled-components";
import imogImg2 from "../assets/images/Diaryimages/sun2.jpg";
import diary1Img from "../assets/images/Diaryimages/Group Diary.png";
import diary2Img from "../assets/images/Diaryimages/Group Diary2.png";
import diary3Img from "../assets/images/Diaryimages/Group Diary3.png";
import diary4Img from "../assets/images/Diaryimages/Group Diary4.png";
import Button from "../components/diarypage/Button.jsx";


export default function DiaryPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <Section>
          <TitleWrapper>
            { <Img src={imogImg2} alt="sun2" /> }
            <StrongText>Diary</StrongText>
          </TitleWrapper>

          <TopText>2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 
            여러분이 느꼈던 모든 것을 적어주세요!
            이미지를 올리셔도 됩니다. 
            배치도 자유롭게 설정할 수 있어요! 
            방명록이라고 편하게 생각 부탁함~
          </TopText>
           <ButtonContainer>
            <Button></Button>
           </ButtonContainer>
        </Section>

        <ImageSection>
          <TextBlock>
            
          </TextBlock>
           <img src={diary1Img} alt="diary1" style={{ width: "800px", height: "auto"}}/>
           <img src={diary2Img} alt="diary2" style={{ width: "700px", height: "auto"}}/>
           <img src={diary3Img} alt="diary3" style={{ width: "700px", height: "auto"}}/>
           <img src={diary4Img} alt="diary4" style={{ width: "600px", height: "auto"}}/>
        </ImageSection>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const TextBlock = styled.div`
  max-width: 500px;
  height: 500px;
  display: flex;
  z-index: 0;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

