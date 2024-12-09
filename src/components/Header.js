import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import icon from '../images/top_logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';


function Header({ onDataSend }) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ saveQuery, setSaveQuery ] = useState('');
    const navigate = useNavigate();
    
    // 初回レンダリング時にクエリパラメータを初期化する
    useEffect (() => {
        setSaveQuery('');
        setSearchParams('');
    }, []);

    // 入力クエリを読み取り、URLを遷移する
    function handleSaveInputQuery (e){
        const inputQuery = e.target.value;
        setSaveQuery(inputQuery);
        navigate('/search');
    }

    // 入力されたクエリをクエリパラメータに追加する
    function handleAddQueryParam(){
        setSearchParams({query: saveQuery});
        onDataSend(saveQuery);
        setSaveQuery('');
    }

    // エンターキーがクリックされたタイミングで処理を走らせる
    function clickEnter (e){
        if (e.key === 'Enter'){
            console.log('Click Enter Key');
            e.preventDefault();
            handleAddQueryParam();
        }
    }

    return (
        <Navbar bg="white" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/texts">
                    <img src="/images/top_logo.png" alt="images" style={{ width: '50px' }} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/texts">Text</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end" >
                    <Form.Control onKeyDown={clickEnter} type="text" placeholder="Search" className='me-3' value={saveQuery} onChange={handleSaveInputQuery} style={{ width: '20%' }} />
                    <Button variant="secondary" onClick={handleAddQueryParam}>Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;