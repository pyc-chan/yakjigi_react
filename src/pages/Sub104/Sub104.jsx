import OnMouseHover from '../../components/OnMouseHover';
import styles from '../../styles/Sub104/sub104.module.css'

function Sub104(props) {
    return (
        <>
            <div className={styles.content_container}>
                <div className={styles.submain}>
                    <div className={styles.titles}>
                        <h2 className={styles.maintitle}>신약과 제네릭</h2>
                        <p className={styles.subtitle}>신약과 제네릭에대한 부제목</p>
                    </div>
                    <div className={styles.contents}>
                        <p className={styles.ptag}>
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                        </p>
                    </div>
                </div>
                <div className={styles.section_contain}>
                    <OnMouseHover/>
                    <OnMouseHover/>
                </div>
            </div>
        </>
    );
}

export default Sub104;