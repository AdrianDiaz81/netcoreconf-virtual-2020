import * as React from 'react';
import IAvenger from '../../model/iavengers';

export interface IAddAvengersProps {
addAvenger:(player:IAvenger)=>Promise<boolean>;
}

export interface IAddAvengerState{
    name:string;
    description:string;    
    image:string;
}


export class AddAvenger extends React.Component<IAddAvengersProps, any> {        
    constructor(props:IAddAvengersProps) {
        super(props);
        this.onClick.bind(this);
        this.onChangeDescription.bind(this);        
        this.onChangeImage.bind(this);
        this.onChangeName.bind(this);
        this.state={
            name:'',
            description:'',            
            image:''
        };
    }

    public onClick(){
        this.props.addAvenger({
            id:'',
            name:this.state.name,
            description:this.state.description,
            image:this.state.image
            }
        );

    }

public onChangeName(value:any){
this.setState({name:value.target.value});
}
public onChangeDescription(value:any){
    this.setState({description:value.target.value});
}
public onChangeImage(value:any){
    this.setState({image:value.target.value});
}

  

    public render() {    
        
        const handleOnClickName:any = (event: React.MouseEvent<HTMLElement>) => {
      
            this.onChangeName(event);
          
          }

          const handleOnClickDescription:any=       (event: React.MouseEvent<HTMLElement>) => {
      
            this.onChangeDescription(event);
          
          }    
          const handleOnClickImage:any=       (event: React.MouseEvent<HTMLElement>) => {      
            this.onChangeImage(event);          
          }

          const handleOnClick:any=(evente:any)=>{
              this.onClick();
          }
return (
<div className="container">
	<div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="well well-sm">
          <fieldset>
            <legend className="text-center">Alta</legend>
    
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="name">Name</label>
              <div className="col-md-9">
                <input id="name" name="name" type="text" placeholder="Name Avenger" onChange={handleOnClickName} className="form-control"/>
              </div>
            </div>
    

            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="Description">Description</label>
              <div className="col-md-9">
                <input id="club" name="description" type="text" placeholder="Description"  onChange={handleOnClickDescription} className="form-control"/>
              </div>
            </div>
                
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="message">Image</label>
              <div className="col-md-9">
              <input id="image" name="image" type="text" placeholder="Image" onChange={handleOnClickImage} className="form-control"/>
                       </div>
            </div>

            <div className="form-group">
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-primary btn-lg" onClick={handleOnClick} >Submit</button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
	</div>
</div>
);

    }
}