// 検索結果表示コンポーネント
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Toppage.css';


function SearchResult() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    // 初回マウント時にデータを取得
    useEffect(() => {
        fetch('article_data.json', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setResults(data);
            })
            .catch(error => console.error('データ取得時エラー:', error));
    }, []);

    // クエリの変化を監視
    useEffect(() => {
        if (query) {
            const filteredItem = results.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.content.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResults(filteredItem);
        }
    }, [query]);

    return (
        <div className="bg-light">
            {filteredResults.length > 0 &&
                <div>
                    <p style={{ paddingTop: '100px', paddingBottom: '50px', width: '90%', margin: 'auto', fontSize: '1.4rem', fontWeight: 'bold' }}>{query}の検索結果</p>
                    <div className='row' style={{ width: '85%', margin: '0 auto' }} >
                        {filteredResults.map((filteredResultItem) => {
                            return (
                                <div className='course-item col-md-3'>
                                    <Link to={filteredResultItem.url} className='course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor' kay={filteredResultItem.id}>
                                        <img
                                            src={filteredResultItem.image}
                                            alt="result image"
                                            className="course-image course-inner-item"
                                        />
                                        <h4 className="course-title">{filteredResultItem.title}</h4>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            {filteredResults.length === 0 && <h4 style={{ paddingTop: '100px' }}>検索結果がありません。</h4>}
        </div>
    );
}

export default SearchResult;