import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./nav"
import LeftContainer from "./left-container"
import RightContainer from "./right-container";

function Post(props) {
    return (

        <div className="postContainer"> 

            <div className="Post">

                <div className="Profile">

                    <img width={45} height={45} src={props.myimgUrl}></img>

                    <div>

                        <h4 style={{ margin: "0px" }}>  {props.name} </h4>

                        <span style={{ margin: "0px" }}>28-Aug-2023</span>

                    </div>

                    <div class="post-opt">
                        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"
                            class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3">
                            <g fill-rule="evenodd" transform="translate(-446 -350)">
                                <path
                                    d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                                </path>
                            </g>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 384 512">
                            <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>


                    </div>

                   

                </div>

                <p><strong>{props.text}</strong></p>


                <img width={400} src={props.imgUrl}></img> <br />

                <div className="buttons">

                    <button><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>Like</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>Comments</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>Share</button>

                </div>

            </div>

        </div>
    );
}

ReactDOM.render(<div className="Parent">
    <Header />
    <LeftContainer />
    <RightContainer />
    <Post myimgUrl="https://avatars.githubusercontent.com/u/99830227?v=4" name="Ghulam Mustafa" text='"Audi E Tron GT"' imgUrl="https://www.ccarprice.com/products/Audi-E-Tron-GT-2021_1.jpg" />
    <Post myimgUrl="https://avatars.githubusercontent.com/u/99830227?v=4" name="Ahmed Raza" text='"70 dodge-charger-matte-black-edition"' imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQvTBQy_yFSbCbaf2CyPVxAmabJ6Cvtexs7Mc0vwIrBOY_njlNDykjWZovCthviCiiOY&usqp=CAU" />
    <Post myimgUrl="https://avatars.githubusercontent.com/u/99830227?v=4" name="Shaheer Raza" text='"F-150 RAPTOR"' imgUrl="https://build.ford.com/dig/Ford/F-150%20F-150/2023/HD-TILE/Image%5B%7CFord%7CF-150%20F-150%7C2023%7C1%7C1.%7C801A.W1R.145.PUM.LSC.88R.89B.A5GAA.TGA.SS5.573.924.435.57Q.168.RCA.BLDAC.55D.SPP.91X.61P.53B.55B.CCAB.CLFGP.CLMHN.64B.T7R.59R.AWD.998.67T.413.655.66C.50N.91B.76R.F150.471.SRS.588.50M.524.62W.763.59S.85P.77R.44G.XL4.LEA.%5D/EXT/1/vehicle.png" />
</div>, document.querySelector("#root"));