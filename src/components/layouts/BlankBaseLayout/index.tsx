import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
            <Head>
                <title>{page.title}</title>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(d) {
                                var config = {
                                    kitId: 'csb3exr',
                                    scriptTimeout: 3000,
                                    async: true
                                },
                                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                            })(document);
                            `}}
                />
                <meta name="description" content="Components Library" />

                {site.favicon && <link rel="icon" href={site.favicon} />}
            </Head>
            {props.children}
        </div>
    );
}
