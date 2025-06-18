import './style.css';
function Loginpage() {
  return (
    <div className="loginpage">
      <h1> Login </h1>
      <div class="input"> 
        <input type="Name" placeholder="Enter your name " ></input>
        <input type="password" placeholder="Enter your password"></input>
        <button> Sumbit </button>
       </div>
       <div class="footer-input">
        <div class="div">forgot</div>
        <div class="div">Signup</div>
       </div>
    </div>
  );
}

export default Loginpage;
