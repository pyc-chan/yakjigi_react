import OnMouseHover from '../../components/OnMouseHover';
import '../../styles/Sub104/sub104.css'

function Sub104(props) {
    return (
        <>
            <div className='content_container'>
                <div className='submain'>
                    <div className='titles'>
                        <h2 className='maintitle'>신약과 제네릭</h2>
                        <p className='subtitle'>신약과 제네릭에대한 부제목</p>
                    </div>
                    <div className='contents'>
                        <p className='ptag'>
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                            의약품에 관한 텍스트 내용입니다.의약품에 관한 텍스트 내용입니다.
                        </p>
                    </div>
                </div>
                <div className='section_contain'>
                    <OnMouseHover/>
                    <OnMouseHover/>
                </div>
            </div>
        </>
    );
}

export default Sub104;