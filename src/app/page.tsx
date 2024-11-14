import React from 'react';

// Header Component
const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-end pr-11 pl-2.5 w-full max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full whitespace-nowrap max-w-[1347px] max-md:mr-2.5 max-md:max-w-full">
        <h1 data-layername="pagey" className="text-5xl text-black max-md:text-4xl">
        <a href='#'>
                Pagey
              </a>
        </h1>
        <div className="flex flex-wrap gap-7 items-start self-start mt-2.5 leading-none font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-tertiary)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
          <form data-layername="search" className="flex overflow-hidden gap-2 items-center px-4 py-3 bg-white rounded-full border border-solid border-zinc-300 min-h-[39px]">
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <input
              id="searchInput"
              type="search"
              placeholder="Search"
              className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
              aria-label="Search"
            />
            <button type="submit" aria-label="Submit search">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/157131bb5cb1140c43a0b2e041e03237dd8b8f2a936759eecad80b97ca143452?placeholderIfAbsent=true&apiKey=aa44427859a843449abe1b5eddeb093b" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

// Navigation Component
const Navigation: React.FC = () => {
  const navItems = [
    "Books", "Fiction", "Nonfiction", "eBooks", "Audiobooks",
    "Teens & YA", "Kids", "Toys & Games", "Stationery & Gifts"
  ];

  return (
    <nav className="flex z-10 flex-wrap gap-7 self-start mt-20 text-base font-semibold tracking-wide leading-none text-black max-md:mt-10">
      <div className="flex flex-wrap flex-auto self-start">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            data-layername="itemNavItem"
            className="px-7 whitespace-nowrap bg-blend-normal max-md:px-5"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

// FeaturedSection Component
const FeaturedSection: React.FC = () => {
  return (
    <section data-layername="section" className="flex overflow-hidden relative gap-10 justify-center items-start px-44 py-10 -mt-2 w-full max-w-[1354px] min-h-[332px] max-md:px-5 max-md:max-w-full">
      <div data-layername="container" className="flex z-0 flex-col flex-1 shrink justify-center items-center px-20 py-7 my-auto basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[405px]">
          <div className="flex gap-4 text-black">
            <h2 data-layername="welcomeTo" className="flex-auto my-auto text-4xl font-bold leading-tight text-center">
              Welcome To
            </h2>
            <div data-layername="pagey" className="grow shrink w-28 text-5xl max-md:text-4xl"> 
              <a href='#'>
                Pagey
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start pr-7 pl-10 mt-8 max-md:px-5">
            <p data-layername="description" className="text-xl leading-tight text-center text-black">
              Your Next Chapter Begins Here
            </p>
            <div data-layername="button" className="flex overflow-hidden flex-col mt-8 ml-7 w-60 max-w-full text-base font-medium text-white max-md:ml-2.5">
              <button data-layername="primary" className="p-3 w-full rounded-lg bg-slate-700">
                Explore Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ProductList Component
const ProductList: React.FC = () => {
  const products = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      tag: "Bestseller",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/357155f255f1f2ba7cf4f851c5d502992aa84a0086f76b4d90efe9a0e15d9056?placeholderIfAbsent=true&apiKey=aa44427859a843449abe1b5eddeb093b"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      tag: "Classic",
      imageSrc: ""
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      tag: "Modern Classic",
      imageSrc: ""
    }
  ];

  return (
    <section data-layername="products" className="flex overflow-hidden relative flex-col justify-center px-44 py-5 mt-8 w-full max-w-[1355px] min-h-[701px] max-md:px-5 max-md:max-w-full">
      <h2 data-layername="container" className="flex-1 shrink self-stretch my-auto text-4xl font-bold leading-tight text-black min-w-[240px] max-md:max-w-full">
        Featured Books
      </h2>
      <div data-layername="list" className="flex z-0 flex-col justify-center mt-16 w-full text-black max-md:mt-10 max-md:max-w-full">
        <div data-layername="row" className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {products.map((product, index) => (
            <div key={index} className="flex overflow-hidden flex-col rounded-md border border-solid border-black border-opacity-10 h-[420px] w-[225px]">
              <div data-layername="imageContainer" className="flex overflow-hidden items-start self-center w-56 max-w-full text-xs leading-none min-h-[341px]">
                <div data-layername="image" className="flex flex-col justify-center py-px rounded-lg bg-zinc-300 bg-opacity-50 w-[225px]">
                  <div className="flex relative flex-col pr-11 pb-40 rounded-lg aspect-[0.659] max-md:pr-5 max-md:pb-24">
                    {product.imageSrc && <img loading="lazy" src={product.imageSrc} alt={`Cover of ${product.title}`} className="object-cover absolute inset-0 size-full" />}
                    <div data-layername="tag" className="relative self-start px-2 py-1 font-medium whitespace-nowrap bg-gray-200 rounded-md">
                      {product.tag}
                    </div>
                    <div data-layername="title" className="relative self-center mt-36 mb-0 text-center max-md:mt-10 max-md:mb-2.5">
                      Book Cover
                    </div>
                  </div>
                </div>
              </div>
              <div data-layername="textContent" className="flex flex-col p-3 w-full">
                <h3 data-layername="title" className="text-base">{product.title}</h3>
                <p data-layername="subtitle" className="mt-1 text-xl font-medium leading-snug">{product.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// MapSection Component
const MapSection: React.FC = () => {
  return (
    <section data-layername="section" className="flex overflow-hidden relative gap-10 justify-center items-start px-44 py-16 mt-14 w-full text-base font-medium leading-none text-center text-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div data-layername="mapContainer" className="flex overflow-hidden z-0 flex-1 shrink py-1 my-auto basis-0 min-h-[300px] min-w-[240px] max-md:max-w-full">
        <div data-layername="image" className="flex flex-col flex-1 shrink w-full rounded-3xl basis-0 bg-black bg-opacity-10 min-w-[320px] max-md:min-w-[240px] max-md:max-w-full">
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=46.603354,1.888334&zoom=5&size=800x600&maptype=roadmap&markers=color:red%7Clabel:C%7C46.603354,1.888334&key=YOUR_API_KEY"
            alt="Location map"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

// NewsletterForm Component
const NewsletterForm: React.FC = () => {
  return (
    <section data-layername="newsletter" className="flex overflow-hidden relative gap-10 justify-center items-start px-44 py-16 mt-20 w-full text-base font-medium leading-none text-center text-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div data-layername="formContainer" className="flex flex-col gap-10 justify-center w-full max-w-[1355px] min-h-[390px] max-md:px-5 max-md:max-w-full">
        <h2 data-layername="title" className="text-5xl font-semibold">Join Our Newsletter</h2>
        <form className="flex items-center justify-center gap-3 w-full max-w-[700px] mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 py-3 px-6 border border-solid border-gray-300 rounded-full"
          />
          <button type="submit" className="py-3 px-6 bg-blue-600 text-white rounded-full">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between px-44 py-8 w-full bg-gray-800 text-white max-md:px-5 max-md:max-w-full">
      <div>&copy; 2024 Pagey. All rights reserved.</div>
      <div className="flex gap-6">
        <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
      </div>
    </footer>
  );
};

// Main Page Component
const Page: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Navigation />
      <FeaturedSection />
      <ProductList />
      <MapSection />
      <NewsletterForm />
      <Footer />
    </div>
  );
};

export default Page;
