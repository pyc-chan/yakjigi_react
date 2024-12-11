import React from 'react';
import styles from '../../styles/Sub303/sub303.module.css'

function Sub303(props) {
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
            <div className={styles.list_section}> 
                {/* API 들어갈 영역 */}
                <p> API가 들어갈 영역입니다.</p>
            </div>
        </div>
        </>
    );
}

export default Sub303;