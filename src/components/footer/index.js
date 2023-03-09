import "./footer.css"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImInstagram } from "react-icons/im"
import Container from "react-bootstrap/esm/Container";

export default function theFooter() {
return(

    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-permalinks ">
          <ul>
            <li>
              <strong>Top Categories</strong>
            </li>
            <li>
              <a href="#trending">Trending</a>
            </li>
            <li>
              <a href="#sales">Best Sales</a>
            </li>
            <li>
              <a href="#timer">Limited Offers</a>
            </li>
            <li>
              <a href="#popular">Popular</a>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Permalinks</strong>
            </li>
            <li>
              <h3>Home</h3>
            </li>
            <li>
              <h3>Shop</h3>
            </li>
            <li>
              <h3>Contact</h3>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Contact</strong>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hafizazizi_n/"
                target="_blank"
                rel="noreferrer"
              >
                <ImInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Container>
      <div className="footer-copyright">
        <p>
          <em>Copyright All Right Reserved</em>
          <span>
            <strong> Hafizh 'Azizi Nasution</strong>      
          </span>
        </p>
      </div>
      </Container>
    </footer>
 );
}

