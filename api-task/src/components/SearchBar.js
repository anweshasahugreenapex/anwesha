import React from 'react'
import { Button } from '@material-ui/core'
import { useState } from 'react'

 const SearchBar = ({currentPosts,posts,setPosts}) => {
  const [searchItem,setSearchItem]=useState("")

  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(searchItem);
      setSearchItem("");
      
     
//    newPosts.map((post)=>{
//     if(post.title.includes(searchItem) ){
        
       
        // console.log(post.title)

        // setPosts(newPosts.filter((post)=>post.title.includes(searchItem))) 
    //}
    
//})
    
  }

 


//   const searchItem=(item)=>{
//     console.log(item)
//     currentPosts.map((post)=>{
//     if(post.title.includes(item) ){
        
       
//         console.log(post.title)
//     }})
//     if(item==="")
//     setPosts(posts)
  
//    else{
      

//        setPosts(currentPosts.filter((post)=>post.title.includes(item))) 
//    }
    // currentPosts.map((post)=>{
    //     if(post.title.includes(item) )console.log(post.title)})
// }



    return (
        <>
        <form class="d-flex" style={{marginBottom:"10px"}} 
        >
        <input class="form-control me-2" type="search" value={searchItem}  name="searchField" placeholder="Search here..." aria-label="Search" onChange={(e)=>setSearchItem(e.target.value)} />
      <Button type='submit' onClick={(e)=>handleSubmit(e)}>search</Button>
    
      
      </form>
       
     </>
    )
}
export default SearchBar
