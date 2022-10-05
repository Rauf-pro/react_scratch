import React from "react";

//Example for class base component

class SearchInput extends React.Component { 
    // First way of instance this connection with SearchInput function
    // constructor(){
    //     super()
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }


  state = {entry: ' '}
// Second way of istance with this arrow function connection with SearchInput
  onFormSubmit = (event) => {
     event.preventDefault()
     this.props.onSearchSubmit(this.state.entry)
   
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={(event) => this.setState({entry:event.target.value})}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
