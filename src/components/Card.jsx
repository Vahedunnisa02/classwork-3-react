import "../App.css";
import SideImage from "../assets/cardimage.avif"
import Profile from "./Profile";
function Card(){
    return (
        <>
        <div className="wrapper-card">

        <div className="image">
        <img src={SideImage} alt="sideimage" />
        </div>

        <div className="sidecard">
            <div>
            <h1>Lorem ipsum consectetur adipisicing elit. Fugit necessitatibus ndae!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat pariatur delectus, repudiandae libero rerum nobis blanditiis laboriosam consequatur! Accusantium iusto, adipisci quod at quo corrupti ratione eos sed laboriosam.</p>
            <button>Get in touch</button>
            </div>
        </div>

        </div>
       <section id="profile">
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
         <Profile/>
          <Profile/>
           <Profile/>
       </section>
        </>
    )
}
export default Card;