import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/alertContext'


const Search =()=> {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
   
    const [text, setText] = useState('');
    

   const onSubmit = (e)=>{
        e.preventDefault();

        // console.log(this.state.text)
        if(text ===''){
           alertContext.setAlert('Please enter something', 'Light');
        }else{
        githubContext.searchUsers(text);
       setText('');
    }
}
   const onChange = (e)=>{
        setText(e.target.value);
    };  
       

        return (
            <div>
                <form onSubmit = {onSubmit} className="form">
                    <input 
                    type="text" 
                    name = "text"
                    value={text}
                    placeholder="Search Users..." 
                    onChange = {onChange}                   
                    />
                    <input 
                    type="submit"
                    value="Search" 
                    className='btn btn-dark btn-block'
                     />
                </form>
                {githubContext.users.length >0 && (<button 
                className= 'btn rbtn-light btn-block' 
                onClick={githubContext.clearUsers}>Clear Search Results</button>)}
               
            </div>
        )
    
}

export default Search
