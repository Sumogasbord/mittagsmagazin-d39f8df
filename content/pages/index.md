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
    subtitle: ようこそ「さまよう旅人」のためのウェブサイトへ
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
      url: >-
        http://res.cloudinary.com/dikcsjqfo/image/upload/v1723208727/magazine_background_kibsht.svg
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
          url: >-
            https://res.cloudinary.com/dikcsjqfo/image/upload/v1723293169/magazin_wandering_Thumbnail_v50rex.jpg
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
        actions:
          - type: Button
            label: 記事一覧
            altText: ''
            url: /wandering
            showIcon: false
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
      - type: FeaturedItem
        title: 豊かな国で逢いましょう
        tagline: DIARY OF OITA
        subtitle: 大分県内に関する雑記
        text: |
          地元・大分県内のアレコレを書いた企画です。特にジャンルは決めていません。
        image:
          type: ImageBlock
          url: >-
            https://res.cloudinary.com/dikcsjqfo/image/upload/v1723208013/magazin_discover-oita_Thumbnail_eyelkl.jpg
          altText: Placeholder text
          styles:
            self:
              borderRadius: x-large
        actions:
          - type: Button
            label: 記事一覧
            altText: ''
            url: /discover-oita
            showIcon: false
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
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
      text: Informations
      color: text-dark
      styles:
        self:
          textAlign: center
    posts: []
    showThumbnail: false
    showExcerpt: false
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
          url: >-
            https://res.cloudinary.com/dikcsjqfo/image/upload/v1723208832/Hungout_thumbnail_he3f7j.svg
          altText: Pricing plan 1
        actions:
          - type: Button
            label: Join us!
            url: 'https://misskey.roolone.me'
            icon: arrowRight
            iconPosition: right
            style: primary
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
seo:
  metaTitle: RooLone Magazine
  metaDescription: RooLone Magazineのトップページです。
  socialImage: /images/magazine_thumbnail.svg
  type: Seo
  addTitleSuffix: false
  metaTags: []
type: PageLayout
---
