import React from 'react';

function SQLChapter4() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter4</h5>
                            <h3 className="title">並び替えとグルーピングLIMITを用いて取得するデータを制限しよう！</h3>
                            <p>本章では、データの並び替えに関して学習します。</p>

                            <h4 className="sub-title">並び替え</h4>
                            <p>並び替えの時はORDER BYを用います。前提として並び替えを行う際は、数値があるものに対して並び替えを行います。</p>
                            <p>
                                基本的に並び変えるときは、数値や時刻を昇順、降順で並び替えることが多いかと思います。昇順の場合は、ASC降順の場合はDESCを用いて並び替えをします。
                            </p>
                            <p>例えばデータが作成された時刻で並び替えをする場合、以下のように実装します。</p>
                            <pre className="code-block">
                                <code>{`SELECT *
FROM テーブル名
ORDER BY 処理;`}</code>
                            </pre>

                            <p>
                                基本的に並び変えるときは、数値や時刻を昇順、降順で並び替えることが多いかと思います。昇順の場合は、ASC降順の場合はDESCを用いて並び替えをします。
                            </p>
                            <p>例えばデータが作成された時刻で並び替えをする場合、以下のように実装します。</p>
                            <pre className="code-block">
                                <code>{`SELECT *
FROM テーブル名
ORDER BY created_at ASC;`}</code>
                            </pre>

                            <p>降順の場合は以下のように記述することで並び替えることができます。</p>
                            <pre className="code-block">
                                <code>{`SELECT *
FROM テーブル名
ORDER BY created_at DESC;`}</code>
                            </pre>

                            <h4 className="sub-title">LIMITを用いて取得するデータの件数を制限する</h4>
                            <p>取得する件数を制限する際は、LIMITを用いて件数を制限します。LIMITはクエリの最後に処理を記述します。</p>
                            <pre className="code-block">
                                <code>{`SELECT *
FROM テーブル名
WHERE 条件処理
LIMIT 10;`}</code>
                            </pre>
                            <p>
                                このように実装することで、最大10件のデータを取得することができます。なぜ最大なのかというと、そもそものテーブル内に条件に該当するデータが10件に満たない場合は10件未満の件数を取得するので最大という言い回しになります。
                            </p>

                            <h4 className="sub-title">重複したデータを削除しよう！</h4>
                            <p>
                                アプリケーションを作成しているときに、テーブルの結合の関係で同じデータが複数作成されることがあります。その際に、重複したデータを一つにしたいとき、以下の方法を用います。DISTINCTを用いて特定のカラムを一意にすることが可能です。使い方としてはSELECTの後にカラム名を指定すると思いますが、そのカラム名の指定の際にDISTINCTを用います。
                            </p>
                            <pre className="code-block">
                                <code>{`SELECT DISTINCT(カラム名)
FROM テーブル名;`}</code>
                            </pre>
                            <p>
                                これで指定したカラム名の重複取得が行われず、一意に取得することができます。
                            </p>
                            <p>今回の内容はここまでです！次回はテーブルの結合に関しての内容になります。</p>
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

export default SQLChapter4;