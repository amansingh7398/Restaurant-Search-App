
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Input } from 'semantic-ui-react'
// export default function SearchApiData() {
//     const [APIData, setAPIData] = useState([])
//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/users`)
//             .then((response) => {
//                 setAPIData(response.data);
//             })
//     }, [])

//     return (
//         <div style={{ padding: 20 }}>
//             <Input icon='search'
//                 placeholder='Search...'
//                 value={APIData.search}
//             />
//             <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
//                 {APIData.map((item) => {
//                     return (
//                         <Card>
//                             <Card.Content>
//                                 <Card.Header>{item.name}</Card.Header>
//                                 <Card.Description>
//                                     {item.email}
//                                 </Card.Description>
//                             </Card.Content>
//                         </Card>
//                     )
//                 })}
//             </Card.Group>
//         </div>
//     )
// }