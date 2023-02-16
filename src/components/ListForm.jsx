import {useState} from 'react'

function ListForm(){
 const [idea, setIdea] = useState({});
    // function handleChange(e){
    //     setIdea(e.target.value)
    // }
    const handleChange = e=>setIdea(e.target.value)

    return(
        <div>
            <form onSubmit={e=>{
                e.preventDefault()}}>
                <label for='idea'>Insert awesome idea here;</label>
                <textarea id='idea' maxLength={255} onChange={handleChange}></textarea>
                <button type = 'submit'>Submit</button>


            </form>
        </div>
    )
}

export default ListForm;