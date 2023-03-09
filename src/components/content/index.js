import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ReactDOM from "react-dom";
import './content.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cardInfo = [
  { image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_cards_02.png", tittle: "100.000", text: "Sisa 250"},
  { image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_cards_02.png", tittle: "50.000", text: "Sisa 200"},
  { image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_cards_02.png", tittle: "25.000", text: "Sisa 200"},
  { image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_cards_02.png", tittle: "10.000", text: "sisa 500"},
];

const renderCard= (card,index)=>{
  return(
    <Container fluid className='con'>
    <Row xs={2} md={3} className="g-3">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
        <Card className='card' border='info' style={{ width: '18rem'}} key={index} >
          <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>Steam Wallet {card.tittle}</Card.Title>
            <Card.Text>
              jumlah yang tersisa saat ini : {card.text}
            </Card.Text>
            <Button variant="primary">Beli</Button>
        </Card.Body>
        </Card>
    </Col>
      ))}
    </Row>
    </Container>
  );
}

function NavScrollExample() {
    return (
      <div>
        {cardInfo.map(renderCard)}
      </div>
    );
  }
  
  export default NavScrollExample;