export default function Hello() {
    function showName() {
        console.log('Morgan');
    }
    function showAge(age) {
        console.log(age);
    }
    function showTxt(txt) {
        console.log(txt);
    }
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button
              onClick={()=> {
                showAge(9);
                }}
            >
              Show age</button>
            <input type="text" onChange={(e)=>{
                const txt = e.target.value;
                showTxt(txt);
            }} />
        </div>
    )
};