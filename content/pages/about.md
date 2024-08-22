---
type: PageLayout
title: Member
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: About us
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: ''
    text: |
      RooLoneについてご紹介しましょう。
    actions: []
    colors: bg-neutral-fg-dark
    backgroundImage:
      type: BackgroundImage
      url: /images/magazine_background.svg
      altText: Placeholder image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: RooLone
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: RooLoneって何ですか？
    text: >
      RooLoneは、旅人サークルの[「Plainbox」](https://plainbox.net)が運営している「旅も人生も彷徨っているような人たち」へ向けたウェブサイトのシリーズ。


      現在は、ウェブマガジンである「RooLone Magazine」と分散型SNS"Misskey"のサーバーである「RooLone
      Hangout」を展開している。
    actions: []
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: RooLone Magazine
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: RooLone Magazineって何ですか？
    text: >
      RooLone Magazineは「さまよう旅人」へ向けたウェブマガジン。


      以下のコンテンツを通して旅の参考に1mmぐらいはなるような情報をローペースで発信する予定。


      \| 休み短しさまよえ旅人                             |
      Plainboxウェブサイトで展開していたシリーズをRooLone Magazineへお引越し。Sumögåsbordを中心に旅行記として展開予定。
      |

      \| -------------------------------------- |
      -------------------------------------------------------------------------------
      |

      \| 豊かな国で逢いましょう                            |
      我々が拠点としている大分県のことについて書く予定。基本的には交通系の情報を初めて来県する旅行者向けの内容と大分県に住んでいる人へ向けて書く予定。  
      |

      \| -------------------------------------- |
      -------------------------------------------------------------------------------
      |

      \| どうでもふぇすてぃばーれん|
      上記2つとは違い、テーマがなく、どうでもいいようなことを書く予定。備忘録のようなもの。                               
      |
    actions: []
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
  - type: FeaturedPeopleSection
    title:
      type: TitleBlock
      text: Member of RooLone
      color: text-dark
      styles:
        self:
          textAlign: center
    people:
      - content/data/sumogasbord.json
    actions: []
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
slug: about
seo:
  type: Seo
  metaTitle: All Members
  metaDescription: RooLone Magazineのメンバーを紹介しています。
  metaTags: []
  socialImage: >-
    https://res.cloudinary.com/dikcsjqfo/image/upload/v1723208689/magazine_thumbnail_cmafx9.svg
---
