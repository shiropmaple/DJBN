# でじゃぶん / プロジェクト概要

考えたアイデアがすでに存在するかを調べられるアプリです。  
本リポジトリではフロントエンドを実装しています。

# リンク
- [Page Link](https://djbn.vercel.app/)  
- [Figma](https://www.figma.com/design/9vIOKhWWfA2Lcvf9Fg3vFT/%E9%A7%86%E3%81%91%E5%87%BA%E3%81%97%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC?node-id=0-1&p=f&t=2sG9FZXZxNcJYV19-0)

# 使用技術

- **Next.js** 15.2.2
- **React** 19
- **Tailwind CSS** 4
- **TypeScript** 5
- **ESLint** 9

# 実行方法

プロジェクトを実際に動かすための手順を説明します。
- 以下のコマンドを実行します。

```bash
cd djbn
npm run dev
```

- その後、ターミナル内に表示されたURLをブラウザで開きます。

# 開発の流れ
## 1. issueを立てる
`in GitHub`
- GitHubにおいてissue(to do的なもの)を作成します。

## 2. issueをもとにbranchを作成する

`in GitHub`
- 自分が担当するissueを開き、右の`create a branch`を押します。
- `Create branch`をclickするとcommandが表示されるのでcopyします。

`in VSCode`  
- コピーしたコマンドをVSCodeのターミナルで実行すると、branchの作成と移動が完了します。


## 3. 開発
`in VSCode`
- がんばる

## 4. commit
`in VSCode`
- ローカルの作業内容を保存することです。ゲームでいうセーブ的な。
- キリがいい時にcommitするのがおすすめです。
- 1つのissueに対して、commitは複数回行っても良いです。

## 5. push
`in VSCode`
- ローカルのコミット履歴をリモートリポジトリに送信する操作です。  
（みんなのパソコン上の作業をネット上にあるプロジェクトに反映させます）
- issueの作業が終了し、全ての変更をcommit後、pushを行います。
- 1つのissueに対して、pushは1回行います。

## 6. pull reqestの作成、merge、branchの消去
`in GitHub`
- push後、GitHubを開くと`compare & pull request`を表示されるのでクリックします。
- 指示に従って進んでいき、いい感じにmergeとbranchの消去を行います。

## 7. issueを立てて次の作業へ
`in GitHub`
- 1に戻る 

`in VSCode`
- もしmain branchでアプリを実行したい場合、以下をターミナルで実行します。
```bash
git checkout main
git pull
```

# 命名規則
## issue

- 【HTML】 `What`を`How`  
  （例）  【HTML】 sectionタグにトップ画像を追加  
- 【CSS】 `What`を`How`  
  （例）  【CSS】 h2.classの色を赤色に変更  

## branch

- issues/`イシュー番号`  
  （例）  issues/3

## commit massage
- #`イシュー番号` `What`を`How`  
  （例）  #3 sectionタグにトップ画像を追加

## pull request
- [`ブランチ名`] `What`を`How`  
  （例）  [issues/3] sectionタグにトップ画像を追加
