import { Footer } from "./Footer";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Navbar} from "./Navbar"
let styles = {
    style:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 670,
        height:440,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    lines:{
        width:10,
        height:65,
        background:"#FF546D",
        marginLeft:-30,
        borderRadius:5
    },
    exterior:{
        position: "relative",
        top: "-55px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "40px",
        lineHeight: "49px",
        color: "#000000", 
    },
    tt:{
        width:100,

    },
    zoomIn:{
        width:"100%",
        height:"100%"
    },
    contain:{
        width: "90%",
        marginLeft: "5%",
    },
    gallery:{
        fontFamily: "Rozha One",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "350%",
        lineHeight: "95px",
        textAlign: "center",
    },
    line:{
        width:"20%",
        height: "10px",
        borderRadius: "10px",
        marginLeft: "40%",
        
    },
    row1Img:{
        display: "grid",
        marginTop: "-19px",
        gridTemplateColumns:" repeat(3,34%)",
        marginBottom:" 40px"
    },
    img:{
        width: "95%",
        height: "237px",
        cursor:"pointer",
    },
    white:{
        position:"absolute",
        top:"268%",
        borderRadius:10,
        width: "29.2%",
        height: "10px",
        backgroundColor:"#5D6D61",
        marginRight:"1.7%",
        float:"left"
    },
    grey:{
        position:"absolute",
        top:"268%",
        borderRadius:10,
        left:"35.6%",
        width: "29%",
        height: "10px",
        marginRight:"1.7%",
        backgroundColor: "#FF546D",
        float:"left"
    },
    blue:{
        position:"absolute",
        top:"268%",
        borderRadius:10,
        width: "28.4%",
        height: "10px",
        left:"66%",
        backgroundColor: "#0380BE",
        float:"left"
    },
    playButton:{
        display: "grid",
        gridTemplateColumns: "repeat(3,34%)"
    },
    playButtonImg:{
        position: "relative",
        top: "-170px",
        left: "210px",
        width: "40px",
        height: "40px"
    }  
}

