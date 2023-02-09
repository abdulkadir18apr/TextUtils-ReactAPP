// import React from 'react'
import React,{useState} from 'react'



export default function TextForm(props){
    const HandleUppercaseClick=()=>{
        // console.log(text.toUpperCase());
        setText(text.toUpperCase());
        props.showAlert("UpperCase Done","success")


    }
    const HandleLowercaseClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("LowerCase Done","success")

    }
    const HandleDefaultcaseClick=()=>{
        setText(def);
        props.showAlert("DefaultCase Done","success")

    }
    const HandleClearText=()=>{
        setText("");
        props.showAlert("text Cleared","success")

    }
    const HandleOnchange=(event)=>{
        setText(event.target.value);
        // var cpy=event.target.value;
        setDef(event.target.value);
    }
    const RemoveExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Remove Extra Spaces","success")

    }
    const HandleCopyText=()=>{
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to clipboard","success")


    }
    function chooseStyle(){
        let style=""
        if(props.customColor!==""){
            style={
                backgroundColor:props.customColor,
                textAlign:'justify',

            }
        }
        else{
            style={backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white',textAlign:'justify'}
        }
        return style
    }

    const[text,setText]=useState('');
    const[def,setDef]=useState('');
    // const myStyle={backgroundColor:props.mode==='light'?'white':'#',color:props.mode==='light'?'black':'white'}
 

    return(
        <>
            <div className='container' style={chooseStyle()}>
                <div className="mb-3">
                <label htmlFor="my-box" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" id="my-box" rows="15" value={text} onChange={HandleOnchange} style={chooseStyle()}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={HandleUppercaseClick}>Convert-To-Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={HandleLowercaseClick}>Convert-To-LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={HandleDefaultcaseClick}>Convert-To-defaultCase</button>
                <button className="btn btn-primary mx-1" onClick={RemoveExtraSpace}>Revome Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={HandleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={HandleClearText}>Clear Text</button>
                
            </div>
            <div className="container my-3" style={chooseStyle()}>
                <h1>Your Text Summary</h1>
                <p>
                    {text===""?'0':text.split(" ").length} Words <br/>{text.length} characters <br/> {0.008 * text.split(" ").length} Minutes read
                </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
               
            </div>
        </>
    )
}

