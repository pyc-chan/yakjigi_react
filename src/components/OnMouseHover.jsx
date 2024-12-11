import React, { useState } from 'react';
import styles from '../styles/Sub104/sub104.module.css'

function OnMouseHover(props) {
    const [isHovering, setIsHovering] = useState(false);
    if(isHovering === true){
        return (
            <div className={styles.img_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                <div>
                    <img className={styles.image_icon} src='./images/sub104/pds.jpg' alt="사진이 없당께요." />
                    
                </div>
            </div>
        );
    }else{
        return (
            <div className={styles.image_section} onMouseOver={()=> setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                <div>
                    
                <img className={styles.image_icon} src='./images/sub104/coffee-blue.jpg' alt="사진이 없당께요." />
                </div>  
            </div>
        );
    }
}

export default OnMouseHover;