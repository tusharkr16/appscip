import React, { useEffect, useState } from "react";
import styles from '../styles/Discovery.module.css'; // Import the CSS file
import ProductList from "./ProductListing";

const DiscoverSection = () => {

  const [isMobile, setIsMobile] = useState(false);  // State to track mobile view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);  // Update state based on window size
    };

    window.addEventListener('resize', handleResize);
    handleResize();  // Initial check

    return () => window.removeEventListener('resize', handleResize);  // Cleanup
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };
  return (
    <>
      <div className={styles.routesSection}>
        <p>Home</p>
        <p>|</p>
        <p>Shop</p>
      </div>

      <div className={styles.centeredContainer}>
        <div className={styles.productContainer}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </div>

      <div style={{
        width: '1248px',
        height: '88px',
        top: '532px',
        left: '96px',
        display: 'flex',
        justifyContent: 'space-between',
        opacity: 1,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <span>3425 Items</span>
          <span onClick={toggleSidebar} style={{ cursor: 'pointer' }}> {isSidebarOpen ? "< HIDE FILTER" : "FILTER"}</span>
        </div>
        <select
          style={{
            padding: "5px",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontSize: "14px",
            border: 'none'
          }}>
          <option value="recomended">RECOMENDED</option>
          <option value="new_first">NEWEST FIRST</option>
        </select>
      </div>

      <div className={styles.container}>
        {isSidebarOpen && ( // Conditional rendering of the sidebar
          <div className={styles.sidebar}>
            <div>
              <input type="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1">Customizble</label>
            </div>

            {/* Customizable Dropdowns */}
            <div className={styles.dropdownContainer}>
              <label className={styles.label} htmlFor="idealForSelect">IDEAL FOR:</label>
              <select id="idealForSelect" className={styles.customSelect}>
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="baby_kids">Baby & Kids</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>OCCASION:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="work">Work</option>
                <option value="rainy_season">Rainy Season (1)</option>
                <option value="casual">Casual (3)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>FABRIC:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="wedding">Wedding (1)</option>
                <option value="french_knot">French Knot (2)</option>
                <option value="party">Party (10)</option>
                <option value="zardosi">Zardosi (2)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>SEGMENT:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="regular">Regular (2)</option>
                <option value="fancy">Fancy (1)</option>
                <option value="muslin">Muslin (1)</option>
                <option value="embroidery">Embroidery (1)</option>
                <option value="satin_blend">Satin Blend (1)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>SUITABLE FOR:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="satin">Satin (1)</option>
                <option value="silver">Silver (4)</option>
                <option value="tericoat">Tericoat (1)</option>
                <option value="ethnic">Ethnic (2)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>RAW MATERIALS:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="linen">Linen (5)</option>
                <option value="contemporary">Contemporary (11)</option>
                <option value="formal_wear">Formal Wear (1)</option>
                <option value="raw_silk">Raw Silk (2)</option>
                <option value="western_wear">Western Wear (1)</option>
                <option value="cotton">Cotton (13)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>PATTERN:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="casual_wear">Casual Wear (7)</option>
                <option value="wool">Wool (2)</option>
                <option value="silk">Silk (2)</option>
                <option value="cotton_silk">Cotton Silk (3)</option>
                <option value="leather">Leather (2)</option>
                <option value="windowpane">Windowpane (2)</option>
                <option value="cotton">Cotton (5)</option>
                <option value="pinstripes">Pinstripes (1)</option>
                <option value="cellulosic_fibers">Cellulosic Fibers (4)</option>
                <option value="solid">Solid (2)</option>
                <option value="chalk_stripes">Chalk Stripes (2)</option>
                <option value="slim_fit">Slim Fit (1)</option>
                <option value="tartan">Tartan (1)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>JACKET MATERIAL:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="velvet">Velvet (5)</option>
                <option value="cotton">Cotton (7)</option>
                <option value="leather">Leather (13)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>SLEEVE LENGTH:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="half_sleeve">Half Sleeve (2)</option>
                <option value="cap_sleeve">Cap Sleeve (10)</option>
              </select>
            </div>

            <div className={styles.dropdownContainer}>
              <div className={styles.label}>SLEEVE:</div>
              <select className={styles.customSelect}>
                <option value="all">All</option>
                <option value="roll_up_sleeve">Roll-Up Sleeve (1)</option>
                <option value="regular_sleeves">Regular Sleeves (1)</option>
                <option value="long_sleeve">Long Sleeve (1)</option>
                <option value="full_sleeve">Full Sleeve (5)</option>
              </select>
            </div>
          </div>
        )}

        <div className={styles.mainContent}>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default DiscoverSection;
