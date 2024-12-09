import React from 'react';
import './../../../../Article.css';

function CSSChapter4() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter4</h5>
                            <h3 className="title">メディアクエリに関して</h3>
                            <p>
                                メディアクエリは、主に画面幅に応じてクラスを割り当てることができます。この手法を用いてレスポンシブ対応などを実装することができます。Chapter1でも話をさせていただきましたが、CSSはCascading Style Sheetsといい、スタイルを最後に与えたものが最も反映されます。今回説明するメディアクエリは以下のような仕組みになっています。
                            </p>
                            <p>ベースとなるcssのクラス</p>
                            <pre className="code-block">
                                <code>
                                    {`.style {
                    font-size: 1rem;
                    font-weight: bold;
                    font-color: black;
                }`}
                                </code>
                            </pre>
                            <p>このクラスをメディアクエリを用いて書いてみます。</p>
                            <pre className="code-block">
                                <code>
                                    {`.style {
                    font-size: 1rem;
                    font-weight: bold;
                    font-color: black;
                }
                
                @media screen and (max-width: 756px) {
                    .style {
                        font-size: 1rem;
                        font-weight: 500;
                        font-color: gray;
                    }
                }`}
                                </code>
                            </pre>
                            <p>
                                メディアクエリはこのように書くのですが、(書き方は後に詳しく説明します。) まずは、上の.styleのクラスを読み込みますが、画面幅が756pxよりも狭い場合はメディアクエリのくくりの中にある.styleを読み込みます。この時に先ほど読み込んでいた上の.styleを下の.styleで上書きします。これがCSSの特性を利用したメディアクエリという手法です。
                            </p>
                            <h4 className="sub-title">書き方</h4>
                            <pre className="code-block">
                                <code>
                                    {`@media screen and (max-width: ) {
                    /*メディアクエリ内のクラス*/
                }
                
                @media screen and (min-width: ) {
                    /*メディアクエリ内のクラス*/
                }`}
                                </code>
                            </pre>
                            <p>
                                メディアクエリはこのように書きます。max-widthで指定するときは、その指定した画面幅以下の画面幅の時にこの分岐の中を読み込みます。min-widthで指定するときはその画面幅以上の時にこの分岐を読み込みます。
                            </p>
                            <p>
                                メディアクエリは主に、デバイス間の画面幅の変更に対して閾値を引くことが多く、CSSのフレームワークであるBootstrapでは、以下の閾値を用いているので、実装する際には参考にしてみてください。
                            </p>
                            <ul>
                                <li>576px</li>
                                <li>768px</li>
                                <li>992px</li>
                                <li>1200px</li>
                            </ul>
                            <p>
                                この閾値が引かれています。主にスマホとためのレスポンスが576px以下でタブレットのためのレスポンスが992pxになるかなと思います。
                            </p>
                            <p>
                                閾値の引き方は人それぞれですが、目的がスマホ画面なのか、PC画面なのかの違いであれば、768px以上、以下で設定すればいいと思いますし、タブレットまで区別する場合は、上記の方法でいいかと思います。
                            </p>
                            <p>今回の内容はここまでです。</p>
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

export default CSSChapter4;