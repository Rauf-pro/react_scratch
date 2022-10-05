import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

class App extends React.Component{

    state = { images: [] }

  onSearchSubmit = async(entry) =>{
        
      const response = await axios.get(`https://pixabay.com/api/?key=30385333-23d35b0aa22f3c9fe16a8f58d&q=${entry}&image_type=photo&pretty=true`)
    console.log(this)
      this.setState({images:response.data.hits})
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
               <SearchInput onSearchSubmit={this.onSearchSubmit} />
               <ImageList images={this.state.images} />
            </div>
        )
    }
   
}

export default App;