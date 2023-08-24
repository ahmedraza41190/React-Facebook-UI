import React from "react";
import ReactDOM from "react-dom";
import "./index.css";



function Post(props) {
  return (
    <div className="Post">

      <div className="Profile">

        <img width={55} height={55} src={props.myimgUrl}></img>

          <div>

            <h4 style={{margin:"0px"}}>  {props.name} </h4>

            <span style={{margin:"0px"}}>28-Aug-2023</span>

          </div>

      </div>

      <p><strong>{props.text}</strong></p>


      <img width={400} src={props.imgUrl}></img> <br />

      <div className="buttons">

      <button>Like</button>
      <button>Comments</button>
      <button>Share</button>

      </div>

    </div>
  );
}

ReactDOM.render(<div>

  <Post myimgUrl="https://avatars.githubusercontent.com/u/99830227?v=4" name="Ghulam Mustafa" text='"Audi E Tron GT"' imgUrl="https://www.ccarprice.com/products/Audi-E-Tron-GT-2021_1.jpg" />
  <Post myimgUrl="https://avatars.githubusercontent.com/u/99830227?v=4" name="Ahmed Raza" text='"70 dodge-charger-matte-black-edition"' imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQvTBQy_yFSbCbaf2CyPVxAmabJ6Cvtexs7Mc0vwIrBOY_njlNDykjWZovCthviCiiOY&usqp=CAU" />
  <Post myimgUrl="https://avatars.githubusercontent.com/u/99830227?v=4" name="Shaheer Raza" text='"F-150 RAPTOR"' imgUrl="https://build.ford.com/dig/Ford/F-150%20F-150/2023/HD-TILE/Image%5B%7CFord%7CF-150%20F-150%7C2023%7C1%7C1.%7C801A.W1R.145.PUM.LSC.88R.89B.A5GAA.TGA.SS5.573.924.435.57Q.168.RCA.BLDAC.55D.SPP.91X.61P.53B.55B.CCAB.CLFGP.CLMHN.64B.T7R.59R.AWD.998.67T.413.655.66C.50N.91B.76R.F150.471.SRS.588.50M.524.62W.763.59S.85P.77R.44G.XL4.LEA.%5D/EXT/1/vehicle.png" />
</div>, document.querySelector("#root"));