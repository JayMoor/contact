import { useEffect, useState } from 'react'
import './App.css'

const contacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = ({contacts}) => {
  return ( 
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          contacts.map((contact, indx)=>(
          <tr key={indx}>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
        </tr>))
        }
      </tbody>
    </table>
  ); 
}


function App(){

  const [contacts, setContacts] = useState([])
 
 
  useEffect(() => {
  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    )

    const data = await response.json()
    setContacts(data)

    
  }

  getData()
 }, [])

 return <ContactList contacts={contacts}/>
  
}




export default App
