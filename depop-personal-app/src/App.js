import React from 'react';

import Logo from './components/Logo/Logo';
import MainContainer from './components/ShopContainer/MainContainer';
import UserDetails from './components/UserDetails/UserDetailsContainer';
import Avatar from './components/Avatar/Avatar';
import FollowersContainer from './components/FollowsContainer/Follows';
import FollowerNumbers from './components/FollowerNumbers/FollowerNumbers';
import ShopDescription from './components/ShopDescription/ShopBio';
import ItemContainer from './components/ItemContainer/ItemContainer';
import ProductBoxes from './components/Products/ProductBoxes';
import ProductImages from './components/Products/ProductImages';
import ImageBoxes from './components/Images/ImageBoxes';
import ImageOne from './components/Images/ImageOne';
import ImageTwo from './components/Images/ImageTwo';
import ImageThree from './components/Images/ImageThree';
import ImageFour from './components/Images/ImageFour';
import ImageFive from './components/Images/ImageFive';
import ImageSix from './components/Images/ImageSix';
import ImageSeven from './components/Images/ImageSeven';
import ImageEight from './components/Images/ImageEight';
import ImageNine from './components/Images/ImageNine';
import ImageTen from './components/Images/ImageTen';
import ImageEleven from './components/Images/ImageEleven';
import ImageTwelve from './components/Images/ImageTwelve';

import ProductPrice from './components/Products/ProductPrice';


import './App.css';


function App() {
  return (
    <React.Fragment>
      <header className="Main-head">
        <div className="Container-for-head">
          <Logo />
        </div>
      </header>
      <MainContainer>
        <UserDetails>
          <Avatar />
          <div className="shop-details">
            <h1 className="shop-name">My Vintage Garms</h1>
            <p className="username">@myvintagegarms96</p>
          </div>
        </UserDetails>
        <FollowersContainer>
          <FollowerNumbers>
            <span className="number-of-followers">50k</span>
            <span class="followers">Followers</span>
            <span class="following-number">205</span>
            <span class="followers">Following</span>
          </FollowerNumbers>
        </FollowersContainer>
        <ShopDescription>
          <p className="shop-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, tortor quis scelerisque
          blandit, lorem erat hendrerit ex. Lorem ipsum dolor sit amet.</p>
          <a className="shop-link" href="https://instagram.com/myvintagegarms96">https://instagram.com/myvintagegarms96</a>
        </ShopDescription>
        <div className="selling-button">
          <p className="selling">Selling</p>
        </div>
        <ItemContainer>
          <ProductBoxes>
            <ProductImages>
              <ImageBoxes>
                <div className="sold-item-tag">Sold</div>
                <ImageOne />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <div className="sold-item-tag">Sold</div>
                <ImageTwo />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <div className="sold-item-tag">Sold</div>
                <ImageThree />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageFour />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageFive />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageSix />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageSeven />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageEight />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageNine />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageTen />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageEleven />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
            <ProductImages>
              <ImageBoxes>
                <ImageTwelve />
                <ProductPrice />
              </ImageBoxes>
            </ProductImages>
          </ProductBoxes>
        </ItemContainer>
      </MainContainer>


    </React.Fragment>
  );
}

export default App;
