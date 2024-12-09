import React from 'react';
import './../../../../Article.css';

function CSSChapter3() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter3</h5>
                            <h3 className="title">CSSの基本的な内容に関してⅡ</h3>
                            <h4 className="sub-title">カラー</h4>
                            <p>
                                カラーは主に、文字色のためのカラーと背景色のカラーがあります。スタイル名としては
                            </p>
                            <ul>
                                <li>color</li>
                                <li>background-color</li>
                            </ul>
                            <p>
                                カラーの指定の方法はカラーコードで指定する方法と、代表的なカラー名を打ち込む方法があります。
                            </p>
                            <p>
                                カラーコードに関しては#(ハッシュタグ)から始まる6つの数字やアルファベットの組み合わせによって表現されています。また、ほかのWebページのカラーを取得したい場合、カラーピッカーなどを用いて3原色からカラーコードを検索することができます。
                            </p>
                            <h4 className="sub-title">z-indexに関して</h4>
                            <p>
                                画面の表示の際に、最前面、最背面などを指定することができます。このスタイルはz-indexで指定することができます。指定の仕方は、z-index: 1; で指定することができます。これは数値で指定することができます。z-indexの値が大きいほど最前面に近く、z-indexの値が小さいほど、最背面に近いです。これは、ヘッダーを固定するときなどに有効に使うことができます。
                            </p>
                            <p>
                                今回の内容は短いですが、ここまでにしたいと思います。次回は、メディアクエリの使用法に関して説明したいと思います。
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* 広告埋め込みようスペース現在はまだ埋め込まない */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CSSChapter3;