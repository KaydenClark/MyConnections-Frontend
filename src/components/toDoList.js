import React from 'react';
import axios from 'axios';
// import { NONAME } from 'dns';
import ListItem from './listItems'

const TODO_API = 'http://todoapia.mynetworkconnections.com/lists';
const style = {
    listStyle: 'none'
}

export default class ToDoList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                list : []
            }
        }

        renderLists = (data) => {
            const lists = data.map((list) => 
                <ListItem key= {list._id} list= {list} />
            );
            this.setState({lists})
        }

        getListsAxios = () => {
            console.log('coneected')
            axios.get(TODO_API)
                .then((response) => {
                    // handle success
                    this.renderLists(response.data.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

        componentDidMount () {
            this.getListsAxios()
        }

        render() {

            return ( 
                <div>
                    <ul style = {style}>
                        {this.state.lists}
                    </ul>
                    <p></p>
                    <button>Add List</button><br />
                    <p></p>
                    <button>Add Task</button><br />
                </div>
                );
            };
        }