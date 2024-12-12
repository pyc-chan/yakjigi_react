
import React, { useState } from 'react';
import styles from '../../styles/UserMyInfo/UserMyInfo.css'
function UserMyInfo(props) {
    /* const [settingValue, setsettingValue] = useState(data); */
    
    return (
        <>
            <div className={styles.titles}>
                <h2 className={styles.maintitle}>내 정보 보기</h2>
                <p className={styles.subtitle}>내 정보를 확인해 보세요</p>
            </div>
            <div>
                    메뉴바 영역
                </div>
                <hr className={styles.hrtag}/>
                <div className={styles.input_section}>
                    <span className={styles.input_title}>아이디</span>
                    <input className={styles.input_id} readOnly value={"user_id"}/* {`${data.user_id}`} */ />
                    <hr className={styles.input_hr}/>
                    <form action="">
                        <span className={styles.input_title}>닉네임</span>
                        <input className={styles.input_id} readOnly value={"user_nickname"}/* {`${data.user_nickname}`} */ />
                        <button className={styles.input_submit}>변경하기</button>
                    </form>
                    <hr className={styles.input_hr}/>
                    <form action="">
                        <span className={styles.input_title}>프로필 이미지</span>
                        <img className={styles.input_profile_image} src='./images/sub104/pds1.jpg' alt='./images/sub104/tree-3.jpg' />
                        <span className={styles.input_span}>· 나를 잘 표현할 이미지를 등록해 주세요!</span>
                        <span className={styles.input_span}>· 150 X 150px 이상의 이미지 사용을 권장합니다</span>
                        <span className={styles.input_span}>· 사진은 10MB 미만의 이미지를 등록해 주세요</span>
                        <input className={styles.input_profile} readOnly value={"user_profile"}/* {`${data.user_profile}`} */ />
                        <button className={styles.input_findfile}>파일찾기</button>
                        <button className={styles.input_submit}>변경하기</button>
                    </form>
                    <hr className={styles.input_hr}/>
                    <span className={styles.input_title}>이름</span>
                    <input className={styles.input_id} readOnly value={"user_name"}/* {`${data.user_name}`} */ />
                    <hr className={styles.input_hr}/>
                    <span className={styles.input_title}>성별</span>
                    <label>
                        <input type="radio" className={styles.input_radio} value={"남자"} name='gender' checked/> 남자
                    </label>
                    <label>
                        <input type="radio" className={styles.input_radio} value={"여자"} name='gender' /> 여자
                    </label>
                    <label>
                        <input type="radio" className={styles.input_radio} value={"기타"} name='gender' /> 기타
                    </label>
                    <hr className={styles.input_hr}/>
                    <span className={styles.input_title}>전화번호</span>
                    <input className={styles.input_phone} readOnly value={"user_phone"}/* {`${data.user_phone}`} */ />
                    <button className={styles.input_submit}>변경하기</button>
                    <hr className={styles.input_hr}/>
                    <span className={styles.input_title}>비밀번호</span>
                    <span className={styles.input_span}>비밀번호를 변경하려면 옆의 변경하기 버튼을 눌러주세요</span>
                    <button className={styles.input_submit}>변경하기</button>
                    <hr className={styles.input_hr}/>
                    <span className={styles.input_title}>이메일</span>
                    <input className={styles.input_email} readOnly value={"user_email"}/* {`${data.user_email}`} */ />
                    <hr className={styles.input_hr}/>
                </div>
        </>
    );
}

export default UserMyInfo;