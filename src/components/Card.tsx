export default function Card({title, toggleVisibiliy, speed, setSpeed}){
    return (
        <div className='p-4 m-5 border-2 rounded-lg shadow-md text-black w-64'>
            <button 
                onClick={() => toggleVisibiliy((prev:boolean) => !prev)}
                className='bg-blue-500 text-white p-2 px-3 mb-2 rounded-md'
            >toggle {title}</button>
            <div>Rotation Speed:</div>
            <div className="flex gap-2">
                <div className='flex bg-neutral-300 rounded-md grow '>
                    <input className='w-full' type='range' id={title} min='0.01' max='0.1' step='0.01' onChange={(e) => setSpeed(e.target.value)} />
                </div>
                <input 
                    className='bg-neutral-300 rounded-md w-10 p-1' 
                    value={speed} 
                    onChange={(e) => {
                        if(parseFloat(e.target.value) < 0.01 || parseFloat(e.target.value) > 1.0) return;
                        setSpeed(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}