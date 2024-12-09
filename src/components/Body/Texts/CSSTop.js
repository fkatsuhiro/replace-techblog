import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../../App.css';

function CSSTop() {
    const [CSSTexts, setCSSTexts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/article_data.json');
                const textData = await response.json();
                /* データの取得ができているかログ出力*/
                console.log("Fetched Data:", textData);
                // CSSの教材を指定して取得
                const Texts = textData.filter((item) => item.id >= 4 && item.id <= 7);
                console.log("Filtered Results", Texts);
                setCSSTexts(Texts);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchData();
    }, []); // 初回レンダリング時のみ実行

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
                Webサイトのデザインを作成するCSSを学習しよう！
            </p>
            <div className='row' style={{ width: '85%', margin: '0 auto', paddingBottom: '100px' }}>
                {CSSTexts.map((CSSTextsItem) => {
                    return (
                        <div className='course-item col-md-3 mt-3'>
                            <Link
                                to={CSSTextsItem.url}
                                className='course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor'
                                key={CSSTextsItem.id}
                            >
                                <img
                                    src={CSSTextsItem.image}
                                    alt="result image"
                                    className="course-image course-inner-item"
                                    style={{ textAlign: 'center' }}
                                />
                                <h6 className="course-title" style={{ textAlign: 'center' }}>
                                    {CSSTextsItem.title}
                                </h6>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default CSSTop;