import react, { useState } from 'react';
    
    
function BoxForm(props) {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(1);

    const addBox = (e) => {
        e.preventDefault();
        props.addBox(color, size);
        setColor("");
        setSize(1);
    };

    return (
        <div className="card p-3">
            <form onSubmit={addBox}>
                <div className="form-group">
                    <label className="form-label h3 mb-3">Color</label>
                    <input type="text" className="form-control mb-3" onChange={e => setColor(e.target.value)} name="color" value={color}/>
                    <label className="form-label h3 mb-3">Size</label>
                    <input type="number" className="form-control mb-3" onChange={e => setSize(e.target.value)} name="size" value={size}/>
                    <input type="submit" value="Add" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}
    
export default BoxForm;
