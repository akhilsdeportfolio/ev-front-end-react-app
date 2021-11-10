import styled  from 'styled-components';
import footer from '../components/image/footer.png'
import Wave from 'react-wavify'

 const Section = styled.section`
    position: relative;
    width: 100%;
    height: 50vh;
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
/* 
const Hr = styled.hr`
   
   /*  transform: rotate(180deg);
    width: 97.5%;
    border: solid 10px #000;
    border-top-right-radius: 100%;
    border-top-left-radius: 155%;
    transform: scaleX(1.5);
    border-radius: 50% 50% 0 0 /100% 100% 0 0; */

const styles = {
    image:{
        marginTop: '5%',
        width: '100%',
    },
    text:{
        marginBottom: '-40px',
        position: 'absolute',
        marginLeft: '40%'
    }
}

function Footer(){
    return (
        <div>
       {/*   <Hr />  */}
             <Section>
            <section>
            <Content>
            <h1>Your E-Assistant</h1>
            <h2>© COPYRIGHT 2021. ALL RIGHTS RESERVED</h2>
            </Content>
            </section>
            </Section> 
         {/* <img style={styles.image} src={footer} alt={footer} /> */}
        </div> 
    )
        
}

export {Footer}