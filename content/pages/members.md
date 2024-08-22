---
type: PageLayout
title: Member
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: About RooLone
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
slug: members
seo:
  type: Seo
  metaTitle: All Members
  metaDescription: RooLone Magazineのメンバーを紹介しています。
  metaTags: []
  socialImage: >-
    https://res.cloudinary.com/dikcsjqfo/image/upload/v1723208689/magazine_thumbnail_cmafx9.svg
---
