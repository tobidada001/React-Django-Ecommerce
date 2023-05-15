import vendor1 from '../../img/vendor-1.jpg'

export default function Vendor() {
    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col">
                    <div className="owl-carousel vendor-carousel">
                        <div className="bg-light p-4">
                            <img src={vendor1} alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src={vendor1} alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src={vendor1} alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src={vendor1} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}