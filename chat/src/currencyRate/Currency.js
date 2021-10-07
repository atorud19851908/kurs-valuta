import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Col, Container, Row, Table } from 'reactstrap';


function Currency(props) {
   
    const [currencies, setCurrencies] = useState([])
   

   
    const today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    

  useEffect( () => {
    axios.get(`https://cbu.uz/ru/arkhiv-kursov-valyut/json/all/${date}/`)
    .then(response => {
      setCurrencies(response.data)
      console.log(response.data);
    }
    )
    .catch(Error => console.log('Error'))
    
  }, []);



  return (
    <div>
      <Container>
        <Row>
          <Col md = "12" className = "mt-5">
          <Table className = "table table-bordered table-dark table-hover">
      <thead>
        <tr className ="bg-primary" >
          <th>#</th>
          <th>Valyuta</th>
          <th>Valyuta kursi</th>
          <th>Sana</th>
        </tr>
      </thead>
      {currencies.map( (currency, index)  => {
        return(
          <tbody key = {index}>
        <tr>
          <th>{index+1}</th>
          <td>{currency.CcyNm_UZ}</td>
          {(currency.Rate < 100 ? (
            <td className ="red">{currency.Rate}</td>
          ) :(
            <td className = "green">{currency.Rate}</td>
          )
          )}
          
          <td>{currency.Date}</td>
        </tr>
      </tbody>
        )
      })}
      
    </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Currency;
