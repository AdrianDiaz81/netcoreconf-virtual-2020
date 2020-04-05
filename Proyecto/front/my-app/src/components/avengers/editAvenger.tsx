import * as React from 'react';
import IAvenger from '../../model/iavengers';

export interface IEditAvengerProps {
loadIdAvenger:(id:string)=>Promise<IAvenger>,
editAvenger:(avenger:IAvenger)=>Promise<boolean>,
avenger:IAvenger,
match?: any;
}

export interface IEditAvengerState{
    id:string;
    name:string;
    description:string;    
    image:string;
}

export class EditAvenger extends React.Component<IEditAvengerProps, IEditAvengerState> {
    
    constructor(props:IEditAvengerProps) {
        super(props);
        this.onClick.bind(this);
        this.onChangeDescription.bind(this);        
        this.onChangeImage.bind(this);
        this.onChangeName.bind(this);
        this.state={
            id:'',
            name:'',
            description:'',            
            image:''
        };
    }

    public componentWillMount(){      
      this.props.loadIdAvenger(this.props.match.params['id']);
  }

  public componentWillReceiveProps(nextProps:IEditAvengerProps, olldProps:any){
        this.setState({
            name:nextProps.avenger.name,
            description:nextProps.avenger.description,
            image:nextProps.avenger.image,
            id:this.props.match.params['id']
});
  }

    public onClick(){
        this.props.editAvenger({
            id:this.state.id,
            name:this.state.name,
            description:this.state.description,
            image:this.state.image
        });

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
            <legend className="text-center">Edicion</legend>
    
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="name">Name</label>
              <div className="col-md-9">
                <input id="name" name="name" type="text" value={this.state.name} placeholder="Your name" onChange={handleOnClickName} className="form-control"/>
              </div>
            </div>
    

            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="description">Description</label>
              <div className="col-md-9">
                <input id="description" name="description" type="text" value={this.state.description} placeholder="Description"  onChange={handleOnClickDescription} className="form-control"/>
              </div>
            </div>
    
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="message">Image</label>
              <div className="col-md-9">
              <input id="image" name="image" type="text" value={this.state.image} placeholder="Image" onChange={handleOnClickImage} className="form-control"/>
                       </div>
            </div>

            <div className="form-group">
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-primary btn-lg" onClick={handleOnClick} >Editar</button>
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