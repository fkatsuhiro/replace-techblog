import React from 'react';

function SQLChapter5() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter5</h5>
                            <h3 className="title">四則演算と関数を用いた数値の取得に関して学習しよう！！</h3>
                            <p>今回の内容は簡単にデータを四則演算を用いて整理するための方法に関して説明します。</p>

                            <h4 className="sub-title">足し算・引き算・掛け算・割り算</h4>
                            <p>これらは大前提として、数値が格納されているカラムに対してのみ実施することができます。数値が格納されているカラムに四則演算を適応して処理結果でクエリを取得することができます。</p>
                            <p>
                                足し算は+,引き算は-,掛け算は*,割り算は/で計算することができます。計算は以下のように行い、指定したデータの計算結果を取得することができます。この時、計算式がカラム名になってしまうため、基本的にASを用いてカラム名を作成するのがいいと思います。
                            </p>
                            <pre className="code-block">
                                <code>{`SELECT DATA1*1.10 AS DATA1, DATA2/1.10 AS DATA2, DATA3 + DATA4 AS DATAPLUS, DATA3 - DATA4 AS DATAMINUS
FROM テーブル名;`}</code>
                            </pre>

                            <h4 className="sub-title">関数を用いた計算値の取得に関して</h4>
                            <p>関数を用いることで、簡単に計算処理を行いそのデータを取得することができます。</p>

                            <h4 className="sub-title">SUM関数</h4>
                            <p>
                                この関数は合計値を算出するための処理を行います。数値の格納されているカラムに対してSUMを用いることで、その指定したカラムの合計値を算出することができます。今までの内容と違うのは、合計値を算出するので、レコードは1行になります。
                            </p>
                            <pre className="code-block">
                                <code>{`SELECT SUM(カラム名)
FROM テーブル名;`}</code>
                            </pre>

                            <h4 className="sub-title">AVG関数</h4>
                            <p>この関数は指定したカラムデータの平均値を算出することができます。</p>
                            <pre className="code-block">
                                <code>{`SELECT AVG(カラム名)
FROM テーブル名;`}</code>
                            </pre>

                            <h4 className="sub-title">COUNT関数</h4>
                            <p>
                                COUNT(カラム名)で指定すると、カラム名のデータがどれだけ存在するかを取得することができます。また、COUNT(*)を用いることで、レコードの個数を調べることができます。
                            </p>
                            <pre className="code-block">
                                <code>{`SELECT COUNT(カラム名)
FROM テーブル名;`}</code>
                            </pre>

                            <h4 className="sub-title">MAX関数・MIN関数</h4>
                            <p>この関数では最大値、最小値を算出することができます。</p>

                            <pre className="code-block">
                                <code>{`SELECT MAX(カラム名)
FROM テーブル名;`}</code>
                            </pre>
                            <pre className="code-block">
                                <code>{`SELECT MIN(カラム名)
FROM テーブル名;`}</code>
                            </pre>

                            <p>今回の内容は短くなってしまいましたが、ここまでです。次回はテーブルの結合に関して説明します。</p>
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

export default SQLChapter5;