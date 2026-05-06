export default  function Fueltype(){
return(
<>
   <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3 cursor-pointer">
                            <label className="text-muted fs-xs fw-bold mb-0 cursor-pointer">FUEL TYPE</label>
                            <i className="fa-solid fa-chevron-up text-muted fs-xs"></i>
                        </div>
                        <div className="checkbox-grid">
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input" type="checkbox" checked id="gas" />
                                <label className="form-check-label fs-sm" htmlFor="gas">Gasoline</label>
                            </div>
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input" type="checkbox" checked id="flex" />
                                <label className="form-check-label fs-sm" htmlFor="flex">Flex Fuel (E85)</label>
                            </div>
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input" type="checkbox" id="diesel" />
                                <label className="form-check-label fs-sm" htmlFor="diesel">Diesel</label>
                            </div>
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input" type="checkbox" id="hybrid" />
                                <label className="form-check-label fs-sm" htmlFor="hybrid">Hybrid</label>
                            </div>
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input" type="checkbox" checked id="electric" />
                                <label className="form-check-label fs-sm" htmlFor="electric">Electric</label>
                            </div>
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input" type="checkbox" id="hydrogen" />
                                <label className="form-check-label fs-sm" htmlFor="hydrogen">Hydrogen</label>
                            </div>
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input" type="checkbox" id="other" />
                                <label className="form-check-label fs-sm" htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
</>
)
}