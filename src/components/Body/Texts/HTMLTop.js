import React from 'react';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import '../../../App.css';

function HTMLTop() {
    const HTMLChapter = [
        { id: 1, title: 'HTMLとは？', description: 'HTMLの概要に関して学習します。' ,imgUrl: '', url: '/html/1' },
        { id: 2, title: 'HTMLの基本構造', description: 'Webページを表示しているHTMLの基本的な構造を学習します。' ,imgUrl: '', url: '/html/2' },
        { id: 3, title: '基本的なタグに関して', description: '画面を表示するために必要なタグに関して説明します。',imgUrl: '', url: '/html/3' }
    ];

    return (
        <>
            <p style={{ paddingTop: '100px', paddingBottom: '50px', width: '90%', margin: 'auto', fontSize: '1.4rem', fontWeight: 'bold' }}>HTML/CSS JavaScript で基本的なWeb制作の技術に関して、SQLでデータベースの扱い方に関して学習しましょう！！</p>
            <div className='row' style={{ width: '85%', margin: '0 auto' }} >
                {HTMLChapter.map((HTMLChapterItem) => {
                    return (
                        <Link to={HTMLChapterItem.url} className='col-md-3 mt-3 link-style'>
                            <Card style={{ width: '95%', margin: '0 auto', cursor: 'pointer' }}>
                                <Card.Img variant="top" src="holder.js/100px180" style={{ textAlign: 'center' }} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>{HTMLChapterItem.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </>
    );
}

export default HTMLTop;