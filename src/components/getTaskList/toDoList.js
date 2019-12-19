import React from 'react';
import axios from 'axios';
import ListItem from './listItems'
import { Link } from 'react-router-dom'


const TODOLISTS_API = 'http://localhost:5000/lists';
const style = {
    listStyle: 'none'
}

export default class ToDoList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Lists : [],
            }
        }

        renderLists = (listData) => {
            const lists = listData.map((lists) =>
            <ListItem key= {"Title"+ lists.title} keys= {lists} />
            )
            this.setState({lists})
        }

        getListsAxios = async() => {
            console.log('Coneected for Lists')
            const [lists] = await Promise.all([
                axios.get(TODOLISTS_API),
            ]);
                // console.log(lists.data.data)
                this.renderLists(lists.data.data)
                
        }

        componentDidMount = async () => {
            await this.getListsAxios()
        }

        render() {

            return ( 
                <div>
                    <p></p>
                    <Link to= "/newList">
                        <button>Add List</button><br />
                    </Link>
                    <ul style = {style}>
                        {this.state.lists}
                    </ul>
                </div>
                );
            };
        }

