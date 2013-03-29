JS Test Environment
========

## JavaScriptのテスト環境 ##

__Node.js、ブラウザ両方で動くモジュールのテスト__ のための環境

- クライアントサイドのテストは「AMD形式」とそれ以外のテストの２通り
- テストするモジュール（サンプルでは /public/js/mod.js）は本番と同じディレクトリに
- テストライブラリに必要なものは /t ディレクトリに
- /t ディレクトリには、ユーザーからはリーチしない前提で


### ディレクトリ構造 ###
    .
    |-- public/
    |   `-- js/
    |       |-- jquery-1.9.1.min.js
    |       |-- mod.js
    |       `-- require.js
    |-- run-normal.sh
    |-- run-phantom.js
    |-- run-requirejs.sh
    |-- run.sh*
    `-- t/
        |-- normal.html
        |-- qunit/
        |   |-- helper.js
        |   |-- qunit-1.10.0.css
        |   |-- qunit-1.10.0.js
        |   `-- qunit-tap.js
        |-- requirejs.html
        `-- test.js


- テストコードは、 /t 以下の *.js
- テストを受けるモジュールコードは /public/js/*.js
- テストランナー用HTML は **/t/normal.html**
- AMD形式（RequireJSなど）でテストする場合は **/t/requirejs.html**


### PhantomJS でクライアントサイドで動くコードのテスト ###

```bash
 $ phantomjs run-phantom.js t/normal.html
 # prove が使えるなら
 $ prove -v --timer --trap run-normal.sh
```

- AMD形式でモジュールを読み込む場合は
    -- `t/normal.html` を `t/requirejs.html` に
	-- prove を使う場合は `prove run-requirejs.sh`


### Node.js で動くコードのテスト ###

```bash
 $ node t/test.js
 # prove が使えるなら
 $ prove --exe node --ext .js
```


### ライブラリのURL ###

- jquery.js [http://code.jquery.com/jquery-1.9.1.min.js](http://code.jquery.com/jquery-1.9.1.min.js)
- require.js [http://requirejs.org/docs/release/2.1.5/comments/require.js](http://requirejs.org/docs/release/2.1.5/comments/require.js)
- qunit.js [http://code.jquery.com/qunit/qunit-1.10.0.js](http://code.jquery.com/qunit/qunit-1.10.0.js)
- qunit.css [http://code.jquery.com/qunit/qunit-1.10.0.js](http://code.jquery.com/qunit/qunit-1.10.0.js)
- qunit-tap.js [https://raw.github.com/twada/qunit-tap/master/lib/qunit-tap.js](https://raw.github.com/twada/qunit-tap/master/lib/qunit-tap.js)
- run-phantom.js [https://raw.github.com/jquery/qunit/master/addons/phantomjs/runner.js](https://raw.github.com/jquery/qunit/master/addons/phantomjs/runner.js)

