import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBFooter,
  MDBCard,
  MDBCardBody,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <MDBNavbar light bgColor='dark' className='text-white px-4'>
        <MDBNavbarBrand className='text-white'>
          <MDBIcon fas icon="plug" className='me-2' />
          SuiPlug
        </MDBNavbarBrand>
        <MDBBtn color='light' disabled>Connect Wallet</MDBBtn>
      </MDBNavbar>

      {/* Hero Section */}
      <div className='bg-dark text-white text-center py-5'>
        <h1 className='display-4 fw-bold'>Smart Shopping, Powered by Blockchain</h1>
        <p className='lead'>
          Discover a secure and seamless way to shop online with NFT-backed ownership, real-time inventory tracking, and blockchain-verified payments.
        </p>
        <MDBBtn
          tag='a' href='Whitepaper.pdf' color='light' size='lg' className='mt-3' download target='_blank'
          rel='noopener noreferrer'>
          <MDBIcon far icon="file-pdf" className='me-2' /> Download Whitepaper
        </MDBBtn>
      </div>

      {/* About Us */}
      <MDBContainer className='my-5'>
        <MDBRow className='align-items-center'>
          <MDBCol md='6'>
            {/* <div class="suiplug-logo-3d">
              <span>S</span><span>u</span><span>i</span><span>P</span><span>l</span><span>u</span><span>g</span>
            </div> */}
            <img src='https://pbs.twimg.com/media/GpiLOy_WAAALvAO?format=jpg' alt='About SuiPlug' className='img-fluid rounded shadow' />
          </MDBCol>
          <MDBCol md='6'>
            <h2 className='fw-bold mb-3'>About Us</h2>
            <p>
              <b>SuiPlug</b> is a Web3-powered e-commerce platform that redefines how
              people buy gadgets online. Focused on phones, laptops, and high-end electronics,
              SuiPlug uses the Sui blockchain to ensure secure, transparent, and decentralized transactions.
              Through smart contracts, NFT-based ownership, and crypto payments, users enjoy full control over
              purchases in a fast and trustless environment.
            </p>
            <p>As the future of e-commerce shifts toward decentralization, SuiPlug leads the charge.
              By integrating blockchain technologies, SuiPlug delivers a next-generation marketplace where
              every purchase is verifiable, every transaction is secure, and ownership is truly yours.
              It's not just shopping—it’s ownership on-chain.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Categories */}
      <MDBContainer className='my-5'>
        <h2 className='fw-bold mb-4 text-center'>Key Features</h2>
        <MDBRow className='g-4'>

          {[
            {
              title: 'Product Listings & Pricing',
              items: [
                'Detailed gadget specs (screen size, processor, RAM, camera, battery).',
                'Prices shown in SUI, USDT, and USDC.',
              ],
            },
            {
              title: 'Smart Contracts for Transactions',
              items: [
                'Instant product ownership transfer via smart contract.',
                'Automated refunds and dispute resolution logic.',
              ],
            },
            {
              title: 'NFT Ownership',
              items: [
                'Each product tied to a unique NFT for proof of ownership.',
                'NFT automatically transferred to buyer’s wallet post-purchase.',
              ],
            },
            {
              title: 'Connect Slush Wallets',
              items: [
                'Connect wallets like Slush wallet for easy transactions.',
                'Instant payments with visible gas fees.',
                'Supports SUI, USDT, and USDC.',
              ],
            },
            {
              title: 'Real-Time Inventory & Shipment',
              items: [
                'Live inventory updates to avoid overselling.',
                'On-chain shipment tracking for full transparency.',
              ],
            },
            {
              title: 'Decentralized Reviews',
              items: [
                'Immutable reviews stored directly on the blockchain.',
                'Only verified NFT owners can leave feedback.',
              ],
            },
          ].map((feature, index) => (
            <MDBCol md='6' key={index}>
              <MDBCard className='h-100 p-2 border-0 feature-card'>
                <MDBCardBody>
                  <h4 className='fw-bold'>{feature.title}</h4>
                  <MDBTypography listUnStyled className='mb-0'>
                    {feature.items.map((text, idx) => (
                      <li className='mb-1' key={idx}>
                        <MDBIcon icon='check-circle' className='me-2 text-success' />
                        {text}
                      </li>
                    ))}
                  </MDBTypography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}

        </MDBRow>

        {/* Inline styles for 3D card effect */}
        <style jsx>{`
    .feature-card {
      border-radius: 1rem;
      box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.10);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: #fff;
    }
    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 18px 30px rgba(0, 0, 0, 0.2);
    }
  `}</style>
      </MDBContainer>

      <MDBContainer className='my-5 text-center'>
        <h2 className='fw-bold mb-4'>Shop by Category</h2>
        <MDBRow className='g-4'>

          {/* Phone Category */}
          <MDBCol md='6'>
            <MDBCard className='category-card border-0'>
              <div
                className='category-image'
                style={{ backgroundImage: 'url(https://www.altcoinbuzz.io/wp-content/uploads/2024/05/bitcoin-altcoin-2024-05-09T144710.872.jpg)' }}
              >
                <div className='category-overlay'>
                  <h3 className='fw-bold text-white mb-0'>📱 Phones</h3>
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          {/* Laptop Category */}
          <MDBCol md='6'>
            <MDBCard className='category-card border-0'>
              <div
                className='category-image'
                style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074563.jpg)' }}
              >
                <div className='category-overlay'>
                  <h3 className='fw-bold text-white mb-0'>💻 Laptops</h3>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* Styles for the special design */}
        <style jsx>{`
    .category-card {
      overflow: hidden;
      border-radius: 1.5rem;
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .category-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 18px 30px rgba(0, 0, 0, 0.3);
    }

    .category-image {
      height: 250px;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .category-overlay {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .category-card:hover .category-overlay {
      background: rgba(0, 0, 0, 0.2);
    }
  `}</style>
      </MDBContainer>


      {/* Why SuiPlug */}
      <MDBContainer className='my-5'>
        <h2 className='fw-bold text-center mb-4'>Why SuiPlug?</h2>
        <MDBRow className='text-center'>
          <MDBCol md='4'>
            <MDBIcon fas icon='lock' size='3x' className='text-primary mb-3' />
            <h5 className='fw-bold'>Secure Blockchain Payments</h5>
            <p>Every transaction is verified on the Sui blockchain for transparency and protection.</p>
          </MDBCol>
          <MDBCol md='4'>
            <MDBIcon fas icon='certificate' size='3x' className='text-success mb-3' />
            <h5 className='fw-bold'>NFT Ownership</h5>
            <p>Own purchases as NFTs — each product is minted for digital proof and authenticity.</p>
          </MDBCol>
          <MDBCol md='4'>
            <MDBIcon fas icon='clock' size='3x' className='text-warning mb-3' />
            <h5 className='fw-bold'>Real-Time Inventory</h5>
            <p>On-chain inventory tracking keeps your stock always accurate and updated in real-time.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Footer */}
      <MDBFooter className='bg-dark text-white text-center py-4'>
        <p className='mb-2'>&copy; {new Date().getFullYear()} SuiPlug. All rights reserved.</p>
        <div className='d-flex justify-content-center gap-4'>
          <a href='https://x.com/suiplug' className='text-white'><MDBIcon fab icon='x' /></a>
          <a href='mailto:suiplug1@gmail.com' className='text-white'><MDBIcon fas icon='envelope' /></a>
        </div>
      </MDBFooter>
    </>
  );
}
