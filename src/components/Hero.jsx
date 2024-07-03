import "../App.css";
function Hero(){
    return (
        <>
        <div className="mainherodiv">

           <div className="herodiv">
              <h1>Let us find your</h1>
              <h1 style={{color:"red"}}>Forever Food.</h1>

              <p className="heropara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde nihil voluptate debitis at aut vitae illo laboriosam aliquid odit!</p>

              <button className="searchnow" style={{backgroundColor:"red" , color:"white" }}>Search Now</button>
              <button className="knowmore" style={{backgroundColor:"white" , color:"red" }}>Know More</button>
           </div>
           
        </div>
        </>
    )
}
export default Hero;