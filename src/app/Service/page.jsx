import React from 'react';
import jsonData from '../data/routes.module.json'; 
import "./Service.css"

const page = ({ services }) => {

    const pagesData = jsonData;

    // Check if there is data available
    if (!pagesData || !Array.isArray(pagesData)) {
      return <div>No data available</div>;
    }
  return (
    <div>
    {pagesData.map((page, index) => (
      <div key={index}>
        <h1>{page.pageData.heroSection.heading1}</h1>

        {/* Render other sections */}
        <div>
          <h2>About Plumber Services</h2>
          <p dangerouslySetInnerHTML={{ __html: page.pageData.mainContent.html }} />
        </div>

        {/* Render aboutServices section */}
        <div>
          <h2>Services</h2>
          {page.pageData.aboutServices.services.map((service, serviceIndex) => (
            <div key={serviceIndex}>
              <h3>{service.title}</h3>
              <img src={service.img} alt={service.title} />
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Render other sections */}
        <div>
          <h2>Banner 2</h2>
          <img src={page.pageData.banner2.bgImg} alt="Banner 2" />
          <p>{page.pageData.banner2.title}</p>
        </div>

        <div>
          <h2>Reasons to Love</h2>
          <p>{page.pageData.reasonToLove.description}</p>
          <ul>
            {page.pageData.reasonToLove.features.map((feature, featureIndex) => (
              <li key={featureIndex}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Banner 3</h2>
          <img src={page.pageData.banner3.bgImg} alt="Banner 3" />
          <p>{page.pageData.banner3.title}</p>
          <p>{page.pageData.banner3.subTitle}</p>
        </div>

        <div>
          <h2>Reviews</h2>
          <ul>
            {page.pageData.reviews.features.map((review, reviewIndex) => (
              <li key={reviewIndex}>
                <h3>{review.title}</h3>
                <p>{review.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>About</h2>
          {page.pageData.about.map((aboutItem, aboutIndex) => (
            <div key={aboutIndex}>
              <img src={aboutItem.img} alt={`About ${aboutIndex + 1}`} />
              <div dangerouslySetInnerHTML={{ __html: aboutItem.html }} />
            </div>
          ))}
        </div>

        <div>
          <h2>Banner 4</h2>
          <ul>
            {page.pageData.banner4.features.map((feature, featureIndex) => (
              <li key={featureIndex}>
                <p>{feature.value}</p>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Repeat the above pattern for other sections */}
      </div>
    ))}
  </div>
  );
};

export default page;
