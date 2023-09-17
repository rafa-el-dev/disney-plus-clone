import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          {/* <CTALogoOne src='/images/cta-logo-limited-offer.png' alt='Disney logo with limited time offer written on the beside' /> */}
          <CTAPrice src='/images/euro-promo-price.png' alt='limited time offer of €1.99 per month for 3 months' />
          <Save><span>Save 75%</span></Save>
          <SignUp>SIGN UP NOW</SignUp>
          <Description>
            Offer ends 20/09/23. New and eligible returning subscribers only. Must be 18+. Savings compared to the current monthly price of €8.99. After 3 months auto-renews at then-current monthly price of €10.99 until cancelled. <span>Terms apply</span>.
            <br/>
            <br/>
            Elemental and Welcome to Wrexham Season 2 streaming September 13. Loki Season 2 streaming October 6.
          </Description>
          <CTALogoTwo src='/images/cta-logo-star.png' alt='' />
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
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7vh;
`;

const CTALogoOne = styled.img`
  margin-bottom: 30px;
  max-width: 600px;
  min-height: 1px
  display: block;
  width: 100%;
`;

const CTAPrice = styled.img`
  margin-bottom: 30px;
  max-width: 600px;
  min-height: 1px
  display: block;
  width: 100%;
`;

const Save = styled.p`
  color: #f9f9f9;
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;

  & span {
    color: #f9f9f9;
    font-weight: bolder;
    font-size: 44px;
    line-height: 54px;
    margin-bottom: 30px;
  }
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063a5;
  margin-bottom: 12px;
  width: 60%;
  letter-spacing: 1.5px;
  font-size: 18px;
  margin-bottom: 30px;
  padding: 16px 24px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

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
  max-width: 600px;
  margin-bottom: 20px;
  min-height: 1px;
  vertical-align: bottom;
  width: 100%;
`;

export default Login