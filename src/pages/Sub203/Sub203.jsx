import React from 'react';
import styles from '../../styles/Sub203/sub203.module.css'

function Sub203(props) {
    return (
        <>
            <div className={styles.titles}>
                <h2 className={styles.maintitle}>보도자료 찾아보기</h2>
                <p className={styles.subtitle}>원하는 지역에서의 녹지행사를 찾아보세요</p>
            </div>
            <div className={styles.submain}>
                <div className={styles.contents}>
                    <p className={styles.search_text}>검색어 검색</p>
                    <div style={{position: 'relative'}}>
                        <form action="">
                            <input type="text" className={styles.search_bar}/>
                            <button className={styles.search_icon} onClick={'보도자료 onclick'}>
                                <span class="material-symbols-outlined">search</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.content_container}>
                <div className={styles.medi_result01}>
                    <div className={styles.h3tag}>검색결과</div>
                    <hr className={styles.hrtag}/>
                    <div className={styles.medi_infos}>
                        <img className={styles.image_medi} src='./images/sub104/coffee-blue.jpg' alt="사진이 없당께요." />
                        <div>
                            <span className={styles.medi_title}>약품이름어쩌고정</span><br/>
                            <br />
                            <span className={styles.medi_info}>약품 정보1</span>
                            <span className={styles.medi_detail}>약품 정보 입니다.</span><br/>
                            <span className={styles.medi_info}>약품 정보2</span>
                            <span className={styles.medi_detail}>약품 정보 입니다.</span><br/>
                            <span className={styles.medi_info}>약품 정보3</span>
                            <span className={styles.medi_detail}>약품 정보 입니다.</span><br/>
                            <span className={styles.medi_info}>약품 정보4</span>
                            <span className={styles.medi_detail}>약품 정보 입니다.</span><br/>
                        </div>
                    </div>
                </div>
                <hr className={styles.hrddd}/>
                <div className={styles.medi_result01}>
                    <div className={styles.titlecount}>
                        <div className={styles.h3tag}>범용금기 리스트</div>
                        <div className={styles.countnum}>총 6건</div>{/*  */}
                    </div>
                    <hr className={styles.hrtag}/>
                    <div className={styles.medi_list}>
                        <table className={styles.medi_table}>
                            <tbody>
                                <tr>
                                    <td><span className={styles.table_span}>약품명입니다.</span></td>
                                    <td><span>약품명입니다.</span></td>
                                    <td><span>약품명입니다.</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                </tr>
                                <tr>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                </tr>
                                <tr>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                </tr>
                                <tr>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                </tr>
                                <tr>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                </tr>
                                <tr>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                    <td><span>약품명</span></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
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