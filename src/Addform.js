import React, {Component} from 'react'

class Addform extends Component {
    constructor(props){
        super(props);
        this.state={ content: "" };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content !== "") {
            this.props.addTodo(this.state.content);
            this.setState({
                content: ""
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        );
    }
}

export default Addform