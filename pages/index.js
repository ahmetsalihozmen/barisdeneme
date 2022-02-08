import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from './components/Card/Card'
import Link from 'next/link'
import { useState } from 'react'

export default function Home(props) {
  const { realEstate, shopping } = props

  const [realEstateData, setRealEstateData] = useState(realEstate)
  const [shoppingData, setShoppingData] = useState(shopping)
  const [realEstateSort, setRealEstateSort] = useState("▼")
  const [shoppingSort, setShoppingSort] = useState("▼")

  

  const changeRealEstate = () => {
    if (realEstateSort === "▼") {


      setRealEstateSort("▲")
      getRe()
    }
    else if (realEstateSort === "▲") {
      setRealEstateSort("▼")
      getRe()
    }
    else{
      setRealEstateSort("▲")
      getRe()
    }
  }
  

  const getRe = async () => {
    const res = await fetch("http://localhost:3000/api/getRE",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sort: realEstateSort
      })
    })

    
    const json = await res.json()
    console.log(json)
    setRealEstateData(json.data)
  }

  const changeShopping = () => {
    if (shoppingSort === "▼") {
      setShoppingSort("▲")
      getSH()
    }
    else if (shoppingSort === "▲") {
      setShoppingSort("▼")
      getSH()
    }
    else{
      setShoppingSort("▲")
      getSH()
    }
  }
  

  const getSH = async () => {
    const res = await fetch("http://localhost:3000/api/getSH",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sort: shoppingSort
      })
    })

    
    const json = await res.json()
    console.log(json)
    setShoppingData(json.data)
  }




  

  return (
    <div className={styles.container}>

      <Container className='m-0 w-100'>
        <Row>

        </Row>
        <Row>
          <Col>
            <h1 className='text-center'>Real Estate <span className="link sort text-end" onClick={changeRealEstate}>{realEstateSort}</span></h1>
            <Link href={"./compareRE"}>
              <Button className="but">
                Real Estate Karşılaştır
              </Button>
            </Link>
            {realEstateData.map((item, index) => {
              return (
                <Card className="link"
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  description={item.description}
                  point={item.point}
                />
              )
            }
            )}
          </Col>
          <Col>
            <h1 className='text-center'>Shopping <span className="link" onClick={changeShopping}>{shoppingSort}</span></h1>
            <Link href={"./compareSH"}>
              <Button className="but">
                Shopping Karşılaştır
              </Button>
            </Link>
            {shoppingData.map((item, index) => {
              return (
                <Card className="link"
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  description={item.description}
                  point={item.point}
                />
              )
            }
            )}
          </Col>
        </Row>
      </Container>

    </div>
  )
}



export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/getMenu');
  const json = await res.json()


  return {
    props: {
      realEstate: json.realEstate,
      shopping: json.shopping
    }
  }
}
