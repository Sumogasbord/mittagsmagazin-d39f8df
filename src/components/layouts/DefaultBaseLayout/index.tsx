import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../../../utils/seo-utils';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};
    let title = seoGenerateTitle(page, site);
    let metaTags = seoGenerateMetaTags(page, site);
    let metaDescription = seoGenerateMetaDescription(page, site);
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
            <div className="sb-base sb-default-base-layout">
                <Head>
                    <title>{title}</title>
                    {metaDescription && <meta name="description" content={metaDescription} />}
                    {metaTags.map((metaTag) => {
                        if (metaTag.format === 'property') {
                            // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                            return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                        }
                        return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                    })}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {site.favicon && <link rel="icon" href={site.favicon} />}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        <script>
                        (function(d) {
                            var config = {
                            kitId: 'csb3exr',
                            scriptTimeout: 3000,
                            async: true
                            },
                            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                        })(document);
                        </script>
                            `}}
                    />
                </Head>
                {site.header && <Header {...site.header} enableAnnotations={enableAnnotations} />}
                {props.children}
                {site.footer && <Footer {...site.footer} enableAnnotations={enableAnnotations} />}
            </div>
        </div>
    );
}
