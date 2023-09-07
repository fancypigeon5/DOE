import React from "react";
import silhouette from "./silhouette.webp";
import stickerBusiness from "./sticker_business.jpg";
import laptop from "./Laptop.jpg";
import "./Contact.css";

const Contact = () => {
    return (
        <main>
            <div>
                <img src={stickerBusiness} alt="stickers on table" className="business" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, reprehenderit aliquid obcaecati eius qui dolore eligendi magni eveniet pariatur ea corrupti rem nam suscipit et consequatur eaque exercitationem quas!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam porro, eligendi nesciunt exercitationem deleniti ipsam totam deserunt ut, modi sint obcaecati? Corporis voluptatum accusantium esse incidunt fugiat quis est neque!
                </p>
            </div>
            <div>
                <img src={silhouette} alt="silhouette cameo 4" className="silhouette" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates soluta enim, eum accusamus ducimus error nobis voluptas porro, assumenda cumque expedita officia dicta odio dolore nihil deserunt. Provident, ad.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quaerat nobis ducimus obcaecati recusandae magnam? Impedit rerum, a aperiam facere ut numquam illo, amet fugit enim placeat tenetur ipsum repellat.
                </p>
            </div>
            <div>
                <img src={laptop} alt="laptop" className="laptop" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error dicta quae perferendis fugit esse ea suscipit illum neque! Facere omnis laudantium, nam repellendus id dolorum quaerat? Quisquam, corrupti! Illo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique, veniam officia, cum ullam optio asperiores quo quam ea commodi corporis corrupti, reiciendis repellat laudantium doloremque numquam pariatur excepturi accusantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, rem! Earum nemo vero totam repellendus suscipit illo ex accusantium officia. Earum porro vero quisquam quod aut quos voluptatum voluptates nostrum.
                </p>
            </div>
        </main>
    )
}

export default Contact