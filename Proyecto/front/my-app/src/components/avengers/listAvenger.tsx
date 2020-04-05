import * as React from 'react';
import IAvenger from '../../model/iavengers';
import { NavLink } from 'react-router-dom';

export interface IListAvengerProps {
    avengerCollection:IAvenger[],
    loadAvenger:()=>Promise<IAvenger[]>;
}


export class ListAvenger extends React.Component<IListAvengerProps, any> {
    
    constructor(props:IListAvengerProps) {
        super(props);
  
    }
    public componentWillMount(){
        this.props.loadAvenger();
    }

    public render() {    
        
       const playerCollection:IAvenger[]=this.props.avengerCollection;
       const exact: boolean = true;
    
        let i:number=0;       
return (

<div className="container">
<div className="row">
<div className="col-lg-12 my-3">
            <div className="pull-right">
                <div className="btn-group">
                <NavLink className='btn btn-info' exact={exact} to={'/anyadir'} >
        Añadir
            </NavLink>
                </div>
            </div>
        </div>
    </div> 
    
    <div id="products" className="row view-group">
        {            
            playerCollection.map((item:IAvenger)=>{
                i=i+1;
                const editar: string = '/editar/'+item.id;
                return (
                    <div className="item col-xs-4 col-lg-4" key={item.id}>
                    <div className="thumbnail card">
                        <div className="img-event">
                            <img className="group list-group-image img-fluid" src={item.image} alt="" />
                        </div>
                        <div className="caption card-body">
                            <h4 className="group card-title inner list-group-item-heading">
                                {item.name}</h4>
                            <p className="group inner list-group-item-text">
                                {item.description}
                            </p>
                            <div className="row">                                
                                <div className="col-xs-12 col-md-6">
                                <NavLink exact={exact} to={editar} className="btn btn-success" >
        Editar
            </NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                );                
            })
        } 
   </div>                    
</div>)
    }

}