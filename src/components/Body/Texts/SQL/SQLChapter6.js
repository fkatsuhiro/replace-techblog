import React from 'react';

function SQLChapter6() {
    return (
        <div className="bg-body-tertiary">
            <div className="page-width outside-article" style={{paddingTop: '100px'}}>
                <div className="row">
                    <div className="bg-white col-md-8 arround-article">
                        <div className="article">
                            <h5 style={{ fontWeight: "bold", padding: "2rem 0" }}>Chapter6</h5>
                            <h3 className="title">複数のテーブルからデータを結合しよう！！</h3>
                            <p>
                                今回は複数のテーブルを結合する操作に関して説明します。
                                例えば、usersテーブルがあり、購入者一覧のテーブルにbought_usersテーブルがあるとします。
                                この二つのテーブルは、usersテーブルのidと、bought_usersテーブルのusers_idで結びついているとします。
                                その時、二つのテーブルを結合するには、以下のようなJoinを用いる必要があります。
                            </p>
                            <pre className="code-block">
                                <code>
                                    SELECT * FROM users u JOIN bought_users bu ON u.id = bu.users_id;
                                </code>
                            </pre>
                            <p>
                                このコードを解説すると、usersテーブルからデータを取得します。
                                一旦ここではusersテーブルの名前をuとしておきます。そのテーブルに、bought_usersテーブルをbuと名付け、
                                u.id とbu.users_idが一致するレコードを紐づけます。
                            </p>
                            <p>この結合方法が最も一般的な結合の仕方になります。</p>

                            <h4 className="sub-title">LEFT JOIN(外部結合)</h4>
                            <p>次にLeft Joinという結合方法に関して説明します。</p>
                            <p>
                                この結合方法は、左のテーブルをすべて表示し、左のテーブルに合わないデータはNULLとして表示します。
                                この時のコードは以下のように記述することで結合することができます。
                            </p>
                            <pre className="code-block">
                                <code>
                                    SELECT * FROM テーブル1 LEFT JOIN テーブル2 ON テーブル1.id = テーブル2.user_id;
                                </code>
                            </pre>
                            <p>
                                例えば、とあるプログラミングサイトがあり、契約体系に無料契約、有料契約、プレミアム契約の状態があるとします。
                                この時、登録しているユーザーのデータをまとめたテーブルがあるとします。
                            </p>
                            <p>
                                サイト側の契約体系を表すテーブルをcontractsテーブル、契約ユーザーのテーブルをusersテーブルとします。
                            </p>
                            <h6 className="sub-title">contractsテーブル</h6>
                            <img style={{ width: "30%" }} src="/images/sql_image/sql_chapter_6_1.png" alt="Contracts Table" />
                            <h6 className="sub-title">usersテーブル</h6>
                            <img style={{ width: "90%" }} src="/images/sql_image/sql_chapter_6_2.png" alt="Users Table" />
                            <p className="sub-title">
                                この二つのテーブルをLEFT JOINで結合する際のコードは以下のようになります。
                            </p>
                            <pre className="code-block">
                                <code>
                                    SELECT * FROM contracts LEFT JOIN users ON contracts.id = users.status_id;
                                </code>
                            </pre>
                            <h6 className="sub-title">結合後のテーブル</h6>
                            <img style={{ width: "100%" }} src="/images/sql_image/sql_chapter_6_3.png" alt="Left Join Result" />
                            <p className="sub-title">
                                このSQLの処理では、テーブル1の内容はすべて表示し、テーブル2のデータで、テーブル1のidで存在しないものはNULLとして表示します。
                                この結合方法がLEFT JOINになります。
                            </p>

                            <h4 className="sub-title">INNER JOIN(内部結合)</h4>
                            <p>次にINNER JOINの結合方法に関して説明します。</p>
                            <p>
                                INNER JOINは内部結合と言われ、右の結合するテーブルのデータに対応するように、左のテーブルのレコードを複製します。
                                しかし、左のテーブルのレコードに対応するレコードが右のテーブルに存在しない場合、そのレコードは削除します。
                                これが、INNER JOIN の結合方法です。
                            </p>
                            <p>LEFT JOINと同じようなシチュエーションを考えます。</p>
                            <p className="sub-title">この時、contractsテーブルは以下の通りです。</p>
                            <img style={{ width: "30%" }} src="/images/sql_image/sql_chapter_6_1.png" alt="Contracts Table" />
                            <p className="sub-title">usersテーブルはこのような状態である場合を考えます。</p>
                            <img style={{ width: "90%" }} src="/images/sql_image/sql_chapter_6_4.png" alt="Users Table" />
                            <p className="sub-title">この時、先ほどのLEFT JOINの時と同様にINNER JOINで実装します。</p>
                            <pre className="code-block">
                                <code>
                                    SELECT * FROM contracts INNER JOIN users ON contracts.id = users.status_id;
                                </code>
                            </pre>
                            <p className="sub-title">この処理の結果得られるテーブルは以下の通りです。</p>
                            <img style={{ width: "100%" }} src="/images/sql_image/sql_chapter_6_4.png" alt="Inner Join Result" />
                            <p className="sub-title">以上がINNER JOINの主な特徴です。</p>
                            <p>
                                ほかにもJOINの仕方はたくさんありますが、基本的なJOIN, LEFT JOIN, INNER JOINの基本知識があれば特に難しいということはありません。
                            </p>
                            <p>これでSQLのセクションは終了です。多少でも皆さんのお役に立てていたら大変うれしい限りです。</p>
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

export default SQLChapter6;