import React, { useState } from 'react';
import styles from '../../styles/UserPWChange/UserPWChange.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserPWChange(props) {
    const [nowPassWord, setNowPassWord] = useState();
    const [newPassWord, setNewPassWord] = useState('');
    const [newPassWordChk, setNewPassWordChk] = useState('');
    const [passWordSame, setPassWordSame] = useState(false);
    const [pwState, setPwState] = useState(false);
    
    const passWordChk = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z\d!@#$%^&*]{8,15}$/;
    
    const submitPassword = async (event) => {
        // 기본 실행 방지
        event.preventDefault();
        
        try {
                const response = await axios.patch('백엔드 API 주소', {
                    user_password: nowPassWord,
                    user_newpassword: newPassWord
                });
                // 서버로 전송된 후 처리
                if (response.status === 200) {
                    alert('비밀번호가 업데이트되었습니다.');
                    // 이전값 저장
                }
        } catch (error) {
            console.error('서버와의 통신 중 오류 발생: 비밀번호 변경', error);
        }
    };
    
    const pwStatetest = (event) => {
        const password = event.target.value;
        setNewPassWord(password);
        
        
        if(newPassWord){
            if(!passWordChk.test(newPassWord)){
                setPwState(false);
                document.getElementById('pwtest').textContent = "비밀번호는 영어 대/소문자,특수문자,숫자를 포함하여 8자이상 15자이내여야 합니다.";
            } else{
                setPwState(true);
                document.getElementById('pwtest').textContent = "";
            }
        }
    }
    
    const navigator = useNavigate();
    
    const editingCancel = () => {
        navigator('/UserMyInfo');
    }
    
    /* const changeNowPassWord = (event) => {
        setNowPassWord(event.value);
    } */
    
    return (
        <>
            <div className={styles.container}>
                <div>
                    메뉴바 영역
                </div>
                <div className={styles.contents}>
                    <hr />
                    <form onSubmit={submitPassword}>
                    <span>현재 비밀번호</span>
                    <input type="text" className={styles.input_password} value={nowPassWord} onChange={/* changeNowPassWord */ setNowPassWord} /> <br/>
                    <span>새 비밀번호</span>
                    <input type="text" className={styles.input_password} value={newPassWord} onChange={pwStatetest} /><br/>
                    <p id='pwtest' className={styles.pwtest}></p>
                    <span className={styles}>새 비밀번호 확인</span>
                    <input type="text" className={styles.input_password} value={newPassWordChk} onChange={setNewPassWordChk} /><br/>
                    <hr />
                    <div className={styles.input_submit_cancel}>
                        <button type="submit" className={styles.input_submit} disabled={!passWordChk || !passWordSame}>저장</button>
                        <button className={styles.input_cancel} onClick={editingCancel}>취소</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UserPWChange;