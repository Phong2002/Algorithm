import React, { Component } from 'react';
import Node from './node.js';
import './linkedlist.css';

class linkedlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkedlist:[],
            index:"",
            value:"",
            console:"",
            input:[],
            input2:""
        }
    }

    handlePrintList = ()=>{
        let list = ""
        this.state.linkedlist.forEach((value, index)=>{
            setTimeout(()=>{
                let newList = this.state.linkedlist
                if(index>0){
                    newList[index-1].browse="";
                }
                newList[index].browse="1";
                this.setState({linkedlist:newList})
                list +=(value.data.toString()+" ")
                this.setState({console:list})
            },500*index)
        })

       setTimeout(()=>{
           let newList = this.state.linkedlist
           newList[this.state.linkedlist.length-1].browse="";
           this.setState({linkedlist:newList})
       },500*this.state.linkedlist.length)

    }

    handleFindNode = () => {

        if(this.state.input[0]==""){}
        else{
            this.setState({console:""}) 
            const n = parseInt(this.state.input[0])>=parseInt(this.state.linkedlist.length)?parseInt(this.state.linkedlist.length):parseInt(this.state.input[0])  
            for(let i=0; i<n+1;i++){
                setTimeout(()=>{
                    let newList = this.state.linkedlist
                    if(i>0&&i<=this.state.input[0]){
                        newList[i-1].browse="";
                    }
                    if(i<this.state.linkedlist.length){
                    newList[i].browse="1";}
                    this.setState({linkedlist:newList})
                    if(i==n&&i<=this.state.linkedlist.length-1){
                        this.setState({console:newList[i].data})
                }
            },500*i)
        }

        setTimeout(()=>{
            let newList = this.state.linkedlist
            if(this.state.linkedlist.length!=0){
            newList[n>=parseInt(this.state.linkedlist.length)?parseInt(this.state.linkedlist.length)-1:parseInt(this.state.input[0])].browse="";}
            this.setState({linkedlist:newList})
            if(this.state.input[0]>=0 && this.state.input[0] <=this.state.linkedlist.length-1) {}
            else {
            this.setState({console:"Danh sach lien ket rong hoac phan tu tim kiem khong ton tai"})
            }
            this.setState({input2:""})
        },500*this.state.linkedlist.length)
    }
    }

    handleCreateNewNode = () => {
        this.setState({consolog:""})
        if(this.state.input[1]==""){}
        else{

            this.setState({console:""}) 
            const n = parseInt(this.state.input[0])>=parseInt(this.state.linkedlist.length)?parseInt(this.state.linkedlist.length):parseInt(this.state.input[0])  
            for(let i=0; i<n+1;i++){
                setTimeout(()=>{
                    let newList = this.state.linkedlist
                    if(i>0&&i<=this.state.input[0]){
                        newList[i-1].browse="";
                    }
                    if(i<this.state.linkedlist.length){
                    newList[i].browse="1";}
                    this.setState({linkedlist:newList})
            },500*i)
        }
        setTimeout(()=>{
            let newList = this.state.linkedlist
            if(this.state.linkedlist.length!=0){
                newList.forEach(function(value,index){
                    value.browse="";
                })
            }
            if(this.state.input[0]>this.state.linkedlist.length){
            this.setState({console:"khong the chen node moi vao vi tri "+this.state.input[0]})
        }
        else{
        let newNode = {
            address:"",
            data:"",
            next:"",
            browse:"",
        };
        newNode.address = (Math.floor(Math.random() * 100000000) + 100000000).toString();
        newNode.data= this.state.input[1];
        
        if(this.state.input[0] == this.state.linkedlist.length){
            newNode.next="NULL"
        }
        else {
            newNode.next=this.state.linkedlist[this.state.input[0]].address
        }

        newList = this.state.linkedlist
        newList.splice(this.state.input[0],0,newNode)
         if(this.state.input[0]>0){
            newList[this.state.input[0]-1].next=newList[this.state.input[0]].address
            
        }
        this.setState({linkedlist: [...newList]});
        this.setState({input2:""})
       
    }
    
    },500*n)
    }}
    

    handleRemoveNode = () => {
        if(this.state.input[0]===""){
        }
        else{
            this.setState({console:""}) 
            const n = parseInt(this.state.input[0])>=parseInt(this.state.linkedlist.length)?parseInt(this.state.linkedlist.length):parseInt(this.state.input[0])  
            for(let i=0; i<n+1;i++){
                setTimeout(()=>{
                    let newList = this.state.linkedlist
                    if(i>0&&i<=this.state.input[0]){
                        newList[i-1].browse="";
                    }
                    if(i<this.state.linkedlist.length){
                    newList[i].browse="1";}
                    this.setState({linkedlist:newList})
            },500*i)
        }
        setTimeout(()=>{
            let newList = this.state.linkedlist
            if(this.state.linkedlist.length!=0){
                newList.forEach(function(value,index){
                    value.browse="";
                })
            }
        if(this.state.input[0]>=this.state.linkedlist.length){
            this.setState({console:"khong the xoa node o vi tri "+this.state.input[0]})
           }

        else{
            let newList = this.state.linkedlist
            newList.splice(this.state.input[0],1)
            if(this.state.input[0]>0){
                if(this.state.input[0]==this.state.linkedlist.length){
                    newList[this.state.input[0]-1].next="NULL"
                }
                else
                newList[this.state.input[0]-1].next=newList[this.state.input[0]].address
            }
            this.setState({linkedlist: [...newList]});
        }
        this.setState({input2:""})
     
    },(n+1)*500)}
}

    renderlist = ()=> {
        return this.state.linkedlist.map((value, index) =>{
            return (<Node key ={value.address} data={value.data} next = {value.next} browse={value.browse} address={value.address}/> )
        })
    }

    printHeader = () => {
        if(this.state.linkedlist[0]){
            return this.state.linkedlist[0].address
        }
        else
        return "null"
    }

    handleChangeInput=(e)=> {
        const a=e.target.value;
        const input = a.split(' ').map((item, i) => parseInt(item))
        this.setState({input:input})
        this.setState({input2:e.target.value})
    }
    render() {
        return (
            <>
            {/* display button */}
            <div className="ButtonHandle">
                <button onClick={this.handlePrintList}>Print List</button>
                <button onClick={this.handleFindNode}>Find Node</button>
                <button onClick={this.handleCreateNewNode}>Insert Node</button>
                <button onClick={this.handleRemoveNode}>Remove Node</button>

               
                <div className="inputNode popover__wrapper1">
                    Input <input onChange={this.handleChangeInput} value={this.state.input2} type = "text"/>
                    <div class="popover__content">
                    <p class="popover__message">
                    Find Node : Với 1 tham số đầu vào là index của phần tử cần tìm kiếm<br></br>
                    Insert Node : Với 2 tham số đầu vào là index và value <br></br>
                    Remove Node : Với 1 tham số đầu vào là index của phần tử cần xóa 
                     </p>
                </div>
                </div>

                <div className="head">
                    Head : {this.printHeader()}
                </div>
            </div>

            {/* display list node */}
            <div className="ListNode">
                <div className="row2"> 
                    {this.renderlist()}
                </div>
                
                 {/* display terminal */}
                <div className="console row2">
                    {this.state.console}
                </div>

           

            </div>
            </> 
        );
    }
}

export default linkedlist;