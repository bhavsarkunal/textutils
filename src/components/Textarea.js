import React, {useState} from 'react';

export default function Textarea(props) {

    const onchangetext = (event)=>{
        console.log("Onchange event fired");
        setText(event.target.value);
    }

   const handleUpclick = ()=>{
       console.log("clicked");
       
       if (state === "To Uppercase"){
            let newtext = text.toUpperCase();
            setText(newtext);
           setState("To Lowercase");
       }
       else{
        let newtext = text.toLowerCase();
        setText(newtext);
        setState("To Uppercase");
       }
   }
   const handleclear = ()=>{
       setText("");
   }

   const handlecopy = ()=>{
       var text = document.getElementById("exampleFormControlTextarea1");
       text.select();
       text.setSelectionRange(0, 99999);
       navigator.clipboard.writeText(text.value);

   }

    const [text, setText] = useState("Enter text here");
    const [state, setState] = useState("To Uppercase");
    // let clear = null;
    
    
  return (
    <div>
        <div className="container my-3">
            <label htmlFor="exampleFormControlTextarea1" className="my-3 form-label"><h2>{props.title} - Enter text to analyze</h2></label>
            <textarea className="form-control" onChange={onchangetext} value={text} id="exampleFormControlTextarea1" rows="7"></textarea>
        <button className="my-2 mx-1 btn btn-primary" onClick={handleUpclick}>{state}</button>
        <button className="my-2 mx-1 btn btn-primary" onClick={handleclear}>Clear</button>
        <button className="my-2 mx-1 btn btn-primary" onClick={handlecopy}>Copy</button>

        </div>
    </div>
  );
}
