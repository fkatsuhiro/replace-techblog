import React from 'react';
import './../../../Article.css';

function Article_4() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{ paddingTop: '100px' }}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: 'bold', paddingTop: '2rem' }}></h5>
                            <h3 className="title">gh-pagesを用いて作成したWebページをGithubPagesで公開する方法</h3>
                            <p>今回はReactで作成したWebページを無料のサービスであるGitHubPagesで公開するための方法を記載していきたいと思います。前提として、ReactでWebサービスが作成されていることが前提です。</p>

                            <h4 className="sub-title">初回デプロイの手順</h4>
                            <h6 className="sub-title">プロジェクトの準備</h6>
                            <p>まず、Reactプロジェクトが正しく動作していることを確認します。</p>
                            <pre className="code-block">
                                <code>npm start</code>
                            </pre>
                            <p>これでローカルでアプリケーションが正しく動作していることを確認します。</p>

                            <h6 className="sub-title">homepage の設定</h6>
                            <p>プロジェクトの <code>package.json</code> に以下を追加します。 <code>https://ユーザー名.github.io/リポジトリ名/</code> の形式で、GitHub Pagesで公開されるURLを指定します。</p>
                            <pre className="code-block">
                                <code>
                                    {`{
  "homepage": "https://ユーザー名.github.io/リポジトリ名"
}`}
                                </code>
                            </pre>

                            <h6 className="sub-title">gh-pages パッケージのインストール</h6>
                            <p>GitHub Pagesにデプロイするための <code>gh-pages</code> パッケージをインストールします。</p>
                            <pre className="code-block">
                                <code>npm install gh-pages --save-dev</code>
                            </pre>

                            <h6 className="sub-title">package.json の修正</h6>
                            <p>package.json に以下のデプロイスクリプトを追加します。</p>
                            <pre className="code-block">
                                <code>
                                    {`{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}`}
                                </code>
                            </pre>

                            <h6 className="sub-title">GitHub リポジトリの作成</h6>
                            <p>GitHubに新しいリポジトリを作成します。リポジトリの名前は <code>package.json</code> で設定したhomepageのURLと一致させてください。</p>

                            <h6 className="sub-title">初回デプロイ</h6>
                            <p>以下のコマンドを実行して、プロジェクトをGitHub Pagesにデプロイします。</p>
                            <pre className="code-block">
                                <code>npm run deploy</code>
                            </pre>
                            <p>これにより、build フォルダがビルドされ、GitHub Pages用のブランチ（通常は gh-pages）にプッシュされます。</p>

                            <h4 className="sub-title">ソースコード修正後のデプロイ</h4>
                            <p>ソースコードに修正を加えた後、再度GitHub Pagesにデプロイするには、以下の手順を実行します。</p>

                            <h6 className="sub-title">変更をコミット</h6>
                            <p>まず、ローカルでの変更をGitにコミットします。</p>
                            <pre className="code-block">
                                <code>
                                    git add -A<br />
                                    git commit -m "Update message"
                                </code>
                            </pre>

                            <h6 className="sub-title">再デプロイ</h6>
                            <p>次に、以下のコマンドを実行して再デプロイします。</p>
                            <pre className="code-block">
                                <code>npm run deploy</code>
                            </pre>
                            <p>このコマンドにより、新しいビルドが行われ、GitHub Pagesにプッシュされます。</p>

                            <h4 className="sub-title">補足情報</h4>
                            <ul>
                                <li>GitHub Pagesのデフォルトのブランチは <code>gh-pages</code> です。このブランチを使用してサイトが公開されます。</li>
                                <li>公開されたサイトは通常 <code>https://ユーザー名.github.io/リポジトリ名/</code> のURLでアクセス可能です。</li>
                            </ul>
                            <p>これで、ReactプロジェクトのGitHub Pagesへの公開と、ソースコード修正後の再デプロイが完了します。</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* 広告埋め込み用スペース */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article_4;
