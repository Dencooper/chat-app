const GenderCheckBox = () => {
    return (
        <div className='flex mt-2'>
            <div className='form-control'>
                <label className="gap-2">
                    <span>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900' />
                </label>
            </div>
            <div className='form-control'>
                <label className="gap-2">
                    <span>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox