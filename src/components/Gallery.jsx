import { Footer } from "./Footer";
import { GalleryHead } from "./GalleryHead"
import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const styles = {
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
        background: "#FF546D",
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
    },
    selectColor:{
        display: "grid",
        gridTemplateColumns: "repeat(3,34%)"
    },
    white:{
        width: "95%",
        height: "25px",
        marginTop: "-25px",
        border: "1px solid #000000",
        marginBottom: "40px",
    },
    grey:{
        width: "95%",
        height: "25px",
        marginTop: "-25px",
        backgroundColor: "grey"
    },
    blue:{
        width: "95%",
        height: "25px",
        marginTop: "-25px",
        backgroundColor: "#1795CA"
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
        )
    }

    function VideoList(props){
        const images = props.image;
        
        const listItems = images.map((el)=>
            <iframe  width="95%" height="245" src={`https://www.youtube.com/embed/${el}?&autoplay=1`} title = "Nexon" onClick = {handleOpen} >
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
    
    var row5Img = ["https://s3-alpha-sig.figma.com/img/5793/0164/6c171c2606c6e5dce78c484d636c3a61?Expires=1637539200&Signature=WRaNJShTBSJzuYZLrrR5Z~kyTDmBbpjkMygdwROYp-rcnlrtm9HtICBrpGf541Owb2WXUPrayVfsL2lFWaZDkeMqsQBxVNo1nY50~v0O0EfblLCddLJlBHVTJJJtVCqDtd-J~3ucOJ21YZ04N2oWY28y2vC~0gNgAzpdtvm8MKBbd4qhr-r~2tk73RtJj7kFiivwIaCZHK6jzxxwzHsZjWF2lCRxs2Tkfn82KY8PfBV7CRswk-g5A~8j6ysy-ht-tekdn0Viiap0kHmwY0geNAjjZ5jGNLjNg~wIiWuWKPdty-va6nGJwawl2y61X7ioHrQCLLRmfUjflaOqer~CYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/6e47/b736/0e65095e158797c1d090c40023de493e?Expires=1637539200&Signature=ZlRComiWX95YHoIQoqb1sMjKeA4kcG4UYvXkcJJWaoqR1Sb9vop13V5wNpaKykvdtHMXB67ilT5b4cNPCD5Vxk4JboWhhUDz6FQVHb-oh~S8YBkeYiB5h0OPA1W9PL9azkgAr2EpPIvUHdVywbj4eAq5-zKC9Iufl6tV6Re7y7SFCNCVFqxvNonQ8GQBIzjBQx~sq64KXyClKwT8n2BmlnRLTRpU6sFywgmAASSx03~bgP82~eWOIkOLeKHPwI6owj12gZgHZheKo4KnAJhjHxCO1h8UYjY5m2BuCHd4PSXzbDQCB5b9hwnJ~4xmvA1cc0jUxyYWywYSdql4LABh9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/1ed9/c597/d8de9e461aa8cc6700ff9fe8ba548e15?Expires=1637539200&Signature=bpqukmDRnptOkkZI8qsNDcb~m23U3KqwmLCc5UlMRAQ~x2CGOaCwQHzrm7GIBY-cZaVqR9dbdeh2tx52IoGT2fshig0fzuUhRKkpfeWrNIJCcrgy1mEQns2hfYbYH3NCdLInB9KIArUlfDTksaudMMqYcvdevFWDOTlRIi0Hb8x1SjbnfigTUs~ACzNiltA7XwETe2Rj7Fo3keqggu6nwsD8mnGf0GyUX3bnUR3aJuQGMOUhun6XtkcJxlh6dF7N8p0t4-aW7-qidbVw5HgF3gbqLbaeDkVfx9ZJeCuKZa4EzaAHKlWCi~HI8~1Mxhk9FN8sccPA9Zmp0Qe8N45FTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]
    
    var row6Img = ["https://s3-alpha-sig.figma.com/img/89c5/d575/0c19acbe2d425e7f7808c6f7fd43efca?Expires=1637539200&Signature=SvMv4ksio9B0u-Q9XGkONv71s4L6swobyVpseN3D-uPVjODEyWpIHvXt0fjAmUYhTTSJBVdqyXAff~Mvb3PC8FSEm2ZWHLUj88M9SPXjsuD~75Fl8dKM2eFdoBqBFYfuKrfJXDeZVnX5cmVg36sJc0ixaY2oIDIX2unQA6s-0Olh4uwlbpc-TGbEFNWz2DHqMEba96x8Hp47X6bELTVG~k9h2ubhhjQWOiwG75cabPshNSJl4aJqh9xm1eekTuOQBqw1grofHR0T4q7cgJaGDazACcRGr3HWoskIrU15AnNvFDpqfk6Uv8mIAAAWeUSwO0Ei3E5RK4qLc8XKTUkdzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/1096/b530/d0751bba10bbd04efb905f64162014b5?Expires=1637539200&Signature=WCuNLju3ynEX56fCXWVNs8qPjSgEA5gK56XKs~Ee3vWtnfXom7Qt33X6E0TNqk5qYw4E4f7wgaax3508pdSfLlpqUpSz-miv2R4GERe7ALdDo1g~qO5ACy38Bg4lLcWk39KWnSKjgnYRCQp8TN80heJaZjpbLxdxWl2eJCrdG5jvmGXw0w0Be9RNwjzx4~uPqIkpGHiQAUP7VyqR4Ya2fNoUfFciI1-X92C0OSNQwsY3mhVyXilBK9ZKkht4Q0h3Ld~3lVQKgJuKObK40sV7NH~1OgvuKF5HznygiQk-ptE9VuY6Nf~DA2wMJgwTDxEo3~ytDzva7Ne61WiyA6HU7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/38ee/3f9d/4ef801e3c15edf70099e99c1bc65ec60?Expires=1637539200&Signature=JVdgbc~4lLKW~NWK5KS7OgwngHcNQEpJBL0KOGk2Jnut-~OdrMi2u6RoCG4BGj3TQ717RwcX~VQTaNKSKxO4MbM0NSvV7ormldFeaijgll-fjAhggt6fYVUSPDBMEY8CFCou72z3nWRcCrDv~Sb6Nnl66ceCcAAtnH4E1kipcenmwrIo2e7o6jCT-98BhZuYiGlKtKUCdnb9Q3xS-nn8BYYmpO-xC3JWBrK1hu5EqVtEWHpWTy4rBsSGfe1YOCp6eXIP0Gm2XI5rKqoe9LtFlWnJk8oaigEdAVwCuYI1sT5scwAfwz7J6lG77AbdwDicLrQ7fuHp~1F3u8Lvn53WNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]
  
    var row7Img = ["3E_EAGt_RJU","tHNMWvW3BR8","tHNMWvW3BR8"]
    return (
        <>
           <div style={styles.contain}>
           <div style={styles.gallery}>Gallery</div>
            <div style={styles.line}></div>
            <GalleryHead name = "Exterior"/>
            <ImageList image = {row1Img}/>
            <ImageList image = {row2Img}/>
            <GalleryHead name="Interior"/>
            <ImageList image = {row3Img}/>
            <ImageList image = {row4Img}/>
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
            <GalleryHead name="Colors"/>
            <ImageList image = {row5Img}/>
            <div style = {styles.selectColor}>
                <p style = {styles.white}></p>
                <p style = {styles.grey}></p>
                <p style = {styles.blue}></p>
            </div>
            <GalleryHead name="Road Test"/>
            <ImageList image = {row6Img}/>
            <GalleryHead name="Videos"/>
            <VideoList image = {row7Img}/>
          <div style = {styles.playButton}>
          </div>
           </div>
          <Footer/>
        </>
    )
}