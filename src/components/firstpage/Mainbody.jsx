import { Link } from "react-router-dom";
function MainBody(){
    return (
        <div style={{backgroundImage:'url(https://static.vecteezy.com/system/resources/previews/033/027/497/large_2x/flat-lay-vegetables-on-white-background-food-and-diet-concept-ai-generated-free-photo.jpg)',
                     backgroundPosition:'center',height:'100vh', backgroundSize:'150vh', backgroundSize:'cover'}}>
                        <div> 
                            <h1 style={{display:"flex", justifyContent:'left', fontFamily:'Trebuchet MS', paddingTop:'240px', fontSize:'70px', paddingLeft:'200px' , color:"black"}}>MAKE HEALTHY<br></br>LIFE WITH FRESH<br></br>GROCERY.</h1>
                  <div style={{justifyContent:'center', fontFamily:'Trebuchet MS',alignContent:'center',margin:'25px',paddingLeft:'180px',fontSize:'25px',marginTop:'10px' , color:"black"}}>  
                    <p>We understand that life can be busy, and finding time to shop for groceries can be challenging.<br></br>
                       That's why we've created a convenient and easy-to-use online platform to bring your groceries <br></br>right to your doorstep.</p>
                   <Link to='/Home'>
                   <button style={{fontSize:'25px',borderRadius:'5px',margin:'5px', justifyContent:'space-evenly',paddingTop:'5px', marginTop:'20px',backgroundColor:'green',fontSize:"1.5rem", padding:"5px"}}>SHOP NOW</button>
                    </Link>
                  </div>
                
             </div></div>
                 





    )
}
export default MainBody;