import React, {useState} from 'react'


export default function (props) {
    const [text, setText] = useState('');

    const handleUpClick = () =>{
        // console.log('UpperCase was Clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }

    const handleLoClick = () =>{
        // console.log('UpperCase was Clicked'+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }

    const handelOnChange = (event) =>{
        // console.log('onchaged');
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copied to clipboard','success');
    }

    const handleExtraSpaced = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed','success');
    }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'balck'}}>
        <div className="form-floating">
            <div className="my-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control my-2" style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'balck'}} placeholder="Leave a comment here" id="myBox" rows={8} value={text} onChange={handelOnChange} />
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaced}>Remove Extra Spaces</button>
            </div>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'balck'}}>
        <h1>Your text summery</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length.length*0.08} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview here"}</p>
    </div>
    </>
  )
}
