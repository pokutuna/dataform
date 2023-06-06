この変更は、ここの会話に由来します
https://github.com/dataform-co/dataform/pull/1490#discussion_r1208628703

//sqlx には sqlx ファイルの字句解析とフォーマッタ2つの機能があります
#1490 でフォーマッタの改善に取り組みましたが、循環参照に遭遇しました

```
//core -> //sqlx (using lexer)
//sqlx -> //core (using adapters)
```

@BenBirt に提案して頂いたように、 sqlx を 2 つの部分に分けます
これにより依存関係が整います

```
//sqlx:format -> //sqlx:sqlx
//sqlx:format -> //core:core
//core:core -> //sqlx:sqlx
```
