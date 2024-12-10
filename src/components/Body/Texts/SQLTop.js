import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../../App.css';

function SQLTop() {
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fkatsuhiro.github.io/replace-techblog/article_data.json');
                const textData = await response.json();
                /* データの取得ができているかログ出力*/
                console.log("Fetched Data:", textData);
                // SQLの教材を指定して取得
                const Texts = textData.filter((item) => item.id >= 100 && item.id <= 105);
                console.log("Filtered Results", Texts);
                setSQLTexts(Texts);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchData();
    }, [location.pathname]); // 初回レンダリング時のみ実行

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
                Webアプリケーション開発に必須のSQLを学習しよう！
            </p>
            <div className='row' style={{ width: '85%', margin: '0 auto', paddingBottom: '100px' }}>
                {SQLTexts.map((SQLTextsItem) => {
                    return (
                        <div className='course-item col-md-3 mt-3'>
                            <Link
                                to={SQLTextsItem.url}
                                className='course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor'
                                key={SQLTextsItem.id}
                            >
                                <img
                                    src={SQLTextsItem.image}
                                    alt="result image"
                                    className="course-image course-inner-item"
                                    style={{ textAlign: 'center' }}
                                />
                                <h6 className="course-title" style={{ textAlign: 'center' }}>
                                    {SQLTextsItem.title}
                                </h6>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default SQLTop;