// import React, { useEffect, useState } from "react";
// import './Karaoke.css'
// import data from './components/karaoke.json'
// import InfiniteScroll from "react-infinite-scroller";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


// export default function Karaoke() {
    
//     const baza = JSON.stringify(data)
//     const song  = JSON.parse(baza).karaoke.map((value, index) => ({
//         id: index+1,
//         name: value.nameSong,
//         artist: value.artist,
//     }));


//     const [characters, setCharacters] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);

//     useEffect(() => {
//         setSlice(6)

//         setDisplayPosts(
//             baza
//                 .slice(0, slice)
//                 .map((post, i) =>  
//                 <tr>
//                     <td>{post[i].id}</td>
//                     <td>{post[i].name}</td>
//                     <td>{post[i].artist}</td>
//                 </tr>)
//         )

//         setHasMore(true)
//     }, [baza])
    
//     const showItems = (posts) => {
//         for (let i = 0; i < records; i++) {
//           vse.push(
//             <tr>
//                 <td>{posts[i].id}</td>
//                 <td>{posts[i].name}</td>
//                 <td>{posts[i].artist}</td>
//             </tr>
//           );
//         }
//         return vse;
//       };

//   return (
//     <>
//     <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '40ch', } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Поиск" variant="outlined" onChange={({target}) => {
//         setSearchText(target.value)
//         search()
//         }}/>
    
//     </Box>
//     <div className="w-100 mt-2">

   
//     <table className="table_dark">
//     <tr>
//         <th>Номер</th>
//         <th>Название</th>
//         <th>Исполнитель</th>
//     </tr>
        
//       {showItems(song)}
 
//   </table>
//   </div>
//   </>
//   );
// }





// // const books = [
// //     { author: "Marcel Proust", title: "In Search of Lost Time", pageNumber: 123 },
// //     { author: "James Joyce", title: "Ulysses", pageNumber: 123 },
// //     { author: "Miguel de Cervantes", title: "Quixote", pageNumber: 123 },
// //     { author: "Herman Melville", title: "Moby Dick", pageNumber: 123 },
// //     { author: "William Shakespeare", title: "Hamlet", pageNumber: 123 },
// //   ];
  
// //   const App = () => {
// //     const [searchText, setSearchText] = React.useState("");
  
// //     const filteredBooks = books.filter(
// //       ({ author, title }) =>
// //         author.toLowerCase().includes(searchText.toLowerCase()) ||
// //         title.toLowerCase().includes(searchText.toLowerCase())
// //     );
  
// //     return (
// //       <div>
// //         <input
// //           type="text"
// //           value={searchText}
// //           onChange={({ target }) => setSearchText(target.value)}
// //         />
// //         <ul>
// //           {filteredBooks.map(({ author, title }) => (
// //             <li key={title}>
// //               <strong>{title}</strong> by {author}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   };