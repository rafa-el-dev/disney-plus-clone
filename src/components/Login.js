import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='' />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Offer ends 20/09/23. New and eligible returning subscribers only. Must be 18+. Savings compared to the current monthly price of €8.99. After 3 months auto-renews at then-current monthly price of €10.99 until cancelled. <span>Terms apply</span>.
          </Description>
          <Description>
            Elemental and Welcome to Wrexham Season 2 streaming September 13. Loki Season 2 streaming October 6.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' alt='' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background-3.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 650px;
  min-height: 1px
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063a5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;

  & span {
    color: #f9f9f9;
    font-weight: bolder;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  max-width: 650px;
  margin-bottom: 20px;
  min-height: 1px;
  vertical-align: bottom;
  width: 100%;
`;

export default Login