import React from "react";
import silhouette from "./silhouette.webp";
import stickerBusiness from "./sticker_business.jpg";
import laptop from "./Laptop.jpg";
import "./Shop.css";

const Shop = () => {
    return (
        <main>
            <div className="card_container">
                <div className="card">
                    <div className="card_image_container">
                        <img src={stickerBusiness} alt="stickers on table" />
                    </div>
                    
                    <div className="card_title">
                        <h2>
                            Lorem, ipsum dolor 
                        </h2>
                    </div>
                    
                    <div className="card_description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate fuga facere? Impedit quam quae quaerat doloremque iusto iure architecto deserunt ullam, quod doloribus deleniti neque eveniet, voluptas repellat reiciendis.
                        </p>
                    </div>

                    <div className="card_subtitle">
                        <h3>
                            Price: 5$
                        </h3>

                        <input type="button" value="BUY NOW" />
                    </div>
                    
                </div>

                <div className="card">
                    <div className="card_image_container">
                        <img src={silhouette} alt="silhouette cameo 4" />
                    </div>
                    
                    <div className="card_title">
                        <h2>
                            Lorem, ipsum dolor 
                        </h2>
                    </div>
                    
                    <div className="card_description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate fuga facere? Impedit quam quae quaerat doloremque iusto iure architecto deserunt ullam, quod doloribus deleniti neque eveniet, voluptas repellat reiciendis.
                        </p>
                    </div>

                    <div className="card_subtitle">
                        <h3>
                            Price: 5$
                        </h3>

                        <input type="button" value="BUY NOW" />
                    </div>
                    
                </div>

                <div className="card">
                    <div className="card_image_container">
                        <img src={laptop} alt="laptop" />
                    </div>
                    
                    <div className="card_title">
                        <h2>
                            Lorem, ipsum dolor 
                        </h2>
                    </div>
                    
                    <div className="card_description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate fuga facere? Impedit quam quae quaerat doloremque iusto iure architecto deserunt ullam, quod doloribus deleniti neque eveniet, voluptas repellat reiciendis.
                        </p>
                    </div>

                    <div className="card_subtitle">
                        <h3>
                            Price: 5$
                        </h3>

                        <input type="button" value="BUY NOW" />
                    </div>             
                </div>
            </div>
        </main>
    )
}

export default Shop