import React from "react";
import Postside from "../../components/Postside/Postside";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import './Notice.css'
 function Notice(){
  return(
        
        
        <div className="Notice">
          <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <ProfileSide/>
          <Postside/>
          <div className="RightSide">RightSide</div>
        </div>
  );
 }
 export default Notice;