export const Gallery = ()=>{
        const [pic,setPic] = React.useState("xyz")
        const [open, setOpen] = React.useState(false);
        const handleOpen = ((e)=>{
        setPic(e.target.src);
            setOpen(true);
            return
        })
        const handleClose = () => setOpen(false);
        function ImageList(props){
        const images = props.image;
        const listItems = images.map((el)=>
            <img style={styles.img} src = {el} alt="" onClick = {handleOpen}/>
        );
        return (
            <div style={styles.row1Img}>{listItems}</div>
        )}
    function fun1(){
        setVisible3(false)
        setVisible2(false)
        setVisible(true) 
    }
    function fun2(){
        setVisible3(true)
        setVisible2(false)
        setVisible(false)   
    }
    function fun3(){
        setVisible3(false)
        setVisible2(true)
        setVisible(false)   
    }
    function colorChange(el){
        if(el.target.src === "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=85"){
            fun1()
            setColorLine({...styles.line,background:"rgb(93, 109, 97)"})
            setColorLine2({...styles.lines,background:"rgb(93, 109, 97)"})
            setColor6(whiteRow6)
            setColor(whiteRow1)
            setColor2(whiteRow2)
            setColor3(whiteRow3)
            setColor4(whiteRow4)
            setColor7(whiteRow7)
        }
        else if(el.target.src ==="https://s3-alpha-sig.figma.com/img/9026/ff35/a00dd10fd914ecd93f0abe139b563f5b?Expires=1637539200&Signature=Q0DssljF4d4AgB2sn8OUX2jLiQCytmW0k6xe0367Vn4smryzSuoRg9VMbC8Zv-~EIzcau8VJ1OavqUaxG15sjmRaqavI4lptzN1TbBYxP092MWb1VbDppnMrGt5cWKA7kYoF-XtlNJMOyJZGvQlGgBfU~GThog23AvrFVwrvgcJEnfO9jR3lYK9iNuxaUGMfU-k37CNrGyukCH~cI0I6zq6PHlu~gABZfk6~LjjFSxh1ryD~vlSuZOH~yjru1p1iaiswQCOrCPjDiOBEAHz-6DC5GmbvBGkJXFcmGeHYGMnmGo3ebyDMn6vrq76NSHChHzYmdhE006mQZ2a8QSKaaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"){
            fun2()
            setColorLine({...styles.line,background:"rgb(3, 128, 190)"})
            setColorLine2({...styles.lines,background:"rgb(3, 128, 190)"})
            setColor6(row1Img)
            setColor(row2Img)
            setColor2(row3Img)
            setColor3(row4Img)
            setColor4(row6Img)
            setColor7(row7Img)
        }
        else if(el.target.src ==="https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85&wm=1"){
            fun3()
            setColorLine({...styles.line,background:"rgb(255, 84, 109)"})
            setColorLine2({...styles.lines,background:"rgb(255, 84, 109)"})
            setColor6(redRow6)   
            setColor(redRow1)
            setColor2(redRow2)
            setColor3(redRow3)
            setColor4(redRow4)
            setColor7(redRow7)
        }
    }
    function ColorList(props){
        const images = props.image;
        const listItems = images.map((el)=>
            <img style={styles.img} src = {el} alt="" onClick = {colorChange} />
        );
        return (
            <div style={styles.row1Img}>{listItems}</div>
        )
    }

    function VideoList(props){
        const images = props.image;
        const listItems = images.map((el)=>
            <iframe  width="95%" height="245" src={`https://www.youtube.com/embed/${el}?autoplay=1&mute=1`} title = "Nexon" onClick = {handleOpen} >
            </iframe>
        );
        return (
            <div style={styles.row1Img}>{listItems}</div>
        )
    }

    var row1Img = ["https://s3-alpha-sig.figma.com/img/9026/ff35/a00dd10fd914ecd93f0abe139b563f5b?Expires=1637539200&Signature=Q0DssljF4d4AgB2sn8OUX2jLiQCytmW0k6xe0367Vn4smryzSuoRg9VMbC8Zv-~EIzcau8VJ1OavqUaxG15sjmRaqavI4lptzN1TbBYxP092MWb1VbDppnMrGt5cWKA7kYoF-XtlNJMOyJZGvQlGgBfU~GThog23AvrFVwrvgcJEnfO9jR3lYK9iNuxaUGMfU-k37CNrGyukCH~cI0I6zq6PHlu~gABZfk6~LjjFSxh1ryD~vlSuZOH~yjru1p1iaiswQCOrCPjDiOBEAHz-6DC5GmbvBGkJXFcmGeHYGMnmGo3ebyDMn6vrq76NSHChHzYmdhE006mQZ2a8QSKaaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/9290/b25c/d2ab3a0afadddac8d1e970d928facfd5?Expires=1637539200&Signature=VdhaULeaOGdQQc~fCGjcZsGjii5oulzHOnEEmQUlEflASz88JCHIJ89J7IyGGuywhHa6m0EWUIWrr9PnaqRCVXXdoXwSoubj45IKfLwR42QUUu6rJ3tVYVnTgsVwp-G9wL5CQOITm~GQl7VMbP9OUTC2HdHl0O1m8bviqzsFC0qcLMP3juK4jKcsgIW7tJXLnbGmiEUdB4HwEldwIzs~L8zGjlOBoxV2eJVrvQsz5Y6~ekOZKc2lHjPsYcZaqKs8Xi-rRnOKmO4LwTPqs447ctWYZACUrnSTev5QdIBHjwCYZT1mCbB421AFB-koCez0w1veGDiVpS~KDwKAlSKJxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/e0cf/8f02/c6743e8df515f1b5bc23c46931846ae3?Expires=1637539200&Signature=bSHOeJ6YAnK2DZM7Q0qjVgGouk7FP6Xf1uLRXhMrbUAGg3F2qJk-wy4Fw3qANi2oSQnWVld~anw1TanJzrJQCjEarWU3ORw6RKBzZPL0szZER8ZTHg7nK8jbTag0X2nSMGPPJLFOY6jANxsv~MjdTN1kt7BbmvW3rd2JhpgThVkXM2pexsuu4MjrfVDn96LaFk1hBXq98fqAGy3auLvpyMpwE~NaUOEZ1oDqq5MpwRo6mvHgfK197nwmGThLknr7WjcZtMSijKYYt9mJEzJYoD~8zodJxu1acbQ5hkiiesSanKnEm~NvoYiA3o7ek9KfWHQACR5SdOYjhwdn1zJlMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]
    var row2Img = ["https://s3-alpha-sig.figma.com/img/208b/a13c/0d834497bd602af2168a48df4f92b960?Expires=1637539200&Signature=XBUB6eWQLZphdiHWqwxSjeFlEUUAyqe4q-3q~IhHLciJAHbW26LFsiQ2rUD3JOIWNYC31nVDwYi9XnvU2Dhdhh2kbalm~9K3T93aTyvZnsvPv~f9pe1lWfBvOHWjYzgC21QFgGiVfQ93-yPGGXOLdj-aN4iBdhgvHDAGIcskZ4Awhl6DZPavxKz6EbbtPmCw85XofcJhUsPR~sKsfomjQReOQhbQKdF2TGrVQEdwjtlynFhx2G66mT5mxoryH42MsRaA3YhZFBZLq7n-B6xxkV1CSdd0drdLuQF52HKIcQc38wUXV4asYKdxipWFxc5NTx4LPmpETjxC0i1avkayog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/59bd/6810/537cabb71195af1126883c6cbb0ad682?Expires=1637539200&Signature=a1eM~rwY0sSLSTmzWrccqzVUsiIb2rnt2fKTOGgiNm0YCheQZNsMFjhY6PpEcRAF3uZ0V9M8ntB4hD0Qm1nGl5DuglG3asy4SeI5Lx0HlTtU8TI-YemaZriPhj8BJzHrOVJ~9IiyNBtTD-vrNVLHv1m1obWcAVwPXVQlWY7q1z~oBKxdmvOcwb3xTdZbDNVT2AYUpnUCprsRpdCPaoCorekLb1DY4u-Rf~RA~scw8~dXrZiTsz0tFXtJHrISsudEQsQsKAm8JHyLJTuHEB2BWvgHVF7vjG5SBFNgjCXm~daitvnnV9eyQcE989PTFNahuvbDEE~8PsgpKYrwP~hx4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/2c34/e222/9440bf9445bb92d3596513809a8ce731?Expires=1637539200&Signature=MXFK79zKOUMjqCUxFLpWMT-z-t06kxgC6vFyJj6b5MTEj6q6z9aFFISrbQ4kJMOChhQXzGmyeLDIUFcCT9TvLFBjVNWKA1qXoyCIfTBUZfHBMwJGmHBeYWP1FR-jq5L4fzVJIlNUirtEW0SgHpYMWgRJpXgfcD294RdtTZzLsxTd34tQT-j7pGnjkfPup6D7umt4dnJ29-MuHpfMXurtKzcDRbCvKSnA6P1Nc2eaNNhhQSwXgWECMo0pZMQqAsSNV0mmPU0NGB0rS3f9TAlg8IkxG2ebJlcc1TTJO~dEU13jl89rY4DZOyzWY8STBtLNFgjwN3oPgeT50z1b0nqjAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]    
    var row3Img = ["https://s3-alpha-sig.figma.com/img/0120/c959/d530f686e4c9af93f2c1d910a60acdc4?Expires=1637539200&Signature=bJbj68WS0aRmPNwvWiuGugDYB4Ti99Eakf4-INF-pAP22ygcdpIjZ~doHlzdiRm2usHU804ZqqtEkc5Oq9GdErylQmkqP1eo2ArScyiYpYK38tZFSBmyGJupPFaXYQV79QYHzZl293WCiC~sNBMBUyrHzlF7D7xTt5uKax5AWrEQHFJrjD9ojS02-UqjbQWj-ocfyK8JiRB5semoJymgj47jl6izz9jW2sqo5ZOYUItCjhSBPkWcu0R6cRcxpH3X590yhxmcM0d5E2H3Y3zdgtAooVbPlgaJk2rz75x5lHEsGWck3kwxZTKs3LxCiqIJIJK5WwBVMdJoVe3zhGy3WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/63d3/0872/c329a0a1ec5fca783f1527e4efba6e61?Expires=1637539200&Signature=h5FaTl7P5pb6UMfz9lRxwiaYROy02KjeBlyymeeeK7W-UQ4LGHwLcdbOSh3nI~dCVF6jRjHfODfTIpW619Pe3roTm3CrYJQcGp3OTDCc3qrUDDLPuTHxs9IGsMUksIXqP0u95gCjB6zFxccd~~awrRdjDjWWAK0bDRVpbv6D6lDz87zMnqs6InS3cnV1DY6S4V66hmZ70C3RRwFd01kx4Xt3phsLV7W9KZ52jVIv2-tRiwHXIu6G-C~jOKwwdlzMwKJJm4cUrHKK~FSHJnVQ7LliXiOYbQnx8uxzFewiTbfBE7VbJ8T28~mMEiph8tMvXz-mFsv1gukanpUCSGvaiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/c237/3ab5/53d94a7106076b23e52aeb9a8a239bfb?Expires=1637539200&Signature=O14W9RvVi470wieGevpZJvvWAUSbiGvuaIH5BBFn9GM04WVVzRPo9APBa7DKFpia5Evr~6Nqz0ruq5ibq0f1J1wCvnDPD--s4JDgpMP3a82O7aedviQfdSN39nTVwXWv68LwI5EIgTT~IhFbdqpv4wZTUIMGE38QbiNxRDMVuJ~vYAmyann1WDuROiLvgFl-SeNnLQkYqbKFTSmGB~a6V6xtJFfnBNS~-UZ7ng7WpR3f3HucYjyZ2KDlwq4vpfm9hhjEkpBTntkhuzTrirma~DsrGxTKaBgC5kdrnoSp6EiRJB5ckQd6IIIF23~0HQ6DUpKE47k7y7EVHUAzBk-E9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]
    var row4Img = ["https://s3-alpha-sig.figma.com/img/7c94/092a/c8663a64c3d79b102290ef6bbdd8b681?Expires=1637539200&Signature=eqMRif5ngHwXCKKaPIAevQVcRQaMdWuzNTgIiJv~TMHkXHTHratVNs3vk0Wy0rbnDk3r14Rv~AwfmPmNc37RK2QU8nH88b7ZtHPaATr6BkvbpmO1HqolLqoG~WhoRu4tT2pZVQiHP7UkhmPxrVAv5B-LjI7oZvPspOr21fXzge7KZxU4pNmu3K5~kX60Zsvm-KaG7ivLUxFGLzzyL~e1I4HcUTtdxOcdgcQAW9Xbw-OnFGQUYOU-IsfJQHkrZL7U6cUI5LKMiwr3dHksE~plOvjMzaueUIuCETGL-wnzV4OF63DRKoQnYQ3V7dsi0F0Ok17boMdbUSiciAt9ziIfZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/c746/af80/6f53a6f3028cbbb747c885c6a6a97a29?Expires=1637539200&Signature=EaVUUuIV5zlbq5qR8ynpcQ6qglt12GplPQw1iJ7Zfg1wmENM6gIhWV7sMaHJ9t9G2JkgEvIOG~zNchD6OAHXMnCakn9a-GvUuU3e0TR4AoaAVHandt6p7~qLork7Wg3hsd5md35glCiJ12UZe5ThH4VPb92~p3U-uea6X6rgiF8dZ6oy9810AcaqC555byXAsZnmKJcSvBoO6fS84yJiWojabLqZVF~GMlGDJrsxZ4xKPf6B-lGWz2zR~SZrRTwb3Zhlw1azTQvOz~ODKAuQWiutysdEHoyi7d-2hSixBL8a5J3yJzfIMf0azAmZQPnJ7~bz~bDFiFhgZZAdIwisXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/e7a2/9d3c/f547fc1edb1015692bb19621070f6b49?Expires=1637539200&Signature=hYe8orViGtQXex1vec2VRs9kZX2M9lOrrjbCQksvZiE1gauzL7tCIHQBEEeM6ajd3utSC7F~2bXYsQEMbynoHxMpkiN6O4EdVbjXqM9EoG4DvoACMXQ9WhXIR6KQ0UZQW-9O4lFKbea10PT0LWWhSWhz3n7gcITRzy0k0b6CqFpklwZP~3WKwLzvDk0rnv35NXOp1ISurfBl8PTTNcX5RkYFTa3wiId4VlLG-PL7110jP3cRIy8nsWK3SLKXleHGL4CkylDLWUSLlTBT0g7AuzFMdfi4WJraGqlNi8HNz3d~iH-rEppQrHZ6ALYaXhInliyC7A~gYcz1kKydOqENyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]
    var row5Img = ["https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=85","https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85&wm=1","https://s3-alpha-sig.figma.com/img/9026/ff35/a00dd10fd914ecd93f0abe139b563f5b?Expires=1637539200&Signature=Q0DssljF4d4AgB2sn8OUX2jLiQCytmW0k6xe0367Vn4smryzSuoRg9VMbC8Zv-~EIzcau8VJ1OavqUaxG15sjmRaqavI4lptzN1TbBYxP092MWb1VbDppnMrGt5cWKA7kYoF-XtlNJMOyJZGvQlGgBfU~GThog23AvrFVwrvgcJEnfO9jR3lYK9iNuxaUGMfU-k37CNrGyukCH~cI0I6zq6PHlu~gABZfk6~LjjFSxh1ryD~vlSuZOH~yjru1p1iaiswQCOrCPjDiOBEAHz-6DC5GmbvBGkJXFcmGeHYGMnmGo3ebyDMn6vrq76NSHChHzYmdhE006mQZ2a8QSKaaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]
    var row6Img = ["https://s3-alpha-sig.figma.com/img/89c5/d575/0c19acbe2d425e7f7808c6f7fd43efca?Expires=1637539200&Signature=SvMv4ksio9B0u-Q9XGkONv71s4L6swobyVpseN3D-uPVjODEyWpIHvXt0fjAmUYhTTSJBVdqyXAff~Mvb3PC8FSEm2ZWHLUj88M9SPXjsuD~75Fl8dKM2eFdoBqBFYfuKrfJXDeZVnX5cmVg36sJc0ixaY2oIDIX2unQA6s-0Olh4uwlbpc-TGbEFNWz2DHqMEba96x8Hp47X6bELTVG~k9h2ubhhjQWOiwG75cabPshNSJl4aJqh9xm1eekTuOQBqw1grofHR0T4q7cgJaGDazACcRGr3HWoskIrU15AnNvFDpqfk6Uv8mIAAAWeUSwO0Ei3E5RK4qLc8XKTUkdzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/1096/b530/d0751bba10bbd04efb905f64162014b5?Expires=1637539200&Signature=WCuNLju3ynEX56fCXWVNs8qPjSgEA5gK56XKs~Ee3vWtnfXom7Qt33X6E0TNqk5qYw4E4f7wgaax3508pdSfLlpqUpSz-miv2R4GERe7ALdDo1g~qO5ACy38Bg4lLcWk39KWnSKjgnYRCQp8TN80heJaZjpbLxdxWl2eJCrdG5jvmGXw0w0Be9RNwjzx4~uPqIkpGHiQAUP7VyqR4Ya2fNoUfFciI1-X92C0OSNQwsY3mhVyXilBK9ZKkht4Q0h3Ld~3lVQKgJuKObK40sV7NH~1OgvuKF5HznygiQk-ptE9VuY6Nf~DA2wMJgwTDxEo3~ytDzva7Ne61WiyA6HU7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/38ee/3f9d/4ef801e3c15edf70099e99c1bc65ec60?Expires=1637539200&Signature=JVdgbc~4lLKW~NWK5KS7OgwngHcNQEpJBL0KOGk2Jnut-~OdrMi2u6RoCG4BGj3TQ717RwcX~VQTaNKSKxO4MbM0NSvV7ormldFeaijgll-fjAhggt6fYVUSPDBMEY8CFCou72z3nWRcCrDv~Sb6Nnl66ceCcAAtnH4E1kipcenmwrIo2e7o6jCT-98BhZuYiGlKtKUCdnb9Q3xS-nn8BYYmpO-xC3JWBrK1hu5EqVtEWHpWTy4rBsSGfe1YOCp6eXIP0Gm2XI5rKqoe9LtFlWnJk8oaigEdAVwCuYI1sT5scwAfwz7J6lG77AbdwDicLrQ7fuHp~1F3u8Lvn53WNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]
    var row7Img = ["72UlK3A2lAw","JsTY1jGOvO0","-XAZ8wgqik4"]
    

    const whiteRow1 = ["https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/side-view-(left)-90.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/rear-left-view-121.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/front-view-118.jpg"];
    const whiteRow2 = ["https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7384/1614326304397/top-view-117.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/exterior-image-164.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/exterior-image-166.jpg"]
    const whiteRow3 = ["https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/8497/Tata-Nexon-XZA-Plus-Dark-Edition/1625825579881/dashboard-59.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/sun-roof-moon-roof-81.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/child-seat-201.jpg"]
    const whiteRow4 = ["https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/rear-view-mirror-courtesy-lamps-64.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/8497/Tata-Nexon-XZA-Plus-Dark-Edition/1625825579881/rear-seats-52.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/knob-selector-184.jpg"]
    const whiteRow6 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqxD2NHW3KlgwhSvcqc-J9Vqk1Swr90Sklg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsjY4jlb7PVczQoNJTKzgnrWP7CsMHFJz_g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtj_uqVQToU11HHjBVUBJ2tQpgZMLpfflMA&usqp=CAU"]
    const whiteRow7 = ["3E_EAGt_RJU","zr7VE0FnwQY","tHNMWvW3BR8"]
    
    const [color,setColor] = React.useState(row1Img)
    const [color2,setColor2] = React.useState(row2Img)
    const [color3,setColor3] = React.useState(row3Img)
    const [color4,setColor4] = React.useState(row4Img)
    const [color6,setColor6] = React.useState(row6Img)
    const [color7,setColor7] = React.useState(row7Img)
    
    const redRow1 =["https://imgd.aeplcdn.com/1056x594/cw/ec/42356/Mahindra-XUV300-Exterior-170844.jpg?v=20191909172727&wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148142.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/n/cw/ec/43897/mahindra-xuv300-action-10.jpeg?wm=1&q=85"]
    const redRow2 = ["https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Exterior-160493.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148039.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148059.jpg?wm=1&q=85"]
    const redRow3 = ["https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-interior-dashboard.jpeg?q=85&wm=1","https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-interior-instrument-cluster.jpeg?q=85&wm=1","https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-interior-front-row-seats.jpeg?q=85&wm=1"]
    const redRow4 = ["https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Interior-160476.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/n/cw/ec/53749/ac-controls22.jpeg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Interior-160492.jpg?wm=1&q=85"]
    const redRow6 = ["https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148147.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148145.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Exterior-160497.jpg?wm=1&q=85"] 
    const redRow7 = ["1kM-JVd4FLM","wZA1oxypzuE","wygbf1VJp0U"];

    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const [visible3, setVisible3] = React.useState(true);

    const [colorLine,setColorLine] = React.useState({...styles.line,background:"rgb(3, 128, 190)"})
    const [colorLine2,setColorLine2] = React.useState({...styles.lines,background:"rgb(3, 128, 190)"})
    return (
        <>
           <Navbar/> 
                <div style={styles.contain}>
                    <div style={styles.gallery}>Gallery</div>
                        <div style={colorLine}></div>
                            <div style = {
                                colorLine2
                                    }></div>
                                        <div style={styles.exterior}>Exterior</div>
                                            <ImageList image = {color}/>
                                        <ImageList image = {color2}/>
                                    <div style = {
                                colorLine2
                            }></div>
                        <div style={styles.exterior}>Interior</div>
                    <ImageList image = {color3}/>
                <ImageList image = {color4}/>
            <Modal
        open={open}
    onClose={handleClose}
aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
        >
            <Box sx={styles.style}>
                <img src={pic} alt="" style = {styles.zoomIn} />
                    </Box>
                        </Modal>
                            <div style = {
                                colorLine2
                                    }></div>
                                <div style={styles.exterior}>Colors</div>
                            <ColorList image = {row5Img}/>
                        <div style = {styles.selectColor}>
                    {visible && <p style = {styles.white}></p>}
                {visible2 &&  <p style = {styles.grey}></p>}
            {visible3 && <p style = {styles.blue}></p>}
        </div>
    <div style = {
colorLine2
    }></div>
        <div style={styles.exterior}>Road Test</div>
            <ImageList image = {color6}/>
                <div style = {
                    colorLine2
                        }></div>
                <div style={styles.exterior}>Videos</div>
            <VideoList image = {color7}/>
         <div style = {styles.playButton}></div>
    </div>
<Footer/>
        </>
    )
}