import React    from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import currencyFormat from '../../helpers/currencyFormat';
import "./styles.scss";

const Product = ({ product }) => {
  return (
    <Card className="py-1 px-4">
			<Card.Img className="cardImage" variant="top" src={product.image} />
			<Card.Body>
				<Card.Title className="cardTitle"> { product.title } </Card.Title>
				<Card.Text className="cardPrice"> { currencyFormat(product.price)} </Card.Text>
				<Link to={`/${product.id}`}>Ver detalle</Link>
			</Card.Body>
    </Card>
  )
}

export default Product;