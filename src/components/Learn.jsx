const Learn = (params) => {
    
    const {setTemp} = params;
    const handleClick = (e)=>{
      
        setTemp()
        
    }
  return (
    <div>
        <h1 onClick={handleClick} className=" text-red-600">CLICK ME :</h1>
        <h1 className=" text-red-700">hey there</h1>
    </div>
  )
};
export default  Learn;
