
const BannerText = ({ bannerTitle, bannerDescription }) => {
  return (
    <div className="banner_infor">
      <h1>{bannerTitle}</h1>
      <p>{bannerDescription}</p>
    </div>
  );
};
const PageBanner = ({ bannerTitle, bannerDescription }) => {
  return (
    <section className="banner_sect">
      <div className="banner_details">
        <div className="banner_infor">
          <h1>{bannerTitle}</h1>
          <p>{bannerDescription}</p>
        </div>
        {/* <BannerText bannerTitle="Club Leadership" bannerDescription="The Leadership Page will highlight the dedicated team behind Murang'a University Tech Club (MUTC). This page will feature profiles of the club's leaders, including their roles, responsibilities, links to their social media accounts, and brief biographies. " /> */}
      </div>
    </section>
    //     <section>

    //         <div className="banner_infor">
    //             <h1>{bannerTitle}</h1>
    //             <p>{bannerDescription}</p>
    //         </div>
    // );
    //     </section>
  );
};

export default PageBanner;
