 export default  function Car2(){
return(
<>
 <div className="car-card">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center gap-3 fs-sm fw-medium">
                                        <div className="text-dark"><i className="fa-solid fa-person-walking text-muted me-2"></i>250m
                                            <span className="text-muted fw-normal">(8 min)</span>
                                        </div>
                                        <div className="text-warning"><i className="fa-solid fa-star"></i> <span className="text-dark">4.0
                                            <span className="text-muted fw-normal">(87)</span></span></div>
                                    </div>
                                    <i className="fa-regular fa-heart text-muted fs-5 cursor-pointer hover-danger"></i>
                                </div>
                                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
                                    className="car-img" alt="Opel Insignia" />
                                <div className="d-flex justify-content-between align-items-end mt-3">
                                    <div>
                                        <h5 className="fw-bold mb-1">Opel Insignia</h5>
                                        <div className="text-muted fs-sm">2.0 Turbo Grand Sport (230 hp, AWD)</div>
                                    </div>
                                    <div className="text-end">
                                        <span className="fs-5 fw-bold">$19.99</span><span className="text-muted fs-sm"> / hour</span>
                                    </div>
                                </div>
                            </div>
</>
)
 }