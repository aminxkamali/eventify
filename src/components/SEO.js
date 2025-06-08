import { Helmet } from "react-helmet";

/**
 * SEO component for setting meta tags and title for each page.
 * Usage: <SEO title="..." description="..." />
 */
export default function SEO({ title, description, keywords, children }) {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
            {children}
        </Helmet>
    );
}
