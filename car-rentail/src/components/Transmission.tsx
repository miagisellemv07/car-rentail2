export default  function Transmission(){
return(
<>
 <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3 cursor-pointer">
                            <label className="text-muted fs-xs fw-bold mb-0 cursor-pointer">TRANSMISSION</label>
                            <i className="fa-solid fa-chevron-up text-muted fs-xs"></i>
                        </div>
                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-outline-dark btn-sm rounded-pill px-3 fw-medium bg-white">Any</button>
                            <button
                                className="btn btn-outline-secondary btn-sm rounded-pill px-3 border-light-subtle text-muted fw-medium">Automatic</button>
                            <button
                                className="btn btn-outline-secondary btn-sm rounded-pill px-3 border-light-subtle text-muted fw-medium">Manual</button>
                        </div>
                    </div>
 
                    <hr className="text-black-50 my-4 opacity-10" />
</>
)
}