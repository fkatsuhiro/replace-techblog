import React from 'react';

function SQLChapter2() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter2</h5>
                            <h3 className="title">条件を付けて取得するデータを指定しよう！！</h3>
                            <p>
                                特定の条件を持ったデータを取得する場合はWHEREを用います。WHEREは条件を付与することができ、特定のカラムを取得することができます。
                            </p>
                            <p>
                                数値はそのままの記入でいいが、時刻(2024-04-22 00:00:00)は、シングルクォーテーションもしくはダブルクォーテーションで囲む必要があります。
                            </p>
                            <h4 className="sub-title">= を用いて特定のデータを取得しよう！！</h4>
                            <p></p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT *
FROM テーブル名
WHERE karam = "ka2coder";`}
                                </code>
                            </pre>
                            <p>上記コードを用いることで、カラム名がkaramのka2coderというデータを取得することができます。</p>
                            <h4 className="sub-title">不等号を用いて特定のデータを取得しよう！！</h4>
                            <p>
                                例えば、作成日(created_at)が2022年7月1日以降の記事に関してのデータが複数あるとします。このデータを取得する場合、以下のようにコードを実装します。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT *
FROM テーブル名
WHERE cteated_at >= "2022-07-01 00:00:00";`}
                                </code>
                            </pre>
                            <h4 className="sub-title">ある文字が含まれるデータを取得する場合</h4>
                            <p>
                                例えば、いちご、冷凍いちご、いちごミルクなど、文字列にいちごを含んだデータを指定して出力しようとします。この場合、LIKE演算子を用いることで特定の文字列を含むデータを取得することができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT *
FROM テーブル名
WHERE name LIKE '%いちご%';`}
                                </code>
                            </pre>
                            <p>
                                こうすることで、いちごみるくや冷凍いちごなどのいちごの前後に文字列が含まれるようなデータも取得することができます。%はワイルドカードとも言います。イメージとしては、%の位置に任意の文字列が入るという感じですね。いちごの前に文字列が含まれていい場合は、いちごの前に%を用いて、いちごの後ろに文字列が含まれていい場合はいちごの後ろに%を用います。
                            </p>
                            <p>
                                ここで、冷凍いちごやいちごなどのいちごの前に文字列が存在する場合は取得して、いちごみるくのようないちごの後方に文字列がある場合は除きたいとします。この場合は以下のようにコードを書くことで処理することができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT *
FROM テーブル名
WHERE name LIKE '%いちご';`}
                                </code>
                            </pre>
                            <p>このように実装できます。逆の場合は、%の位置を逆にすることで実装することができます。</p>
                            <h4 className="sub-title">否定をつけてデータを抽出しよう！</h4>
                            <p>
                                条件を否定するときは、NOT演算子を用いることで条件に沿ったデータを取得することができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT *
FROM テーブル名
WHERE NOT 条件;`}
                                </code>
                            </pre>
                            <p>今回の内容はここまでです。次回は、演算子に関しての内容を説明します！</p>
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

export default SQLChapter2;