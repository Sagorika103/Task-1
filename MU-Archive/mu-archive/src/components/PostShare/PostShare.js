import React, { useState, useRef } from "react";
import './PostShare.css'
import Chad from '../../images/chad.jpg'
import { BiImageAdd } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineClose} from "react-icons/ai";
const PostShare = () => {

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };


  return (
  <div className='PostShare'> <img src={Chad} alt=""/>
      <div>
            <input type="text" placeholder='Announce something to your classmates'/>  
          
              <div className='postOptions'>
                    <div  className='option'style={{ color: "var(--photo)" }}  onClick={()=>imageRef.current.click()}>
                      < BiImageAdd/>Image</div>
                    <div  className='option' style={{ color: "var(--location)" }}>
                      <AiFillYoutube/>Youtube Link</div>
                    <div  className='option' style={{ color: "var(--video)" }}>
                      < BiImageAdd/>Google Drive </div>
                    <div  className='option'style={{ color: "var(--video)" }}>
                      <AiFillYoutube/>Link </div>
                      <button className='button ps-buttony'>Share Now</button>
                      <div style={{ display: "none" }}>
                          <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                      </div>
            </div>
              {image && (
                  <div className="previewImage">
                    <AiOutlineClose onClick={()=>setImage(null)}/>
                    <img src={image.image} alt="" />
                  </div>
                )}
      </div>
    </div>
  )
}

export default PostShare