import React from 'react';

function SQLChapter3() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter3</h5>
                            <h3 className="title">演算子を用いて処理をしよう！！</h3>
                            <p>
                                前章で条件に関しての内容を扱いましたが、条件を演算子を用いることでより詳細に取得するデータを指定することができます。さらに、本章では、条件と条件を組み合わせることで、より詳細にデータを取得することを身に着けます。
                            </p>
                            <h4 className="sub-title">AND演算子</h4>
                            <p>
                                AND演算子は「かつ」の内容を表します。例えば、条件①と条件②がANDで結ばれている場合、条件①と条件②の両方を満たす場合、条件の処理が走るというものになります。
                            </p>
                            <pre className="code-block">
                                <code>
                                    {`SELECT *
FROM テーブル名
WHERE 条件1 AND 条件2;`}
                                </code>
                            </pre>
                            <h4 className="sub-title">OR演算子</h4>
                            <p>
                                OR演算子は「または」の意味を表します。例えば、条件①と条件②がORで結ばれている場合、条件①もしくは条件②の少なくともどちらかを満たしているときに処理が走るというものになります。
                            </p>
                            <p>
                                このように、演算子を利用することでより詳細なデータの取得をすることができます。
                            </p>
                            <p>
                                今回の内容はここまでです。次回は並び替えとグルーピングに関しての内容を説明したいと思います。
                            </p>
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

export default SQLChapter3;