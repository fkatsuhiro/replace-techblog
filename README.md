# 技術ブログのリプレイスプロジェクト

今回は以前作成した技術ブログの技術スタックをリプレイスしました。(Vue.js → React.js)

ページURL : https://fkatsuhiro.github.io/webtext/
リポジトリURL : https://github.com/fkatsuhiro/webtext

☑ 教材の移行
☐ 技術ブログの移行
☑ 検索機能の移行
☐ 検索処理高速化 (2024年11月追加実装した機能)
☐

もともと一覧画面などは、コンポーネント内でurlや画像を定義していましたが、jsonに格納したデータに直接アクセスすることで対応できると考え実装方法をそちらに変更しています。