import React from 'react';
import './../../../../Article.css';

function HTMLChapter3() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article">
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter3</h5>
                            <h3 className="title">HTMLタグに関して</h3>
                            <h4 className="sub-title">divタグ</h4>
                            <p>要素をグループ化するためのタグ。タグの中では最も頻繁に使用されるタグ</p>
                            <h4 className="sub-title">pタグ</h4>
                            <p>
                                段落タグ。paragraphの頭文字をとってpタグと名前が付けられています。
                                pタグを使うことで文章をひとまとめにすることができます。文章を整理するために使われるタグです。
                            </p>
                            <h4 className="sub-title">brタグ</h4>
                            <p>
                                改行タグ。breakの頭文字を用いてbrタグと言われています。改行したいところにbrタグを使うことで文章を改行することができます。
                            </p>
                            <h4 className="sub-title">aタグ</h4>
                            <p>
                                Anchorタグの略称。主に、リンクを付与して、画面遷移のために使用されることが多いです。主に使用する属性はhrefです。簡単な使い方を以下で説明します。
                            </p>
                            <pre className="code-block">
                                <code>&lt;a href="./sample.html"&gt;ここをクリック&lt;/a&gt;</code>
                            </pre>
                            <p>
                                このように記述すると、ここをクリックの文章にsample.htmlのページへ遷移するための実装をすることができます。
                                次によく用いられる属性としてtarget属性を用いられます。特に、
                                <strong>target="_blank"</strong>がよく用いられます。これは、リンクをクリックしてページを遷移する際に、元のページは開いたまま、新しいページに遷移してリンク先のページを開くというものです。
                            </p>
                            <pre className="code-block">
                                <code>&lt;a href="./sample.html" target="_blank"&gt;ここをクリック&lt;/a&gt;</code>
                            </pre>
                            <h4 className="sub-title">ulタグ、liタグ</h4>
                            <p>
                                ulタグはunordered listの略で、順序がない箇条書きのリストを表示するためのものです。liタグは、list
                                itemの略で、ulタグの中でliタグを用いることで、順序がない箇条書きのリストを表示することができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    &lt;ul&gt;
                                    <br />
                                    &lt;li&gt;項目1&lt;/li&gt;
                                    <br />
                                    &lt;li&gt;項目2&lt;/li&gt;
                                    <br />
                                    &lt;li&gt;項目3&lt;/li&gt;
                                    <br />
                                    &lt;/ul&gt;
                                </code>
                            </pre>
                            <ul>
                                <li>項目1</li>
                                <li>項目2</li>
                                <li>項目3</li>
                            </ul>
                            <h4 className="sub-title">olタグ、liタグ</h4>
                            <p>olタグは、ordered listの略で、順序の決まったリストを表示することができます。</p>
                            <pre className="code-block">
                                <code>
                                    &lt;ol&gt;
                                    <br />
                                    &lt;li&gt;項目1&lt;/li&gt;
                                    <br />
                                    &lt;li&gt;項目2&lt;/li&gt;
                                    <br />
                                    &lt;li&gt;項目3&lt;/li&gt;
                                    <br />
                                    &lt;/ol&gt;
                                </code>
                            </pre>
                            <ol>
                                <li>項目1</li>
                                <li>項目2</li>
                                <li>項目3</li>
                            </ol>
                            <h4 className="sub-title">imgタグ</h4>
                            <p>
                                imageの略で画像を埋め込むためのタグです。src属性で画像のパスを指定することで指定した画像を埋め込むことができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    &lt;img src="./sample.png" width="300" height="300" alt="サンプル画像"&gt;
                                </code>
                            </pre>
                            <p>
                                基本的には、src属性以外に、width属性やheight属性を用いて埋め込む画像のサイズを指定します。また、alt属性は、画像が読み込めなかった場合にテキストで表示するための属性です。
                            </p>
                            <p>以上でHTMLの内容に関しての内容は終了です。HTMLの概要に関しては理解できましたでしょうか？</p>
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

export default HTMLChapter3;