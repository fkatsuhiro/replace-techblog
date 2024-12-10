import React from 'react';

function SQLChapter1() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter1</h5>
                            <h3 className="title">データベース(DB)とは？</h3>
                            <p>
                                主にWebアプリなどのデータを管理するものです。Webアプリの開発体系は主にフロントエンド/バックエンドに分かれて作成されることが多く、バックエンドを担当する人はデータベースからデータを取得するための実装を行ったりします。SQLとは、データベースから特定のデータを取得するためのコードを書くのに必要不可欠です。
                            </p>
                            <img alt="Database concept" />
                            <p>
                                データベースはテーブルというものを用いて管理します。テーブルの縦の列をカラム、横の列をレコードといいます。テーブルは必要なデータに応じで作成する必要があり、設計の際には使いやすさなども考えて作成しないといけないため、その際は別途学習が必要になります。下の図は、テーブルのイメージ図です。赤の縦ラインで協調されたものが、カラムになります。
                            </p>
                            <img
                                src={'/replace-techblog/images/DBTableImage.png'}
                                alt="Table image"
                                style={{ width: "80%", margin: "0 auto" }}
                            />
                            <p>
                                本記事では、簡単なクエリ処理のために必要な知識を入れることを目的とした初歩的な内容となっています。
                            </p>
                            <p>ではまず、テーブルからクエリを取得してみましょう。</p>
                            <p></p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT カラム名
FROM テーブル名;`}
                                </code>
                            </pre>
                            <p>イメージとしては、FROMで指定したテーブルの中の、SELECTで指定したカラム(列)のデータを取得する感じです。</p>
                            <h4 className="sub-title">複数のカラムを取得する</h4>
                            <p>
                                複数のカラムを取得する際には、以下のようにSELECTのタイミングで複数のカラム名を指定します。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT カラム名1, カラム名2
FROM テーブル名;`}
                                </code>
                            </pre>
                            <h4 className="sub-title">すべてのカラムを選択する場合</h4>
                            <p>
                                すべてのカラムを選択する場合、(*)で指定することですべてのカラムを取得して表示することができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT *
FROM テーブル名;`}
                                </code>
                            </pre>
                            <h4 className="sub-title">取得後のカラムの表示名を変更する</h4>
                            <p>DB内のテーブルから取得して表示するときのカラム名を変更したいときはASを用います。</p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT カラム名_old AS カラム名_new
FROM テーブル名;`}
                                </code>
                            </pre>
                            <p>今回の内容はここまでです。次回は取得するデータを条件を付けて取得する内容になります。</p>
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

export default SQLChapter1;