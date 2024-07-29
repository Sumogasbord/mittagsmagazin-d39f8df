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
      color: text-primary
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
          url: /images/magazine_background.svg
          altText: Placeholder Image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-neutral-fg-dark
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
      text: Featured posts
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
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
