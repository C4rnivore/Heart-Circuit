import heart_img from'./img/heart.png'
import down_arrow from './img/down_arrow.svg'

function Home() {
    return (
        <div className="home_base">
            <div className="home-mobile" >
                <div className="text-label-mobile">
                    PRODUCT<br/> NAME
                </div>
                <div className="text-info-mobile">
                    <p className="text-content-mobile">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>

            <div className="home">
                <div className="text-container">
                    <div className="text-label">
                        HEART <br/> <span className="label-part">CIRCUIT</span>
                    </div>
                    <div className="text-info">
                        <p className="text-content">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
                <img className="png-container" src={heart_img} alt={""}/>
            </div>
        </div>
    );
}
export default Home;