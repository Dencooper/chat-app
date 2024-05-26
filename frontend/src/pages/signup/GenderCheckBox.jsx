import { useState } from "react"

const GenderCheckBox = (props) => {
    const { inputs, setInputs } = props;
    function onChangeValue(event) {
        setInputs({ ...inputs, gender: event.target.value });
    }
    return (
        <div className="flex gap-4 mt-2">
            <div className="flex gap-2 items-center justify-center text-gray-200">
                Male<input type="checkbox" value="male" name="gender"
                    checked={inputs.gender === "male"}
                    className={`checkbox border-gray-300 ${inputs.gender === "male" ? "selected" : ""}`}
                    onChange={onChangeValue} />

            </div>
            <div className="flex gap-2 items-center justify-center text-gray-200">
                Female<input type="checkbox" value="female" name="gender"
                    checked={inputs.gender === "female"}
                    className={`checkbox border-gray-300 ${inputs.gender === "female" ? "selected" : ""}`}
                    onChange={onChangeValue} />
            </div>
        </div>
    )
}

export default GenderCheckBox;