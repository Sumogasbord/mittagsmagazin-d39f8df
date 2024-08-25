import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import Link from '../../atoms/Link';
import ImageBlock from '../../blocks/ImageBlock';

export default function PostLayout(props) {
    const { page, showThumbnail, site, hasBigThumbnail, hasAnnotations } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, date, author, markdown_content, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MMMM D, YYYY');
    const flexDirection = page.styles?.self?.flexDirection ?? 'col';
    const hasThumbnail = !!(showThumbnail && page.featuredImage?.url);

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <div className={classNames('w-full', 'flex', mapFlexDirectionStyles(flexDirection, hasThumbnail), 'gap-6')}>
                    {hasThumbnail && (
                        <ImageBlock
                            {...page.featuredImage}
                            className={classNames({
                                'xs:w-[50%] xs:shrink-0': hasBigThumbnail && (flexDirection === 'row' || flexDirection === 'row-reversed'),
                                'xs:w-[28.4%] xs:shrink-0': !hasBigThumbnail && (flexDirection === 'row' || flexDirection === 'row-reversed')
                            })}
                            imageClassName="w-full h-full object-cover"
                            {...(hasAnnotations && { 'data-sb-field-path': 'featuredImage' })}
                        />
                    )}
                    <div
                        className={classNames('w-full', {
                            'xs:grow': hasThumbnail && (flexDirection === 'row' || flexDirection === 'row-reversed')
                        })}
                    ></div>
                </div>
                <article className="px-4 py-16 sm:py-28">
                    <div className="max-w-screen-2xl mx-auto">
                        <header className="max-w-4xl mx-auto mb-12 text-center">
                            <h1 {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>{title}</h1>
                            <div className="text-sm uppercase mt-4">
                                <time dateTime={dateTimeAttr} {...(enableAnnotations && { 'data-sb-field-path': 'date' })}>
                                    {formattedDate}
                                </time>
                                {author && (
                                    <>
                                        <span className="mx-2">|</span>
                                        <PostAuthor author={author} enableAnnotations={enableAnnotations} />
                                    </>
                                )}
                            </div>
                        </header>
                        {markdown_content && (
                            <Markdown
                                options={{ forceBlock: true }}
                                className="sb-markdown max-w-3xl mx-auto"
                                {...(enableAnnotations && { 'data-sb-field-path': 'markdown_content' })}
                            >
                                {markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {bottomSections.length > 0 && (
                    <div {...(enableAnnotations && { 'data-sb-field-path': 'bottomSections' })}>
                        {bottomSections.map((section, index) => {
                            const Component = getComponent(section.__metadata.modelName);
                            if (!Component) {
                                throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                            }
                            return (
                                <Component
                                    key={index}
                                    {...section}
                                    enableAnnotations={enableAnnotations}
                                    {...(enableAnnotations && { 'data-sb-field-path': `bottomSections.${index}` })}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function PostAuthor({ author, enableAnnotations }) {
    const authorName = author.name && <span {...(enableAnnotations && { 'data-sb-field-path': '.name' })}>{author.name}</span>;
    return author.slug ? (
        <Link {...(enableAnnotations && { 'data-sb-field-path': 'author' })} href={`/blog/author/${author.slug}`}>
            {authorName}
        </Link>
    ) : (
        <span {...(enableAnnotations && { 'data-sb-field-path': 'author' })}>{authorName}</span>
    );
}

function mapFlexDirectionStyles(flexDirection: string, hasThumbnail: boolean) {
    switch (flexDirection) {
        case 'row':
            return hasThumbnail ? 'flex-col xs:flex-row xs:items-stretch' : 'flex-col';
        case 'row-reverse':
            return hasThumbnail ? 'flex-col xs:flex-row-reverse xs:items-stretch' : 'flex-col';
        case 'col':
            return 'flex-col';
        case 'col-reverse':
            return 'flex-col-reverse';
        default:
            return null;
    }
}

/*
function PostCategory({ category, enableAnnotations }) {
    if (!category) {
        return null;
    }
    return (
        <div className="mb-4">
            <Link {...(enableAnnotations && { 'data-sb-field-path': 'category' })} href={category.__metadata?.urlPath}>
                {category.title}
            </Link>
        </div>
    );
}
*/
