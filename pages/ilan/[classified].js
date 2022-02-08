import { Container, Row, Col } from 'react-bootstrap';


export default function classified({ data }) {
    console.log(data)



    return (
        <div className='d-flex justify-content-center'>
            <Container className="mainmenucard">
                <Row>
                    <Col>
                        <div >
                            <h3>{data.title}</h3>
                            <h4>İlanın Puanı: {data.point.toFixed()}</h4>
                            <p><strong>ID:</strong> {data.id}</p>
                            <p><strong>Kullanıcı ID:</strong> {data.userId}</p>
                            <p><strong>Açıklama:</strong> {data.description}</p>
                            <p><strong>Kategori:</strong> {data.category}</p>
                            <p><strong>Fiyat:</strong> {data.price}</p>
                            <p><strong>Şehir:</strong> {data.city}</p>
                            <p><strong>Yayınlayan Kişi:</strong> {data.publishedBy}</p>
                            <p><strong>{data.classifiedAttributes[0].attributeName}:</strong> {data.classifiedAttributes[0].attributeValue}</p>
                            <p><strong>{data.classifiedAttributes[1].attributeName}:</strong> {data.classifiedAttributes[1].attributeValue}</p>
                            <p><strong>{data.classifiedAttributes[2].attributeName}:</strong> {data.classifiedAttributes[2].attributeValue}</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}


export async function getServerSideProps({ params }) {

    const res = await fetch(`http://localhost:3000/api/${params.classified}`);
    const json = await res.json()
    console.log(json)
    console.log("Sahibinden.com Compare")
    return {
        props: {
            data: json.data
        }
    }
}
