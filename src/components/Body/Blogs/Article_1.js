import React from 'react';
import './../../../Article.css';

function Article_1() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", paddingTop: "2rem" }}></h5>
                            <h3 className="title">Bootstrapを利用しよう！</h3>
                            <h4 className="sub-title">Bootstrapとは</h4>
                            <p>
                                Bootstrapは、Twitter社(現X社)が作ったレスポンシブ対応に適したCSSを取りまとめたフレームワークです。
                                特に、レスポンシブ対応や簡単に様々な機能(ボタン・フォーム・アラート)をクラスを割り当てるだけでデザインを豊かにしてくれます。
                            </p>
                            <p>
                                このBootstrapには独特のクラスの仕組みを持っていますが、このクラスを理解することでそれぞれの機能を一から実装する必要がなく、かなり使いやすくなります。
                                ここの内容に関しては別途の記事で説明したいと思います。
                            </p>
                            <h4 className="sub-title">BootstrapのjQuery非対応化</h4>
                            <p>
                                Bootstrapはv4.5以降のバージョンからjQueryが非対応になりました。
                                Web制作の領域では非常に人気の高いフレームワークであるjQueryですが、セキュリティ面の脆弱性の危惧から廃止になったようです。
                                そのため、jQueryを用いてBootstrapを使用したい場合は、v4.5以前のBootstrapを使用するようにしましょう。
                            </p>
                            <h4 className="sub-title">Bootstrapの適用方法</h4>
                            <p>
                                それではBootstrapの適用方法に関して説明します。
                                基本的にBootstrapはドキュメントが充実しているため、わからないことがあれば適宜そちらを参考にするのもいいかなと思います。
                                主に、Bootstrapを適用する方法は3通り存在します。ここでは一つずつ説明していきたいと思います。
                            </p>
                            <h4 className="sub-title">リモート上のCSSを利用する方法</h4>
                            <p>
                                サイト制作用のフォルダを作成して、VScodeなどのコードエディタで開きます。その後、HTMLファイルを作成して開きます。
                                そのファイルの中に以下のコードを書きこんでください。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>
</html>`}
                                </code>
                            </pre>
                            <p>
                                これはBootstrapの公式ドキュメント内に記載されている導入方法です。
                                Web上に存在するCSS
                                (<a href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" target="_blank" rel="noopener noreferrer">
                                    https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css
                                </a>
                                )からスタイルを引っ張って適用するという印象です。しかし、このままでは環境によってはCSSの適用ができない可能性がありますので、以下のように書き換えてください。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
                                </code>
                            </pre>
                            <p>
                                このように設定することでHTMLファイルにBootstrapを適用することができます。
                                このファイルではBootstrap内のクラスであれば自由に使用することができます。
                            </p>
                            <h4 className="sub-title">ローカル環境にBootstrapのファイルを作成する方法</h4>
                            <p>
                                また、別の方法でもBootstrapを適用させることができます。 ローカル環境でcss用のファイルを作成します。その後、このリンクに遷移します。{" "}
                                <a
                                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css
                                </a>
                            </p>
                            <p>
                                このリンクには、BootstrapのCSSが記載されているのでこれをすべてコピーして、
                                <code>css/bootstrap.css</code>
                                のようなファイルを作成しておいてそちらに貼り付けます。その後、Bootstrapを利用したいHTMLファイル内に以下のように書き込みます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="css/bootstrap.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="js/bootstrap.js"></script>
  </body>
</html>
              `}
                                </code>
                            </pre>
                            <p>これでHTMLにBootstrapを適用することができます。</p>
                            <h4 className="sub-title">コマンドを利用してBootstrapを適用する方法</h4>
                            <p>次に、コマンドを利用してBootstrapを適用する方法に関して説明します。</p>
                            <p>
                                この方法は主に、VueやReactなどJavaScriptベースのフロントエンドフレームワークを使用する人がそのフレームワークにBootstrapを用いるときに使用することが多いかと思います。しかし、HTML/CSSを用いるときに使うことも問題なくできるのでその方法を説明します。
                            </p>
                            <p>
                                前提条件として、環境内にnpmのインストールが完了している状態にしてください。Windowsではコマンドプロンプト、Macではターミナルを開いて以下のコマンドを打ち込みます。
                            </p>
                            <pre className="code-block">
                                <code>mkdir sample</code>
                            </pre>
                            <p>このコマンドはsampleというディレクトリを作成します。</p>
                            <pre className="code-block">
                                <code>cd sample</code>
                            </pre>
                            <p>
                                その後、cdコマンドでsampleディレクトリに移動します。
                                <br />
                                このディレクトリの配下で以下のコマンドをたたきます。
                            </p>
                            <pre className="code-block">
                                <code>npm i bootstrap@5.3.0</code>
                            </pre>
                            <p>
                                このコマンドがうまく実行されれば、Bootstrapの各種ファイルが作成され、適用できるようになります。
                            </p>
                            <p>
                                今回はBootstrapの導入に関しての内容をお話させていただきました。少しは役に立ちましたでしょうか？御覧いただきありがとうございました！
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">{/* 広告埋め込み用スペース（現在は未使用） */}</div>
                </div>
            </div>
        </div>
    );
}

export default Article_1;