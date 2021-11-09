
import styled  from 'styled-components';
import nexon from '../components/image/nexon.png'
import huyndai from '../components/image/huyndai.png'


const Section = styled.section`
    position: relative;
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    section:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(180deg,  #FF3D59 5%, #C11561 100%);
        border-radius: 0 0 50% 50%/0 0 100% 100%;
        transform: scaleX(1.5);
    }
    
`
const Content = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
    line-height: 120%;
    font-family: Rozha One;
    
    h1{
        margin-top: -75%;
        padding: 0;
        color: black;
        font-size: 40px;
    }
    h2{
        color: white;
        font-size: 35px;
        text-decoration: underline;
        letter-spacing: 1px;
    }


`
const styles = {
    nexon: {
        marginTop: '-26%',
        position: 'absolute',
        marginLeft: '5%',
    },
    huyndai: {
        marginTop: '-28%',
        position: 'absolute',
        marginLeft: '55%',
    },
    urgent:{
        border: '3px solid #C11561',
        width: '10%',
        color: '#C11561',
        fontSize: '27px',
        textAlign: 'center',
        borderRadius: '30px',
        padding: '8px',
        position: 'relative',
        marginTop:'-30px',
        marginLeft: '44%',
        backgroundColor: 'white'
    }
}

function Responsibility(){

    return (
        <div>
            <Section>
            <section>
            <Content>
            <h1>Your Experience</h1>
            <h2>Our Responsibility</h2>
            
            </Content>
            

            </section>
            
            </Section>
             
            <img style={styles.nexon} src={nexon} alt={nexon}/>
            <img style={styles.huyndai} src={huyndai} alt={huyndai}/>
            <h4 style={styles.urgent}>URGENT</h4>
           
        </div>
    )
}

export {Responsibility}