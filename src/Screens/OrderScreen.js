import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderScreen = () => {
  const [radioValue, setRadioValue] = useState('second');
  return (
    <main>
      <Header />
      <div className={`pair ${radioValue === 'first' ? 'active' : ''} `}>
        <div className="pair-head">
          <div className="pair-info">
            <input
              type="radio"
              value="first"
              name="first"
              checked={radioValue === 'first'}
              onChange={(e) => setRadioValue(e.target.value)}
              id="onePair"
            />
            <div className="price">
              <p>
                1 Unit <span className="item-discount">10% Off</span>
              </p>
              <h4>Standard Price</h4>
            </div>
          </div>

          <div className="discount">
            <h4>$10.00 USD</h4>
            <h5>$24.00 USD</h5>
          </div>
        </div>

        <div className="pair-body">
          <div className="row">
            <div className="col number">
              <div className="row">
                <p>&nbsp;</p>
              </div>

              <div className="row">
                <p>#1</p>
              </div>

              <div className="row">
                <p>#2</p>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <p>Size</p>
              </div>

              <div className="row">
                <select>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </div>

              <div className="row">
                <select>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <p>Color</p>
              </div>

              <div className="row">
                <select>
                  <option value="color">Color</option>
                  <option value="blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>

              <div className="row">
                <select>
                  <option value="color">Color</option>
                  <option value="blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`pair banner  ${radioValue === 'second' ? 'active' : ''} `}>
        <div className="banner-content"></div>
        <div className="pair-head">
          <div className="pair-info">
            <input
              type="radio"
              value="second"
              name="second"
              checked={radioValue === 'second'}
              onChange={(e) => setRadioValue(e.target.value)}
              id="onePair"
            />
            <div className="price">
              <p>
                2 Unit <span className="item-discount">20% Off</span>
              </p>
            </div>
          </div>

          <div className="discount">
            <h4>$18.00 USD</h4>
            <h5>$24.00 UDD</h5>
          </div>
        </div>

        <div className="pair-body">
          <div className="row">
            <div className="col number">
              <div className="row">
                <p>&nbsp;</p>
              </div>
              <div className="row">
                <p>#1</p>
              </div>
              <div className="row">
                <p>#2</p>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <p>Size</p>
              </div>
              <div className="row">
                <select>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </div>
              <div className="row">
                <select>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <p>Color</p>
              </div>
              <div className="row">
                <select>
                  <option value="color">Color</option>
                  <option value="blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>
              <div className="row">
                <select>
                  <option value="color">Color</option>
                  <option value="blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`pair ${radioValue === 'third' ? 'active' : ''} `}>
        <div className="pair-head">
          <div className="pair-info">
            <input
              type="radio"
              value="third"
              name="third"
              checked={radioValue === 'third'}
              onChange={(e) => setRadioValue(e.target.value)}
              id="onePair"
            />
            <div className="price">
              <p>
                3 Unit <span>30% Off</span>
              </p>
            </div>
          </div>

          <div className="discount">
            <h4>$24.00 USD</h4>
            <h5>$24.00 UDD</h5>
          </div>
        </div>

        <div className="pair-body">
          <div className="row">
            <div className="col number">
              <div className="row">
                <p>&nbsp;</p>
              </div>
              <div className="row">
                <p>#1</p>
              </div>
              <div className="row">
                <p>#2</p>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <p>Size</p>
              </div>
              <div className="row">
                <select>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </div>
              <div className="row">
                <select>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <p>Color</p>
              </div>
              <div className="row">
                <select>
                  <option value="color">Color</option>
                  <option value="blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>
              <div className="row">
                <select>
                  <option value="color">Color</option>
                  <option value="blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="total">
        <p>Free Delivery</p>
        <h4>
          Total Price <span>: $18.00 USD</span>
        </h4>
      </div>

      <div className="cta">
        <button type="button">
          <i className="fa fa-plus icon"></i> &nbsp;Add To Cart
        </button>
      </div>
      <Footer />
    </main>
  );
};

export default OrderScreen;
