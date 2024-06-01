const BannerText = ({bannerTitle, bannerDescription}) => {
    return (
        <div className="banner_infor">
            <h1>{bannerTitle}</h1>
            <p>{bannerDescription}</p>
        </div>
    );
}
const PageBanner = () => {
    return (
        <section className="banner_sect">
            <div className="banner_details">
                <BannerText bannerTitle="Club Leadership" bannerDescription="The Leadership Page will highlight the dedicated team behind Murang'a University Tech Club (MUTC). This page will feature profiles of the club's leaders, including their roles, responsibilities, links to their social media accounts, and brief biographies. " />
            </div>
        </section>
    )
}

export default PageBanner;