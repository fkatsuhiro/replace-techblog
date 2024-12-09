import React from 'react';
import { Link } from 'react-router-dom';
import '../../Toppage.css';

function TextsTop() {
    const TextLanguage = [
        { id: 1, title: 'HTML', imgUrl: './images/course_image/undraw_html.png', url: '/texts/html' },
        { id: 2, title: 'CSS', imgUrl: './images/course_image/undraw_css.png', url: '/texts/css' },
        { id: 3, title: 'JavaScript', imgUrl: './images/course_image/undraw_javascript.png', url: '/texts/javascript' },
        { id: 4, title: 'SQL', imgUrl: './images/course_image/undraw_sql.png', url: '/texts/sql' }
    ];

    return (
        <div className='bg-light'>
            <p
                style={{
                    paddingTop: '100px',
                    paddingBottom: '30px',
                    width: '85%',
                    margin: 'auto',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                }}
            >
                -- 教材一覧 --<br /> <br />
                HTML/CSS JavaScript で基本的なWeb制作の技術に関して、SQLでデータベースの扱い方に関して学習しましょう！！
            </p>
            <div className='row' style={{ width: '85%', margin: '0 auto', paddingBottom: '100px' }}>
                {TextLanguage.map((TextLanguageItem) => {
                    return (
                        <div className='course-item col-md-3'>
                            <Link
                                to={TextLanguageItem.url}
                                className='course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor'
                                key={TextLanguageItem.id}
                            >
                                <img
                                    src={TextLanguageItem.imgUrl}
                                    alt="result image"
                                    className="course-image course-inner-item"
                                />
                                <h5 className="course-title">{TextLanguageItem.title}</h5>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TextsTop;