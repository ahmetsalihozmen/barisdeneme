import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Card(props) {
    const { id, title, price, category, description, point } = props;
    return (
        <Link className="link" href={`ilan/${id}`}>
            <Container className="menucard m-4 link">
                <Row>
                    <Col>
                        <h3>{title}</h3>
                        <h4>İlanın Puanı: {point.toFixed()}</h4>
                        <p><strong>ID:</strong> {id}</p>
                        <p><strong>Açıklama:</strong> {description}</p>
                        <p><strong>Kategori:</strong> {category}</p>
                        <p><strong>Fiyat:</strong> {price}</p>
                    </Col>

                </Row>
            </Container>
        </Link>
    );
}

