import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Compare({ data }) {

    const [cls1, setCls1] = useState(data[0]);
    const [cls2, setCls2] = useState(data[1]);
    const [score, setScore] = useState(1);

    const getTwo = async () => {


        updateElo(cls1, cls2, score);

        const res = await fetch("http://localhost:3000/api/getTwoRE");
        const json = await res.json()

        setCls1(json.data[0])
        setCls2(json.data[1])

    }

    const updateElo = async (cls1, cls2, score) => {

        const res = await fetch("http://localhost:3000/api/updateElo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id1: cls1.id,
                id2: cls2.id,
                elo1: cls1.point,
                elo2: cls2.point,
                score: score
            })
        });
        const json = await res.json()
        console.log(json)


    }


    return (
        <div>
            <Container>
                <h2 className="text-center mt-5 cmp">Beğendiğin İlanı Seç!</h2>
                <Row>
                    <Col>
                        <Container className="menucard m-4 link">
                            <Row>
                                <Col >
                                    <div onClick={() => {
                                        setScore(1)
                                        getTwo()
                                    }}>
                                        <h3>{cls1.title}</h3>
                                        <h4>İlanın Puanı: {cls1.point.toFixed()}</h4>
                                        <p><strong>ID:</strong> {cls1.id}</p>
                                        <p><strong>Açıklama:</strong> {cls1.description}</p>
                                        <p><strong>Kategori:</strong> {cls1.category}</p>
                                        <p><strong>Fiyat:</strong> {cls1.price}</p>
                                        <p><strong>Şehir:</strong> {cls1.city}</p>
                                        <p><strong>{cls1.classifiedAttributes[0].attributeName}:</strong> {cls1.classifiedAttributes[0].attributeValue}</p>
                                        <p><strong>{cls1.classifiedAttributes[1].attributeName}:</strong> {cls1.classifiedAttributes[1].attributeValue}</p>
                                        <p><strong>{cls1.classifiedAttributes[2].attributeName}:</strong> {cls1.classifiedAttributes[2].attributeValue}</p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="menucard m-4 link">
                            <Row>
                                <Col>
                                    <div onClick={() => {
                                        setScore(0)
                                        getTwo()
                                    }}>
                                        <h3>{cls2.title}</h3>
                                        <h4>İlanın Puanı: {cls2.point.toFixed()}</h4>
                                        <p><strong>ID:</strong> {cls2.id}</p>
                                        <p><strong>Açıklama:</strong> {cls2.description}</p>
                                        <p><strong>Kategori:</strong> {cls2.category}</p>
                                        <p><strong>Fiyat:</strong> {cls2.price}</p>
                                        <p><strong>Şehir:</strong> {cls2.city}</p>
                                        <p><strong>{cls2.classifiedAttributes[0].attributeName}:</strong> {cls2.classifiedAttributes[0].attributeValue}</p>
                                        <p><strong>{cls2.classifiedAttributes[1].attributeName}:</strong> {cls2.classifiedAttributes[1].attributeValue}</p>
                                        <p><strong>{cls2.classifiedAttributes[2].attributeName}:</strong> {cls2.classifiedAttributes[2].attributeValue}</p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export async function getServerSideProps({ params }) {
    const res = await fetch("http://localhost:3000/api/getTwoRE");
    const json = await res.json()
    console.log(json)
    return {
        props: {
            data: json.data
        }
    }
}
