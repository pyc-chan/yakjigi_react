import React, { useCallback, useState } from 'react';
import styles from '../../styles/Sub202/sub202.module.css'

function Sub203(props) {
    // 버튼의 상태들을 저장하는 배열
    const [buttonstates, setbuttonstates] = useState(Array(5).fill(false));
    // 버튼 클릭하면 그 버튼의 값 변경
    const buttonclick = useCallback((index, event) =>{
        event.preventDefault();
        setbuttonstates(prev =>{
            const newstates = [...prev];
            newstates[index] = !newstates[index];
            return newstates;
        });
    });
    
    const buttonment = [
        "첫번째 버튼 멘트 첫번째 버튼 멘트 첫번째 버튼 멘트 첫번째 버튼 멘트","두번째 버튼 멘트","세번째 버튼 멘트","네번째 버튼 멘트","다섯번째 버튼 멘트"
    ];
    const resultlist = [
        { name: "의약품 1", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
        { name: "의약품 2", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
        { name: "의약품 3", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
        { name: "의약품 4", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
        { name: "의약품 5", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다.부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다.부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
        { name: "의약품 6", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." },
        { name: "의약품 7", value: "부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다. 부작용 입니다." }   
    ];
    return (
        <>
            <div className={styles.titles}>
                <h2 className={styles.maintitle}>부작용 검색하기</h2>
                <p className={styles.subtitle}>연령대와 건강 상태에 따른 의약품 부작용을 검색하세요</p>
            </div>
            <div className={styles.submain}>
                <div className={styles.contents}>
                        <p className={styles.search_text}>건강 조건으로 검색하기</p>
                            <div className={styles.search_check}>
                                {buttonstates.map((k, index)=>(
                                    <button key={index} className={`${styles.search_box} ${buttonstates[index] ? styles.box_true : styles.box_false}`} onClick={(event)=>buttonclick(index, event)} >
                                        {buttonment[index]} 
                                    </button>
                                    
                                ))}
                            </div>
                            <p className={styles.search_text}>검색어 검색</p>
                            <form action="">
                            <div className={styles.search_div}>
                            <input type="text" className={styles.search_bar} placeholder='검색어로 검색하기'/>
                                <button className={styles.search_icon} onClick={'보도자료 onclick'}>
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                            </div>  
                            <input type="hidden" name='usestate' value={buttonstates} />
                        </form>
                </div>
            </div>
            <div className={styles.medi_result01}>
                <div className={styles.h3tag}>검색결과</div>
                <hr className={styles.hrtag}/>
                <div className={styles.medi_table}>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.tablecell}>약품명</th>
                                <th className={styles.tablecell}>부작용</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultlist.map((k, index)=>(
                                <tr key={index}>
                                    <td className={styles.tablecell}>{k.name}</td>
                                    <td className={styles.tablecell}>{k.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>
            <div className={styles.API_section}>    
                {/* API 들어갈 영역 */} 
                <p> API가 들어갈 영역입니다.</p>
            </div>
        </>
    );
}

export default Sub203;