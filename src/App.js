import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

        class fakeshop extends Component {
        
        
            constructor(props) {
              
                super(props);
        
                   console.log("=====UsersTable Component Created=======");
                    this.state={
                       title:'Products List',
                       Products:[]
                   }
                };
                  
          componentDidMount(){
             
            
            axios.get("https://fakestoreapi.com/Products/")
                 .then(response=>{
                     this.setState({Products:response.data});
                 })
                 console.log("=====ProductsTable Component mounted=======");
                
           
          }
        
          
          componentWillUnmount(){
              console.log("=====EmployeeTable Component  willUnMount=======");  
          }
          
          
          componentDidUpdate(){
              console.log("=====EmployeeTable Component  didUpdate=======");    
          }
          
        
        
          render() {
                return (
                   
                      
                      
         <div class="container">


                           
  
           <h2>{this.state.title}</h2>
          
         {
           this.state.Products.map(u=>{

                         return  <div className="four column grid">       
                                <div className="four column grid"   >
                                <div className="ui link cards" >
                                  <div className="card" >
                                  
                                        <div className="image"><Link to={`${u.id}`}>
                                <img class="card-img-top" src={u.image} alt="Card image" style={{width:"40%"}} > 
                                 </img></Link>
                            
                                    </div>    
                                    
                                    </div>
                                    </div>
                                    </div>
    </div>

                               }
                            )}
            
            
        
                 </div>
        
        
              
      
        
        
        
              
        
                        
                   
                )
}
}

export default fakeshop;