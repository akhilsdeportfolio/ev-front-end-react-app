

export default function({pic1,pic2})
{
     return(<>

     <div>
      <img  src={pic1} height="325px" width="100%" style={{position:'absolute',objectFit:'cover'}} alt="asdas"/>          
     <img  src={pic2} height="122px" width="122px" style={{borderRadius:'50%',border:'5px solid',borderColor:'whitesmoke',marginLeft:'45%',marginRight:'30%',marginTop:'15%',position:'absolute',objectFit:'label'}} alt="profile"/>
     </div>
          


     </>
     )
}





