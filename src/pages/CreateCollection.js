import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const CreateCollection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };
    return (
        <>
            <Meta title={"Create Collection"} />
            <BreadCrumb title="Create Collection" />
            <div className="create-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Create Your New Collection</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div className="circle-image-wrapper">
                                    {selectedImage && <img src={selectedImage} alt="Selected" />}
                                </div>
                                <input type="file" onChange={handleImageChange} />
                                <input type="text" placeholder="Collection Title" />
                                <textarea placeholder="Collection Description"></textarea>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCollection;
