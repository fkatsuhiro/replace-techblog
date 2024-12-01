import React from 'react';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import '../../App.css';

function TextsTop() {
    const TextLanguage = [
        { id: 1, title: 'HTML', imgUrl: '', url: '/html' },
        { id: 2, title: 'CSS', imgUrl: '', url: '/css' },
        { id: 3, title: 'JavaScript', imgUrl: '', url: '/javascript' },
        { id: 4, title: 'SQL', imgUrl: '', url: '/sql' }
    ];

    return (
        <>
            <p style={{ paddingTop: '100px', paddingBottom: '50px', width: '90%', margin: 'auto', fontSize: '1.4rem', fontWeight: 'bold' }}>HTML/CSS JavaScript で基本的なWeb制作の技術に関して、SQLでデータベースの扱い方に関して学習しましょう！！</p>
            <div className='row' style={{ width: '85%', margin: '0 auto' }} >
                {TextLanguage.map((TextLanguageItem) => {
                    return (
                        <Link to={TextLanguageItem.url} className='col-md-3 mt-3 link-style' key={TextLanguageItem.id}>
                            <Card style={{ width: '95%', margin: '0 auto', cursor: 'pointer' }}>
                                <Card.Img variant="top" src="" style={{ textAlign: 'center' }} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>{TextLanguageItem.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </>
    );
}

export default TextsTop;