export default  function Car3(){
return(
<>
<div className="car-card">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center gap-3 fs-sm fw-medium">
                                        <div className="text-dark"><i className="fa-solid fa-person-walking text-muted me-2"></i>90m
                                            <span className="text-muted fw-normal">(3 min)</span>
                                        </div>
                                        <div className="text-warning"><i className="fa-solid fa-star"></i> <span className="text-dark">5.0
                                            <span className="text-muted fw-normal">(766)</span></span></div>
                                    </div>
                                    <i className="fa-solid fa-heart text-danger fs-5 cursor-pointer"></i>
                                </div>
                                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800"
                                    className="car-img" alt="Mazda 6" />
                                <div className="d-flex justify-content-between align-items-end mt-3">
                                    <div>
                                        <h5 className="fw-bold mb-1">Mazda 6</h5>
                                        <div className="text-muted fs-sm">2.5 Turbo Premium (250 hp, AWD)</div>
                                    </div>
                                    <div className="text-end">
                                        <span className="fs-5 fw-bold">$22.99</span><span className="text-muted fs-sm"> / hour</span>
                                    </div>
                                </div>
                            </div>
                        
</>
)
}