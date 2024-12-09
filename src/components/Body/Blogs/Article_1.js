import React from 'react';
import './../../../Article.css';

function Article_1() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article">
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}></h5>
                            <h3 className="title">Bootstrapを利用しよう！</h3>
                            <h4 className="sub-title">Bootstrapとは</h4>
                            <p>
                                Bootstrapは、Twitter社(現X社)が作ったレスポンシブ対応に適したCSSを取りまとめたフレームワークです。特に、レスポンシブ対応や簡単に様々な機能(ボタン・フォーム・アラート)をクラスを割り当てるだけでデザインを豊かにしてくれます。
                            </p>
                            <p>
                                このBootstrapには独特のクラスの仕組みを持っていますが、このクラスを理解することでそれぞれの機能を一から実装する必要がなく、かなり使いやすくなります。ここの内容に関しては別途の記事で説明したいと思います。
                            </p>
                            <h4 className="sub-title">BootstrapのjQuery非対応化</h4>
                            <p>
                                Bootstrapはv4.5以降のバージョンからjQueryが非対応になりました。Web制作の領域では非常に人気の高いフレームワークであるjQueryですが、セキュリティ面の脆弱性の危惧から廃止になったようです。そのため、jQueryを用いてBootstrapを使用したい場合は、v4.5以前のBootstrapを使用するようにしましょう。
                            </p>
                            <h4 className="sub-title">Bootstrapの適用方法</h4>
                            <p>
                                それではBootstrapの適用方法に関して説明します。基本的にBootstrapはドキュメントが充実しているため、わからないことがあれば適宜そちらを参考にするのもいいかなと思います。主に、Bootstrapを適用する方法は3通り存在します。ここでは一つずつ説明していきたいと思います。
                            </p>
                            <h4 className="sub-title">リモート上のCSSを利用する方法</h4>
                            <p>
                                サイト制作用のフォルダを作成して、VScodeなどのコードエディタで開きます。その後、HTMLファイルを作成して開きます。そのファイルの中に以下のコードを書きこんでください。
                            </p>
                            <pre>
                                <code>
                                    &lt;!doctype html&gt;
                                    <br />
                                    &lt;html lang="en"&gt;
                                    ...
                                </code>
                            </pre>
                            <p>...</p>
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

export default Article_1;