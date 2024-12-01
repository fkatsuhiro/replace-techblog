// 検索結果表示コンポーネント
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchResult() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    // 初回マウント時にデータを取得
    useEffect(() => {
        fetch('search_result.json', { method: 'GET' })
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
        <div>
            {filteredResults.length > 0 &&
                <div>
                    <p style={{ paddingTop: '100px', paddingBottom: '50px', width: '90%', margin: 'auto', fontSize: '1.4rem', fontWeight: 'bold' }}>HTML/CSS JavaScript で基本的なWeb制作の技術に関して、SQLでデータベースの扱い方に関して学習しましょう！！</p>
                    <div className='row' style={{ width: '85%', margin: '0 auto' }} >
                        {filteredResults.map((filteredResultItem) => {
                            return (
                                <Link to={filteredResultItem.url} className='col-md-3 mt-3 link-style' kay={filteredResultItem.id}>
                                    <Card style={{ width: '95%', margin: '0 auto', cursor: 'pointer' }}>
                                        <Card.Img variant="top" src="" style={{ textAlign: 'center' }} />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'center' }}>{filteredResultItem.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            }
            {filteredResults.length === 0 && <h4>検索結果がありません。</h4>}
        </div>
    );
}

export default SearchResult;