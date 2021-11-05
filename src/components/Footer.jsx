import styled  from 'styled-components';

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 18%;
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
    border-radius: 50% 50% 0 0/100% 100% 0 0;
    transform: scaleX(1.5);
    margin-top: 40px;
    width: 65%;
    border-bottom: none;
    border-left: white;
    border-radius: 50%;
    height: 335px;
    width: 62.1%;
    padding:30px;
    margin-bottom: -416px;
    border: 1px solid #C11561;
`



function Footer(){
    return (
        <div>
            
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