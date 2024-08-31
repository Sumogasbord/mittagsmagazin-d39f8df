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
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Contents
      color: text-primary
      styles:
        self:
          textAlign: center
    subtitle: シリーズ記事
    items:
      - type: FeaturedItem
        title: 休み短しさまよえ旅人
        tagline: Travel Diary
        subtitle: ''
        text: |
          「さまよういんたーねっつ★座敷童子」」であるSumögåsbordの旅行記です。
          主に国内旅行中心です。
        image:
          type: ImageBlock
          url: >-
            http://res.cloudinary.com/dikcsjqfo/image/upload/v1723293169/magazin_wandering_Thumbnail_v50rex.jpg
          altText: ''
          styles:
            self:
              borderRadius: x-large
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
      - type: FeaturedItem
        title: 豊かな国で逢いましょう
        tagline: Discover Oita
        subtitle: ''
        text: |
          地元・大分県内のアレコレを書いたものです。
        image:
          type: ImageBlock
          url: >-
            https://res.cloudinary.com/dikcsjqfo/image/upload/v1723208013/magazin_discover-oita_Thumbnail_eyelkl.jpg
          altText: Placeholder image
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
      - type: FeaturedItem
        title: どうでもふぇすてぃばーれん
        tagline: Paragraph festivalen
        subtitle: ''
        text: |
          テーマはなく、どうでもいいようなことを書いている備忘録のようなもの。
        image:
          type: ImageBlock
          url: >-
            http://res.cloudinary.com/dikcsjqfo/image/upload/v1723208689/magazine_thumbnail_cmafx9.svg
          altText: Placeholder text
          styles:
            self:
              borderRadius: x-large
        actions:
          - type: Button
            label: 記事一覧
            altText: ''
            url: /paragraph-festivalen
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
    actions: []
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
  - type: FeaturedPostsSection
    title:
      type: TitleBlock
      text: Featured posts
      color: text-dark
      styles:
        self:
          textAlign: center
    posts:
      - content/pages/blog/surround-yourself-with-right-people.md
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
seo:
  metaTitle: RooLone Magazine
  metaDescription: RooLone Magazineのトップページです。
  socialImage: /images/magazine_thumbnail.svg
  type: Seo
  addTitleSuffix: false
  metaTags: []
type: PageLayout
---
