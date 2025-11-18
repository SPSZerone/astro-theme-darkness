# 🌌 Darkness - 闇のAstroテーマ

Astroの公式テンプレートをベースに、**闇**をテーマとした魔改造を施したダークテーマです。Three.js、リッチなCSSアニメーション、そしてAstroの最新機能を駆使して、動きのある圧倒的な体験を提供します。

![Darkness Theme](https://img.shields.io/badge/Astro-4.0-purple)
![Three.js](https://img.shields.io/badge/Three.js-0.160-blue)

## ✨ 特徴

### 🎨 デザイン
- **ダークテーマ**: 闇をベースにした美しいカラーパレット（紫、ピンク、青）
- **グラデーション**: 動的に変化する背景グラデーション
- **カスタムカーソル**: マウスに追従する独自のカーソルデザイン

### 🌌 Three.js エフェクト
- **5000個のパーティクル**: 3D空間で輝く粒子システム
- **回転するトーラス**: 複数のワイヤーフレームトーラスが織りなす幾何学模様
- **マウス追従カメラ**: カーソルの動きに反応する3Dカメラ

### 🎭 アニメーション
- **グリッチエフェクト**: サイバーパンクなテキストアニメーション
- **浮遊アニメーション**: すべての要素が柔らかく浮遊
- **ホバーエフェクト**: インタラクティブな要素に豊富なホバーアニメーション
- **View Transitions**: ページ遷移時のスムーズなアニメーション
- **パーティクルバースト**: ボタンクリック時のパーティクルエフェクト

### ⚡ パフォーマンス
- **Astro**: 静的サイト生成による高速パフォーマンス
- **最適化**: 軽量で効率的なアニメーション実装

## 🚀 使い方

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

### カスタマイズ

`src/styles/global.css`のCSS変数を変更することで、簡単にテーマをカスタマイズできます：

```css
:root {
  --color-bg-dark: #0a0a0f;
  --color-bg-darker: #050508;
  --color-bg-card: #151520;
  --color-accent-purple: #a855f7;
  --color-accent-pink: #ec4899;
  --color-accent-blue: #3b82f6;
  --color-text: #e4e4e7;
  --color-text-dim: #a1a1aa;
}
```

## 📁 プロジェクト構造

```
/
├── public/              # 静的ファイル
├── src/
│   ├── components/      # 再利用可能なコンポーネント
│   │   ├── ThreeBackground.astro   # Three.js背景
│   │   ├── Hero.astro              # ヒーローセクション
│   │   ├── Card.astro              # カードコンポーネント
│   │   ├── Features.astro          # 特徴セクション
│   │   └── Navigation.astro        # ナビゲーション
│   ├── layouts/         # レイアウト
│   │   └── BaseLayout.astro
│   ├── pages/           # ページ
│   │   ├── index.astro
│   │   └── about.astro
│   └── styles/          # グローバルスタイル
│       └── global.css
├── astro.config.mjs     # Astro設定
├── package.json
└── tsconfig.json
```

## 🛠️ 技術スタック

- **[Astro](https://astro.build/)** - 静的サイトジェネレーター
- **[Three.js](https://threejs.org/)** - 3Dグラフィックスライブラリ
- **CSS Animations** - リッチなアニメーション
- **View Transitions API** - スムーズなページ遷移
- **TypeScript** - 型安全な開発

## 🎯 実装されているエフェクト

1. **パーティクルシステム**: Three.jsによる5000個の3Dパーティクル
2. **グリッチアニメーション**: テキストのサイバーパンクエフェクト
3. **浮遊アニメーション**: CSS keyframesによる柔らかい動き
4. **グロウエフェクト**: カードやボタンの光るエフェクト
5. **カスタムカーソル**: マウス追従とホバー時の拡大
6. **動的グラデーション**: 回転・移動する背景グラデーション
7. **View Transitions**: ページ間のスムーズなアニメーション
8. **パーティクルバースト**: クリック時のパーティクル放出

## 🌟 今後の拡張案

- [ ] スクロールトリガーアニメーション
- [ ] WebGL シェーダーエフェクト
- [ ] 音楽ビジュアライザー
- [ ] パララックススクロール
- [ ] インタラクティブな3Dオブジェクト

## 📝 ライセンス

MIT

## 🤝 コントリビューション

プルリクエスト大歓迎です！バグ報告や機能提案もお待ちしています。

---

**Darkness** - 闇の中で輝くWebの可能性を探求する実験的プロジェクト
