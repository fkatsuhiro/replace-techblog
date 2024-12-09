import React from 'react';
import './../../../Article.css';

function Article_3() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", paddingTop: "2rem" }}></h5>
                            <h3 className="title">開発でよく使うGitコマンド</h3>
                            <p>
                                開発(チーム開発など全般)で主に使用するコマンドをまとめたいと思います。
                                前提として、Githubとの各種連携は住んでいることを前提にお話しさせていただきます。
                            </p>
                            <h4 className="sub-title">リポジトリを作成した初回に連携させるためのコマンド</h4>
                            <p>
                                例えば、sampleという名前のリポジトリを作成した場合、以下のようなコマンドを打ち込むことで、初期のリポジトリを紐づけることができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    echo "# sample" &gt;&gt; README.md
                                    <br />
                                    git init
                                </code>
                            </pre>
                            <p>
                                1行目のコマンドは、README.mdファイル内に、# sampleという文字列を記載して追加するというものです。
                                2行目のコマンドは、新しいGitリポジトリを初期化します。実行すると、現在のディレクトリに
                                .git フォルダが作成され、Gitがこのディレクトリをリポジトリとして管理できるようになります。
                            </p>
                            <pre className="code-block">
                                <code>
                                    git add README.md
                                    <br />
                                    git commit -m "first commit"
                                    <br />
                                    git branch -M main
                                </code>
                            </pre>
                            <p>
                                git addコマンドは、指定したファイルをステージングエリア（インデックス）に追加するために使用します。
                                ステージングエリアは、次のコミットに含めたいファイルのリストを保持する場所です。
                                git commit コマンドは、ステージングエリアにあるファイルのスナップショットを取得し、それをリポジトリにコミットとして保存します。
                                コミットはGitにおける変更の一つの記録です。
                            </p>
                            <pre className="code-block">
                                <code>
                                    git remote add origin https://github.com/[username]/sample.git
                                    <br />
                                    git push -u origin main
                                </code>
                            </pre>
                            <p>
                                git remote add origin コマンドは、現在のディレクトリを指定したgithub上のリポジトリと紐づける役割をします。
                            </p>
                            <p>以上が、リポジトリを初回作成した際の基本的なコマンドになります。</p>
                            <h4 className="sub-title">ファイル変更をプッシュするためのコマンド</h4>
                            <pre className="code-block">
                                <code>
                                    git add .<br />
                                    git commit -m "commit message"
                                    <br />
                                    git push origin main
                                </code>
                            </pre>
                            <p>git add .コマンドは、編集したファイルすべてをadd します。</p>
                            <h4 className="sub-title">ブランチを切るためのコマンド</h4>
                            <pre className="code-block">
                                <code>
                                    git branch
                                    <br />
                                    git checkout -b branch-name
                                    <br />
                                    git checkout branch-name
                                </code>
                            </pre>
                            <p>
                                git branchコマンドで、現在のリモートブランチとほかになんのブランチが切ってあるかを確認することができます。
                            </p>
                            <p>これらのコマンドは開発の際に頻繁に使用するので、しっかり理解して使えるようになりましょう！</p>
                            <p>今回の内容はここまでです。少しはお役に立てる内容がありましたでしょうか？次回以降もまた有益な内容をどんどん配信していきたいと思いますので、楽しみにしていてくださいね！</p>
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

export default Article_3;