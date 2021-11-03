import axios from 'axios'
import {useEffect, useState} from 'react'
import './PaintingInfo.css'
//get data from the backend related to the id and display this on page
function PaintingInfo({pid}) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [resp, setResp] = useState([])
    console.log(resp)
    useEffect(() => {
        const timer = setTimeout(() => {
          axios.post('http://localhost:3001/painting/getid', {id: pid})
        .then((res) =>{
            console.log(res)
            console.log(res.data)
            
            setId(res.data.id)
            setResp(res.data.responses)
            setName(res.data.name)
            setLink(res.data.link)
            
            console.log(resp)
            // console.log(resp.length)
        })}, 1000);
          return () => clearTimeout(timer);
        
    }, [])

    const sortArray = (resp) =>{
        console.log(resp)
        let arr=resp.slice()
        // console.log(arr)
        let set = new Set(arr);
        let count=0;
        set = Array.from(set);
        // console.log(set)
        let obj={}
        for(let i=0; i<set.length; i++){
            for(let j=0; j<arr.length; j++){
                if(set[i]===arr[j]){
                    count++;
                }
            }
            obj[set[i]]=count;
            // console.log(set[i], count)
            count=0;
        }
        // console.log(obj)
        
        let keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]})
        keysSorted.reverse()
        return [keysSorted, obj]
    
    }
   
    return (   
        <div className="responsediv">
            
            <div class="image" >
                <img id ="img1" src ={link} alt = "starwarsbtch"></img>
                <br />
                {name}
                <br />
            </div>
            
            <div class="responses">
                <p class="respons">Responses:</p>
                <div id="respinn">
                    {/* <button onClick = {dispResp} >Click</button> */}
                    
                    {
                    sortArray(resp)[0].map(response =>(
                        // <h6>{resp}</h6>
                       <p>{response}: {sortArray(resp)[1][response]}</p>
                       
                    ))}
                    
                    <br />
                </div>
            </div>
        </div>
    )
}
// let arr=["a", "b", "c", "d", "e", "a", "b", "e", "s", "b", "d"]
// let set = new Set(arr);
// let count=0;
// set = Array.from(set);
// console.log(set)
// let obj={}
// for(let i=0; i<set.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(set[i]===arr[j]){
//             count++;
//         }
//     }
//     obj[set[i]]=count;
//     console.log(set[i], count)
//     count=0;
// }
// console.log(obj)
// keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]})
// console.log(keysSorted.reverse()); 
// for(let i=0; i<keysSorted.length; i++){
//     console.log(keysSorted[i], obj[keysSorted[i]])
// }

export default PaintingInfo
