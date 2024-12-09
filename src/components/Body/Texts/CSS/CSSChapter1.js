import React from 'react';
import './../../../../Article.css';

function CSSChapter1() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter1</h5>
                            <h3 className="title">CSSとは？</h3>
                            <p>
                                正式には、Cascading Style Sheetsと言い、テキストベースのHTMLに対してスタイルを割り当てることができます。
                                基本的には、HTML/CSSがセットで、最低限の1つの静的なWebページを完成させることができます。(JavaScriptも用いて作成されるのが一般的)
                            </p>
                            <h4 className="sub-title">CSSの適用方法</h4>
                            <p>
                                CSSの適用方法は主に2種類あります。1つ目は、CSSファイルを作成し、そこに記載したクラスをHTML側で利用することができます。
                                2つ目の方法はHTMLタグの中に直接書き込む方法です。
                            </p>
                            <h5 className="sub-title">
                                CSSファイルを作成し、そのファイルに記載したクラスをHTML側で利用する方法
                            </h5>
                            <p>
                                1つ目の方法はcssファイルを作成し、それをHTML側で読み込んで反映させる方法です。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CSS demo</title>
    <!--CSSの読み込み-->
    <link href="css/main.css" rel="stylesheet">
    <!---->
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="js/main.js"></script>
  </body>
</html>`}
                                </code>
                            </pre>
                            <p>上記のコードのように、以下の部分でCSSファイルを読み込みます。</p>
                            <pre className="code-block">
                                <code>{`<link href="css/main.css" rel="stylesheet">`}</code>
                            </pre>
                            <p>
                                このように記載することで、main.cssに記述したcssのクラスをこのHTMLファイル内で反映させることができます。
                            </p>
                            <p>例えば、main.cssのファイル内で、以下のクラスが指定されているとします。</p>
                            <pre className="code-block">
                                <code>{`.sample {
  text-align: center;
  font-weight: bold;
}`}</code>
                            </pre>
                            <p>
                                このファイルをHTML側で読み込んだ後に、HTML のタグ内で指定します。
                            </p>
                            <pre className="code-block">
                                <code>{`<div class="sample">Hello World!</div>`}</code>
                            </pre>
                            <p>このようにすることで、Hello Worldの文字が装飾されます。</p>
                            <h4 className="sub-title">HTMLタグ内にstyleを直接書き込む</h4>
                            <p>
                                この方法はHTMLタグ内に直接スタイルを書き込むことで、そのタグにだけ特定のスタイルを付与することができます。
                                例えば、以下のように、文字に色を付けてみます。
                            </p>
                            <pre className="code-block">
                                <code>{`<h2 style="color: gray"> Hello World! </h2>`}</code>
                            </pre>
                            <p>
                                このように指定すると、このh2タグのみ、文字色を付与することができます。
                            </p>
                            <h4 className="sub-title">各手法のメリットデメリット</h4>
                            <h5 className="sub-title">
                                CSSファイルを作成し、そのファイルに記載したクラスをHTML側で利用する方法
                            </h5>
                            <p>この方法のメリットは以下の通りです。</p>
                            <ul>
                                <li>タグ間、ページ間で同じCSSのファイルのスタイルを繰り返し利用できる</li>
                                <li>メディアクエリなどのレスポンシブスタイルなどを細かく作成することができる</li>
                                <li>複数のページのCSSファイルを1つのHTMLファイルに適用することができる</li>
                                <li>クラスに対してホバーしたときの挙動、アニメーションを付与することができる</li>
                            </ul>
                            <p>デメリットは以下の通り</p>
                            <ul>
                                <li>
                                    ほかのCSSファイルも適用している場合、そのCSSに引っ張られてうまくクラスが追加できないなどの可能性がある
                                </li>
                            </ul>
                            <p>
                                この手法では、全HTMLページ共通のスタイルなど、ほかのページのスタイルとかぶりが無いようにうまくCSSファイルを作成することで有効的にデザインを適用することができます。この場合、設計の段階でしっかり構成を考えていく必要があるかなと思います。この方法で難しいなという場合は、各HTMLページごとにCSSファイルを作成するのがおすすめです！
                            </p>
                            <h5 className="sub-title">HTMLタグ内にstyleを直接書き込む</h5>
                            <p>この方法のメリットは以下の通りです。</p>
                            <ul>
                                <li>ほかのCSSファイルに影響を受けない</li>
                                <li>
                                    ほかのCSSファイルのクラスの部分的に不要なスタイルを打ち消すことができる
                                </li>
                            </ul>
                            <p>デメリットは以下の通りです。</p>
                            <ul>
                                <li>冗長なコードになってしまう</li>
                                <li>メディアクエリやアニメーションなどのCSS独特の機能を付与することが難しい</li>
                            </ul>
                            <p>
                                この手法は例えば、BootstrapなどのCSSクラスを取りまとめているフレームワークをHTMLページに適用する際に、そのクラスの一部のスタイルを打ち消したいなどの時に有効的に使用することができます。
                                一般的にフレームワークのスタイルを書き換えるのはタブーとされているため、この手法が好まれます。
                            </p>
                            <p>
                                また、CSSはCascading Style Sheetsというだけあって、一番最後のスタイルを読み込みます。
                                ですので、この手法で記述したスタイルが最も最後の読み込みのスタイルであるため一番優先的に読み込まれます。
                            </p>
                            <p>
                                今回の内容はここまでです。次回は基本的なCSSのスタイルに関しての説明を行います。
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">{/* 広告埋め込みスペース */}</div>
                </div>
            </div>
        </div>
    )
}

export default CSSChapter1;