import React from 'react';
import data from './data/home.module.json'; // Adjust the path to your JSON file
import "../styles/Home.css"
const page = () => {
  // Extract data for different sections
  const heroSection = data.pageData.heroSection;
  const serviceCategories = data.pageData.serviceCategories;
  const banner1 = data.pageData.banner1;
  const mainContent = data.pageData.mainContent;
  const about = data.pageData.about;
  const testimonial = data.pageData.testimonial;
  const banner2 = data.pageData.banner2;
  const banner3 = data.pageData.banner3;
  const meta = data.meta;

  return (
    <div>
      {/* Hero Section */}
      <section>
        <img src={heroSection.bgImage} alt="Hero Background" />
        <h1>{heroSection.heading1}</h1>
        {/* Render hero section points dynamically */}
        <ul>
          {heroSection.heroPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Service Categories Section */}
      <section>
        {serviceCategories.map((category, index) => (
          <div key={index}>
            <h2>{category.categoryTitle}</h2>
            <ul>
              {category.categories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <img src={subCategory.icon} alt={subCategory.displayName} />
                  <h3>{subCategory.displayName}</h3>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Banner1 Section */}
      <section>
        <h2>{banner1.heading}</h2>
        <ul>
          {banner1.features.map((feature, index) => (
            <li key={index}>
              <strong>{feature.title}</strong>: {feature.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Section */}
      <section>
        <h2>{mainContent.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: mainContent.html }} />
      </section>

      {/* About Section */}
      <section>
        <h2>{about.title}</h2>
        <img src={about.img} alt="About Us" />
        <div dangerouslySetInnerHTML={{ __html: about.description }} />
      </section>

      {/* Testimonial Section */}
      <section>
        <h2>{testimonial.title}</h2>
        <div>
          {testimonial.reviews.map((review, index) => (
            <div key={index}>
              <p>{review.review}</p>
              <p>Author: {review.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner2 Section */}
      <section>
        <img src={banner2.bgImg} alt="Banner 2 Background" />
        <ul>
          {banner2.features.map((feature, index) => (
            <li key={index}>
              <strong>{feature.text}</strong>: {feature.value}
            </li>
          ))}
        </ul>
      </section>

      {/* Banner3 Section */}
      <section>
        <h2>{banner3.title}</h2>
        <p>{banner3.description}</p>
        {/* Include any other content or links from banner3 as needed */}
      </section>

      {/* Meta Information */}
      <meta name="description" content={meta.description} />
      {/* Include other meta tags as needed */}
    </div>
  );
};

export default page;
