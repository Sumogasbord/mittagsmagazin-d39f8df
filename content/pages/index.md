---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Welcome to RooLone Magazine
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: ようこそ「さまよう旅人」のウェブサイトへ
    text: |
      RooLone Magazineは「さまよう旅人」へ向けたウェブマガジン  
      旅の参考に1mmぐらいはなるような情報をローペースで発信する予定です
    actions: []
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
        alignItems: center
      subtitle:
        textAlign: left
    backgroundImage:
      type: BackgroundImage
      altText: RooLone Magazine
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 50
      url: /images/magazine_background.svg
  - title:
      text: Contents
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: 公開予定のコンテンツ
    items:
      - title: 休み短しさまよえ旅人
        tagline: TRAVEL DIARY
        subtitle: 旅行記
        text: |
          Sumögåsbordの旅行記集です。
        image:
          url: /images/magazine_thumbnail.svg
          altText: Placeholder Image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  - type: FeaturedPostsSection
    title:
      type: TitleBlock
      text: Blog
      color: text-dark
      styles:
        self:
          textAlign: center
    posts:
      - content/pages/blog/life-of-our-development-team.md
      - content/pages/blog/surround-yourself-with-right-people.md
      - content/pages/blog/top-twenty-ways-to-save-time.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    hoverEffect: thick-underline
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
    subtitle: ''
  - type: PricingSection
    title:
      type: TitleBlock
      text: Other Contents
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Plainbox / RooLoneはこんなこともしています。
    plans:
      - type: PricingPlan
        title: Misskey Server
        price: RooLone Hangout
        details: ''
        description: |
          RooLoneのSNS。
          アプリケーションにMisskeyを採用することで、一味違う楽しさを実現。
        features:
          - ※現時点ではvandrare寄付者のみ受付
        image:
          type: ImageBlock
          url: /images/abstract-feature1.svg
          altText: Pricing plan 1
        actions:
          - type: Button
            label: Join us!
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
  - type: FeaturedPostsSection
    title:
      type: TitleBlock
      text: Informations
      color: text-dark
      styles:
        self:
          textAlign: center
    posts:
      - content/pages/blog/what-is-a-design-system.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: false
    actions: []
    elementId: ''
    variant: small-list
    colors: bg-light-fg-dark
    hoverEffect: thick-underline
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
    subtitle: ''
seo:
  metaTitle: RooLone Magazine
  metaDescription: RooLone Magazineのトップページです。
  socialImage: /images/magazine_thumbnail.svg
  type: Seo
  addTitleSuffix: false
  metaTags: []
type: PageLayout
---
