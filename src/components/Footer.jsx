import styled  from 'styled-components';

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 10%;
    section:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(180deg, #C11561 5%, #FF3D59 100%);
        border-radius: 50% 50% 0 0/100% 100% 0 0;
        transform: scaleX(1.5);
    }
    
`
const Content = styled.div`
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
    h1{
        margin: 0;
        padding: 0;
        color: white;
        font-size: 35px;
    }
    h2{
        color: white;
        font-size: 15px;
        letter-spacing: 3px;
    }

`

const Hr = styled.div`
   /* width: 1350px; 
   margin-left: -50px;
  height: 1000px;  
  border: solid 15px #C11561;
  border-color: #C11561 transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
  margin-top: 200px;
  margin-bottom: -73%; */
`


function Footer(){
    return (
        <div>
            <Hr />
            <Section>
                <section>
                <Content>
            <h1>Your E-Assistant</h1>
            <h2>© COPYRIGHT 2021. ALL RIGHTS RESERVED</h2>
            </Content>
            </section>
            </Section>
        </div>
    )
}

export {Footer}