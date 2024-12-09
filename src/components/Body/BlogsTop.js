import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Toppage.css';

function BlogsTop() {
    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fkatsuhiro.github.io/replace-techblog/article_data.json');
                const textData = await response.json();
                /* データの取得ができているかログ出力*/
                console.log("Fetched Data:", textData);
                // Blogの記事を指定して取得
                const Articles = textData.filter((item) => item.id >= 1000 && item.id <= 1003);
                console.log("Filtered Results", Articles);
                setBlogs(Articles);
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
                -- 技術ブログ --<br /> <br />
                コマンドラインやアプリ実装に有効な方法を学ぼう！！
            </p>
            <div className='row' style={{ width: '85%', margin: '0 auto', paddingBottom: '100px' }}>
                {Blogs.map((BlogItem) => {
                    return (
                        <div className='course-item col-md-3'>
                            <Link
                                to={BlogItem.url}
                                className='course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor'
                                key={BlogItem.id}
                            >
                                <img
                                    src={BlogItem.image}
                                    alt="result image"
                                    className="course-image course-inner-item"
                                />
                                <h6 className="course-title">{BlogItem.title}</h6>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default BlogsTop;