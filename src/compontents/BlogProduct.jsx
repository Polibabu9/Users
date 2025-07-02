import React, { useEffect, useState } from 'react';
import BlogCard from './blogCard';


function BlogProduct() {
    const [details,SetDetails]  = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()).
        then(data => SetDetails(data)).
        catch((e)=> console.error(e));
    },[])


    // const FilteredData = details.filter((detail) => detail.name.toLowerCase().includes(searchTerm.toLowerCase()) || detail.address.city.toLowerCase().includes(searchTerm.toLowerCase() ));
      // Filter users based on name or city
  const filteredUsers = details.filter((detail) =>
    detail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    detail.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
    <>
        <div style={{padding: 20 , margin: 0}}>
            <input style={{padding:20, marginBottom:20 , fontWeight:'bold' ,width: '95%',boxSizing: 'border-box'}}
            type="text"
            name='search'
            value={searchTerm}
            placeholder='Enter user Name or City '
            onChange={(e) => setSearchTerm(e.target.value)} />
            <div style={{display:'flex', flexWrap : 'wrap' , gap:20 }}>
                {filteredUsers.map(user => (<BlogCard key = {user.id} user = {user}/>))}
            </div>
        </div>

    </>
  )
}

export default BlogProduct