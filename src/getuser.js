import React from 'react';
import axios from 'axios';


class Getuser extends React.Component{
	state={
		data :[],
	};
componentDidMount()
{
	axios.get('https://jsonplaceholder.typicode.com/users/')
	.then(res=>{
		console.log(res);
		this.setState({data : res.data});
	});
}
render(){
	return(
           <ul> 
              {this.state.data.map(data=><li key={data.id}>{data.name}</li>)}
              {this.state.data.map(data=><li>{data.address.street}</li>)}


           </ul>





		);
}
}

export default Getuser;



                      /*  {
                            this.state.users.map((user, index)=>{
                                return <UserState key={index} age={user.age}>{user.name}</UserState>
                            })
                        }
                    </div>
                              */
                           