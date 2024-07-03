import "../App.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Profile (){
    return (
        <>
        <div className="wrapper-profile">
            <div className="profilesummary">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis ipsa unde suscipit placeat. Harum odit sed qui mollitia eaque ea illum atque, ipsa, expedita deserunt doloremque nam, aut quis.lore Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, earum.</p>
            </div>
            <div className="profile">
                <div className="profileImage">
                   <AccountCircleIcon 
                   style={{fontSize:"35px"}}/>

                </div>
                <div className="nameandpost">
                    <h3>Gladis Lennon</h3>
                    <p>Head of SEO</p>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Profile;