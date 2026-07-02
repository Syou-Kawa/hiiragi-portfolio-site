# ひいらぎ ポートフォリオ(Next.js + Laravel)セットアップ手順

構成: フロントエンド = Next.js 16 / バックエンド = Laravel 13 (API専用・SQLite)

```
hiiragi-app/
├── backend/   … Laravelに上書きコピーするファイル一式
└── frontend/  … Next.jsプロジェクト(このまま使えます)
```

## 0. 必要なツール(未インストールの場合)

- **Laravel Herd**(https://herd.laravel.com/)… PHP 8.4 + Composer + Laravelが一括で入ります(Mac向け・無料)
- **Node.js**(https://nodejs.org/)… LTS版

## 1. バックエンド(Laravel 13)

```bash
# 好きな作業フォルダで
composer create-project laravel/laravel hiiragi-api
cd hiiragi-api

# このzipの backend/ の中身を、プロジェクトに上書きコピー
cp -r /path/to/hiiragi-app/backend/* .

# 画像アップロード用のリンク作成
php artisan storage:link
```

`.env` に以下を追記・変更:

```env
APP_URL=http://localhost:8000

# 管理画面
ADMIN_PASSWORD=好きなパスワード
ADMIN_API_TOKEN=ランダムな長い文字列(例: openssl rand -hex 32 で生成)

# お問い合わせの届け先
MAIL_TO_ADDRESS=あなたのメールアドレス

# フロントエンドのURL(CORS用)
FRONTEND_URL=http://localhost:3000

# ローカル確認中はメールをログに書き出す(後述)
MAIL_MAILER=log
```

DB作成(SQLiteなのでファイルだけ)と起動:

```bash
php artisan migrate --seed   # テーブル作成+ダミー作品6件投入
php artisan serve            # → http://localhost:8000
```

## 2. フロントエンド(Next.js 16)

```bash
cd /path/to/hiiragi-app/frontend
cp .env.local.example .env.local   # APIのURL設定(ローカルはそのまま)
npm install
npm run dev                        # → http://localhost:3000
```

## 3. 動作確認

- http://localhost:3000 … サイト表示(作品はAPIから取得)
- http://localhost:3000/admin … `ADMIN_PASSWORD` でログイン → 画像をドラッグ&ドロップして投稿 → 保存すると即サイトに反映
- http://localhost:3000/contact … フォーム送信 → `MAIL_MAILER=log` の間は `hiiragi-api/storage/logs/laravel.log` にメール内容が書き出されます

## 4. 本当にメールを届かせる(Gmailの例)

1. Googleアカウントで2段階認証を有効化 → 「アプリパスワード」を発行
2. `.env` を変更:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=あなたのGmailアドレス
MAIL_PASSWORD=発行したアプリパスワード
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=あなたのGmailアドレス
MAIL_FROM_NAME="ひいらぎ ポートフォリオ"
```

3. `php artisan config:clear` して再送信テスト

## 5. 差し替えポイント

- `frontend/lib/site.ts` … SNSのURL・メールアドレス
- `frontend/app/about/page.tsx` … 経歴・実績・スキル
- `frontend/app/service/page.tsx` … 料金・プラン内容
- `backend/public/images/icon.svg` … アイコン画像(差し替えたらファイル名に合わせてトップ/自己紹介ページも修正)

## 補足

- 管理画面(/admin)のURLは公開されますが、パスワード+APIトークンで保護されています。心配な場合はページ名を変更してください(`frontend/app/admin` フォルダ名を変えるだけ)
- backendのファイルは新規追加が中心ですが、`bootstrap/app.php` と `database/seeders/DatabaseSeeder.php` は既存ファイルを上書きします(Laravel 13の標準構成を前提)
- この環境ではPHP/npmが実行できなかったため、初回起動時にエラーが出た場合はメッセージを送ってください。すぐ修正します
