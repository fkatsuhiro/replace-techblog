import React from 'react';
import './../../../../Article.css';

function CSSChapter2() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter2</h5>
                            <h3 className="title">基本的なCSSのスタイルに関して</h3>
                            <p>
                                この章から基本的なCSSのスタイルに関して説明していきたいと思います。
                                主に高頻度で使用するスタイルを紹介していくので、作りたいものに応じて必要があれば適宜より詳しい教材などで調べてみてください。
                            </p>
                            <h4 className="sub-title">フォントに関するスタイル</h4>
                            <ul>
                                <li>font-color: 字の色を設定します</li>
                                <li>font-weight: 字の太さを指定します。一般的な太字の場合はboldで十分だと思います。</li>
                                <li>
                                    font-style: 字体を指定します。字体は既存のフォントや使いたいフォントを読み込んで使うことができます。
                                </li>
                                <li>
                                    font-size: フォントの大きさを指定します。emやrem,pxなどの単位で指定することができます。
                                    基本的には既存のhタグで対応したいところですが、カスタマイズするのも全然いいかなと思います。
                                </li>
                            </ul>
                            <h4 className="sub-title">余白に関してのスタイル</h4>
                            <p>余白は基本的にmarginを用います。例えば以下のようにmarginのスタイルを割り当てた場合</p>
                            <pre className="code-block">
                                <code>
                                    {"<p style=\"margin: 10px 2px 15px 7px\">これはサンプルです</p>"}
                                </code>
                            </pre>
                            <p>
                                この場合、「これはサンプルです」の文章の上に10px,右に2px,下に15px,左に7pxの余白を作ることができます。
                                余白の大きさは,px,rem,em単位で指定することができます。指定の方法は、
                            </p>
                            <pre className="code-block">
                                <code>{"<p style=\"margin: 10px\">これはサンプルです</p>"}</code>
                            </pre>
                            <p>
                                このように指定した場合、全方向に10pxの余白を作ることができます。
                                また、
                            </p>
                            <pre className="code-block">
                                <code>{"<p style=\"margin: 10px 2px\">これはサンプルです</p>"}</code>
                            </pre>
                            <p>
                                このように指定した場合上下に10pxずつ、左右に2pxずつの余白を作ることができます。
                            </p>
                            <p>
                                このように、1つの間隔指定の場合、上下左右に対しての指定をすることができ、2つの間隔の指定の場合、1つ目が上下、2つ目の指定が左右の指定を行うことができます。
                                各指定の間は半角スペースで指定することができます。4つの指定で余白を指定する場合、上 右 下 左の順で指定されます。
                            </p>
                            <p>この方法とは別に、上下左右を特定して余白を指定することができます。</p>
                            <ul>
                                <li>margin-right</li>
                                <li>margin-left</li>
                                <li>margin-top</li>
                                <li>margin-bottom</li>
                            </ul>
                            <p>このようにしてして直接指定することもできます。</p>
                            <h4 className="sub-title">paddingを用いて別のタグとの間隔を調整</h4>
                            <p>今度はpaddingというスタイルを用いて間隔を調整するための方法を説明します。</p>
                            <pre className="code-block">
                                <code>{"<p style=\"padding: 10px 2px 15px 7px\">これはサンプルです</p>"}</code>
                            </pre>
                            <p>
                                この場合、「これはサンプルです」の文章の上に10px,右に2px,下に15px,左に7pxの間隔を作ることができます。
                            </p>
                            <p>
                                このpaddingもmarginと同様に上下左右を限定して指定することができます。
                            </p>
                            <ul>
                                <li>padding-top</li>
                                <li>padding-bottom</li>
                                <li>padding-left</li>
                                <li>padding-right</li>
                            </ul>
                            <p>このようにして直接指定してスタイルを充てることができます。</p>
                            <h4 className="sub-title">paddingとmarginの違い</h4>
                            <p>
                                一見、paddingとmarginは同じ役割を果たすように見えますが、実は役割が違います。
                                例えば、Hello World!の文字の背景がgrayのもので、marginとpaddingが記載されている物を書きます。
                            </p>
                            <pre className="code-block">
                                <code>{"<p style=\"background-color: gray; padding:20px\">Hello World!</p>"}</code>
                            </pre>
                            <p>この場合と、</p>
                            <pre className="code-block">
                                <code>{"<p style=\"background-color: gray; margin:20px\">Hello World!</p>"}</code>
                            </pre>
                            <p>
                                この画像は上がpadding,下がmarginので反映させたものです。
                                イメージとしては、paddingはタグの中に間隔を作るのに対して、marginはタグの外側に間隔を作るというイメージが適切かと思います。
                            </p>
                            <p>今回の内容はここまでです。次回はカラーやタグの上下関係に関して説明します。</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* 広告埋め込みようスペース */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CSSChapter2;